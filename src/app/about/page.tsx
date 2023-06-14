import type { Metadata } from 'next'

import AboutHero from '@/components/hero/AboutHero'
import ResumeDownloadButton from '@/components/_button/ResumeDownloadButton'
import { getProfile } from '@/db/query'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

/** The AboutSection function returns a React component that displays a description of the author. */
const AboutSection: React.FC<{
  description: string
  identifyYourself: string
  summary: string
}> = ({ identifyYourself, summary, description }) => {
  return (
    <section id="about_section" className="flex flex-col items-center gap-y-4">
      <div id="about_heading" className="w-4/5">
        <h1 className="text-4xl font-medium leading-relaxed">About Me</h1>
        <h4 className="text-lg">{identifyYourself}</h4>
        <h6 className="text-justify text-sm">{summary}</h6>
      </div>
      <div id="about_header_description" className="w-4/5">
        <p className="text-justify text-sm text-slate-700 dark:text-gray-400">{description}</p>
      </div>
      <ResumeDownloadButton />
    </section>
  )
}

/** About page */
export default async function AboutPage() {
  const aboutData = await getProfile('samithsarasan@gmail.com')
  if (!aboutData) {
    return <div>Not found</div>
  }

  const { name, desiredJobTitles, description, identifyYourself, summary } = aboutData

  return (
    <div className="mb-10 space-y-10">
      <AboutHero name={name} designation={desiredJobTitles} />
      <AboutSection description={description!} identifyYourself={identifyYourself!} summary={summary!} />
    </div>
  )
}
