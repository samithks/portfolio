import type { Metadata } from 'next'
import type { IResponsibility } from '@/components/ProjectCard'
import type { Project } from '@prisma/client'

import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/db/query'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
}

interface ProjectSectionProps {
  projects: (Project & {
    organization: {
      name: string
      webpageUrl: string | null
    }
  })[]
}

/** This component renders a list of projects as cards. */
const TheProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-y-10">
      {projects.map((project) => {
        const { id, techStack: technologies, organization, responsibility, ...rest } = { ...project }
        const { name: company } = { ...organization }
        const responsibilities = responsibility as unknown as IResponsibility[]
        return (
          <div className="col-span-1" key={id}>
            <ProjectCard {...{ ...rest, company, technologies, responsibility: responsibilities }} />
          </div>
        )
      })}
    </div>
  )
}

/** Project page */
export default async function ProjectPage() {
  const projects = await getProjects()
  return (
    <div className="mb-10 space-y-10">
      <section id="heading" className="flex flex-col gap-y-3">
        <div id="project_heading">
          <h1 className="font-serif text-4xl font-medium">Project</h1>
        </div>
        <div id="project_header_description">
          <p className="text-sm text-black dark:text-gray-400">The Projects I have worked on</p>
        </div>
      </section>
      <section id="project" className="mt-10">
        <TheProjectSection projects={projects} />
      </section>
    </div>
  )
}
