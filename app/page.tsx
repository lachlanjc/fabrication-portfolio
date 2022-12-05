'use client'
import { useState } from 'react'
import projects from './projects'
import TiltCard from '../components/tilt-card'
import Badge from '../components/badge'

export default function Page() {
  const [activeKey, setActiveKey] = useState<string>(projects[0].id)
  const activeProject = projects.find(({ id }) => id === activeKey)

  return (
    <main className="px-4 md:px-8 py-20 grid md:[grid-template-columns:1fr_2fr] gap-8">
      <nav className="flex flex-col gap-6 [perspective:2000px] text-left">
        {/* <p className="font-bold text-2xl">Fabrication</p> */}
        {projects.map((proj) => (
          <TiltCard
            onClick={() => setActiveKey(proj.id)}
            variant="blue"
            key={proj.id}
            className="flex gap-6 items-center p-2 aria-selected:ring ring-offset-2"
            active={proj.id === activeKey}
          >
            <img
              src={proj.images[0]}
              width={128}
              height={128}
              alt=""
              className="object-cover object-center rounded-md aspect-square"
            />
            <div>
              <h2 className="text-lg font-bold">{proj.name}</h2>
            </div>
          </TiltCard>
        ))}
      </nav>
      {activeProject && (
        <article
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
            className="bg-black font-bold rounded-full px-6 py-2 text-white focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 transition-colors w-fit"
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
          <img
            src={activeProject.images[0]}
            alt=""
            className="rounded-xl w-full h-auto shadow-card"
          />
          <h2 className="font-bold text-4xl mt-4">Process</h2>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            {activeProject.images
              .slice(1, activeProject.images.length)
              .map((img) => (
                <img
                  src={img}
                  alt=""
                  className="rounded-xl max-w-full h-auto shadow-card"
                />
              ))}
          </div>
        </article>
      )}
    </main>
  )
}
