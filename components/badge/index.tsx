import { PropsWithChildren } from 'react'
import styles from './style.module.css'
import clsx from 'clsx'

export default function Badge({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span {...props} className={clsx(styles.badge, 'font-mono', className)} />
  )
}
