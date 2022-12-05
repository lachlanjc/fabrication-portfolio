'use client'

import { useRef, type PropsWithChildren, type MouseEvent } from 'react'
import clsx from 'clsx'
import classes from './style.module.css'

const variants = {
  blue: '#0141FF55',
  neutral: '#FFFFFF55',
  pink: '#BA1EE455',
  green: '#11FFAD55',
} as const

export default function TiltCard({
  children,
  className,
  variant,
  onClick,
  active,
}: PropsWithChildren<{
  variant: keyof typeof variants
  className?: string
  active?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}>) {
  const ref = useRef<HTMLButtonElement>(null)
  function onMouseMove(e: MouseEvent<HTMLButtonElement>): void {
    let el = ref.current
    if (!el) return
    const bounds = el.getBoundingClientRect()
    const mouseX = e.clientX
    const mouseY = e.clientY
    const leftX = mouseX - bounds.x
    const topY = mouseY - bounds.y
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2)
    el.style.transform = `
        scale3d(1.01, 1.01, 1.01)
        rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(
      distance
    )}deg)
      `
    el.style.setProperty(
      '--glow-bg',
      `radial-gradient(
        circle at
        ${2 * center.x + bounds.width / 2}px
        ${2 * center.y + bounds.height / 2}px,
        ${variants[variant]},
        #0000000f
      )`
    )
    el.style.setProperty('--glow-opacity', '0.3')
  }
  function onMouseLeave() {
    ref.current?.style.removeProperty('transform')
    ref.current?.style.removeProperty('background')
    ref.current?.style.setProperty('--glow-opacity', '0')
  }
  return (
    <button
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      ref={ref}
      className={clsx(classes.root, 'shadow-card rounded-xl', className)}
      aria-selected={active}
    >
      {children}
      <div className={classes.glow} aria-hidden />
    </button>
  )
}
