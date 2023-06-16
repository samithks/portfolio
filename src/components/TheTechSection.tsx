import type { SKillCategory } from '@prisma/client'

import type { ITechnology } from '@/components/TechCard'
import TechCard from '@/components/TechCard'

export interface ITechStack {
  LANGUAGES: ITechnology[]
  BACKEND: ITechnology[]
  FRONTEND: ITechnology[]
  DATASTORE: ITechnology[]
  PLATFORM: ITechnology[]
  TOOLS: ITechnology[]
}

type TechStackKeys = keyof typeof SKillCategory

/**
 * This is a React functional component that renders a section displaying a tech stack with a title and a list of
 * technology cards
 */
const TheStack: React.FC<{ stack: ITechnology[] }> = ({ stack }) => {
  return (
    <div className="mt-3 grid grid-cols-4 gap-3">
      {stack.map(({id, title, icon, rating}) => {
        return (
          <div className="col-span-4 md:col-span-1" key={id}>
            <TechCard title={title} icon={icon} rating={Number(rating)} />
          </div>
        )
      })}
    </div>
  )
}

/** This is a React functional component that renders a tech stack with a title and a list of technology cards */
const TheTechStack: React.FC<{ stack: ITechStack }> = ({ stack }) => {
  return (
    <div className="mt-4 flex flex-col gap-x-5 gap-y-10">
      {Object.keys(stack).map((key) => {
        return (
          <div className="flex-1" key={key}>
            <h3 className="text-xs font-semibold uppercase text-black/50 dark:text-white/50">{key}</h3>
            <TheStack stack={stack[key as TechStackKeys]} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * This is a React functional component that renders a section displaying a tech stack using data from an object.
 *
 * @returns The code is returning a React functional component called `TheTechStack`. It renders a section with an id of
 *   "tech_stack"
 */
const TheTechSection: React.FC<{ techStack: ITechStack }> = ({ techStack }) => {
  return (
    <section id="tech_stack" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="flex flex-none">
        <h2 className="section-heading">Tech Stack</h2>
      </div>
      <TheTechStack stack={techStack} />
    </section>
  )
}

export default TheTechSection
