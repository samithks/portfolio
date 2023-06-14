'use client'

import { useCallback, useState } from 'react'
import Accordion from '@/components/Accordion'

export interface IResponsibility {
  id: string
  title: string
}

export interface IProject {
  id: string
  company: string
  title: string
  technologies: string[]
  role: string
  summary: string
  responsibility: IResponsibility[]
}

type ProjectCardProps = Omit<IProject, 'id'>
type ProjectHeaderProps = Pick<IProject, 'company' | 'title' | 'technologies'>
type ProjectCardMainProps = Pick<IProject, 'summary' | 'responsibility' | 'role'> & { isExpanded: boolean }

/** This component renders the header of a project card. */
const ProjectHeader: React.FC<ProjectHeaderProps> = ({ company, title, technologies }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-md font-medium">{title}</h2>
        <h6 className="text-sm font-medium text-gray-600 dark:text-gray-400">{company}</h6>
      </div>
      <div className="flex flex-none">
        <h6 className="break-words text-xs uppercase tracking-normal text-gray-600 dark:text-gray-400">
          {technologies.toString()}
        </h6>
      </div>
    </div>
  )
}

/** This component renders the main content of a project card. */
const ProjectCardMain: React.FC<ProjectCardMainProps> = ({ summary, responsibility, role, isExpanded }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-1">
        <h6 className="text-sm text-gray-600 dark:text-gray-400">Role:{role}</h6>
        <h6 className="text-justify text-sm text-gray-600 dark:text-gray-400">Summary:{summary}</h6>
      </div>
      <Accordion body={responsibility} isExpanded={isExpanded} />
    </div>
  )
}

/** This component renders a project card. */
const ProjectCard: React.FC<ProjectCardProps> = ({ company, title, technologies, summary, responsibility, role }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleExpansion = useCallback(() => {
    setIsExpanded((isShowing) => !isShowing)
  }, [])

  /** This component renders a project card. */
  const handleClick = () => {
    toggleExpansion()
  }

  /**
   * This function handles the keydown event.
   *
   * @param e
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      toggleExpansion()
    }
  }

  return (
    <div className="card" role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
      <div className="flex cursor-pointer flex-col justify-between gap-y-4">
        <ProjectHeader company={company} title={title} technologies={technologies} />
        <ProjectCardMain summary={summary} responsibility={responsibility} role={role} isExpanded={isExpanded} />
      </div>
    </div>
  )
}

export default ProjectCard
