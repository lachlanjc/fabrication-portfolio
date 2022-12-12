'use client'
import { useState } from 'react'
import projects from './projects'
import TiltCard from '../components/tilt-card'
import Badge from '../components/badge'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Page() {
  const [activeKey, setActiveKey] = useState<string>()
  const activeProject = projects.find(({ id }) => id === activeKey)

  return (
    <motion.main
      layout="position"
      animate={{ transition: { duration: 0.5 } }}
      className="px-4 md:px-8 py-20 grid aria-dualcol:md:[grid-template-columns:1fr_2fr] mx-auto max-w-[36rem] aria-dualcol:md:max-w-none column-gap-8 row-gap-12"
      aria-colcount={activeProject ? 2 : 1}
    >
      <a
        href="https://github.com/lachlanjc/fabrication-portfolio"
        className="absolute top-0 right-0 p-4 text-slate-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition-colors group duration-250 z-10"
      >
        <svg
          viewBox="0 0 16 16"
          className="w-5 h-5 transition-transform group-hover:scale-150 group-focus:scale-150 origin-top-right"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
      <nav className="flex flex-col gap-6 [perspective:2000px]">
        <p className="font-bold text-2xl">Lachlan in Fabrication</p>
        <p className="-mt-3 mb-4 max-w-md">
          Over 6 weeks, I became comfortable using the band saw, laser cutter,
          drill press, and more, making 5 projects exploring the theme of{' '}
          <strong className="text-indigo-600">climate</strong>, all with no new
          materials.
        </p>
        {projects.map((proj) => (
          <TiltCard
            onClick={() => setActiveKey(proj.id)}
            variant="blue"
            key={proj.id}
            className="flex gap-6 items-center text-left p-2 aria-selected:ring ring-offset-2 aria-selected:ring-indigo-400 relative"
            active={proj.id === activeKey}
          >
            <Image
              src={proj.product[0]}
              placeholder={
                // @ts-expect-error
                proj.product[0].valueOf().src.endsWith('gif') ? 'empty' : 'blur'
              }
              width={160}
              height={128}
              alt=""
              className="object-cover object-bottom rounded-md [height:128px]"
            />
            <strong className="text-lg font-bold leading-tight">
              {proj.name}
            </strong>
            <span className="absolute top-0 right-2 leading-none text-zinc-500 opacity-10 [width:1ch] text-center inline-block text-6xl font-bold">
              {proj.week}
            </span>
          </TiltCard>
        ))}
      </nav>
      {activeProject && (
        <motion.article
          layout="position"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.25 } }}
          className="w-full max-w-2xl mx-auto flex flex-col gap-8"
          key={activeKey}
        >
          <Badge className="[align-self:start]">
            Week {activeProject.week}
          </Badge>
          <h1 className="font-bold text-6xl -mt-4 -mb-3">
            {activeProject.name}
          </h1>
          <p className="text-xl opacity-90 -mb-3">
            {activeProject.description}
          </p>
          <a
            href={activeProject.url}
            target="_blank"
            rel="noreferrer"
            className="font-bold rounded-full px-5 py-2 leading-tight border-2 text-indigo-600 border-indigo-600 hover:text-white focus:text-white focus:outline-none bg-white hover:bg-indigo-600 focus:bg-indigo-600 transition-colors duration-200 w-fit"
          >
            Read more<span className="ml-3">›</span>
          </a>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 shadow-card rounded-xl">
              <h3 className="font-bold uppercase text-sm text-gray-500 mb-2">
                Tools
              </h3>
              <ul className="font-sm font-mono text-gray-700" role="list">
                {activeProject.tools.map((mat) => (
                  <li key={mat}>{mat}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 shadow-card rounded-xl">
              <h3 className="font-bold uppercase text-sm text-gray-500 mb-2">
                Materials
              </h3>
              <ul className="font-sm font-mono text-gray-700" role="list">
                {activeProject.materials.map((mat) => (
                  <li key={mat}>{mat}</li>
                ))}
              </ul>
            </div>
          </div>
          {activeProject.product.map((img) => (
            <Image
              src={img}
              alt=""
              className="rounded-xl w-full h-auto shadow-card"
              placeholder={
                (img.valueOf() as { src: string }).src.endsWith('gif')
                  ? 'empty'
                  : 'blur'
              }
              key={(img.valueOf() as { src: string }).src}
            />
          ))}
          <h2 className="font-bold text-4xl mt-4">Process</h2>
          <div
            className={`grid gap-6 ${
              activeProject.process.length > 1 ? 'md:grid-cols-2' : ''
            } items-center`}
          >
            {activeProject.process.map((img) => (
              <Image
                src={img}
                placeholder={
                  (img.valueOf() as { src: string }).src.endsWith('gif')
                    ? 'empty'
                    : 'blur'
                }
                key={(img.valueOf() as { src: string }).src}
                alt=""
                className="rounded-xl max-w-full h-auto shadow-card"
              />
            ))}
          </div>
        </motion.article>
      )}
    </motion.main>
  )
}
