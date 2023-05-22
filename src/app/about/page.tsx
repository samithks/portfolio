import type { Metadata } from 'next'

import AboutHero from '@/components/hero/AboutHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

const aboutData = {
  name: 'Samith K S',
  identifyYourself: 'Hey, I am Samith K S',
  designation: 'Tech Lead | Senior Software Engineer | Backend Developer',
  summary:
    'With over 7 years of experience as a skilled backend web developer proficient in Node.js and JavaScript, and expertise in software design, data modeling, and handling both SQL and NoSQL databases, I am passionate about seeking a full stack developer role to drive company growth and contribute to innovative projects.',
  description:
    'My journey as a software engineer has been focused primarily on backend development. I have extensive knowledge of various programming languages and technologies commonly used in this domain. From designing scalable architectures to implementing complex algorithms, I take pride in crafting efficient and reliable backend systems that meet the needs of the project. In addition to my backend skills, I also possess a strong understanding of frontend frameworks. This versatility allows me to collaborate effectively with frontend developers, bridging the gap between the backend and the user interface. I can seamlessly integrate the backend functionalities into visually appealing and user-friendly interfaces, providing a holistic and cohesive experience for end-users.',
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
        <h4 className="text-lg text-black dark:text-white">{identifyYourself}</h4>
        <h6 className="text-justify text-sm text-black dark:text-white">{summary}</h6>
      </div>
      <div id="about_header_description" className="w-4/5">
        <p className="text-justify text-sm text-black dark:text-gray-400">{description}</p>
      </div>
      <Link
        href={{ pathname: '/icons/favicon.ico' }}
        className="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-black hover:animate-bounce hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-white/10 dark:focus:ring-gray-700"
      >
        Download CV
      </Link>
    </section>
  )
}

/** About page */
export default function About() {
  return (
    <div className="mb-10 space-y-10">
      <AboutHero name={aboutData.name} designation={aboutData.designation} />
      <AboutSection
        description={aboutData.description}
        identifyYourself={aboutData.identifyYourself}
        summary={aboutData.summary}
      />
    </div>
  )
}
