'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import Accordion from '@/components/Accordion'

interface InsightCardProps {
  id: string
  title: string
  organization: string
  year: string
  link: string
  achievements: {
    id: string
    title: string
  }[]
}

interface ITheInsightData {
  [key: string]: InsightCardProps[]
}

const education: InsightCardProps[] = [
  {
    id: '1',
    title: 'MTech in Computer Science',
    organization: 'Calicut University',
    year: '2013 - 2015',
    link: 'https://www.uoc.ac.in/',
    achievements: [
      {
        id: '1',
        title: 'Secured Distinction',
      },
    ],
  },
  {
    id: '2',
    title: 'BTech in Information Technology',
    organization: 'MG University',
    year: '2008 - 2012',
    link: 'https://www.mgu.ac.in/',
    achievements: [
      {
        id: '1',
        title: 'Winner of GATE Scholarship',
      },
      {
        id: '2',
        title: 'Secured First Class',
      },
    ],
  },
]

const experience: InsightCardProps[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    organization: 'Colabra Inc',
    year: 'Jan 2023 -',
    link: 'https://www.colabra.app/',
    achievements: [
      {
        id: '1',
        title:
          'Worked as full stack developer experienced in working collaboratively with developers in an asynchronous culture.',
      },
      {
        id: '2',
        title: 'Skilled in authentication and authorization, with a strong background in optimizing file uploads.',
      },
      {
        id: '3',
        title:
          'Independently developed an Analytics page using CubeJS and Google Charts, showcasing abilities in data visualization and integration.',
      },
    ],
  },
  {
    id: '2',
    title: 'Lead Engineer',
    organization: 'Qburst Technologies',
    year: 'Mar 2021 - Dec 2022',
    link: 'https://www.qburst.com/',
    achievements: [
      {
        id: '1',
        title:
          'Successfully re-architected and bootstrapped unmanageable code into a mono repo, resulting in a 10% reduction in backend work while enabling code reusability and scalability.',
      },
      {
        id: '2',
        title:
          'Designed and built a highly efficient gRPC-based microservice for a telecom-based web application, resulting in the caching of multi-step customer workflow states and a significantly enhanced user experience.',
      },
    ],
  },
  {
    id: '3',
    title: 'Lead Engineer',
    organization: 'Perfomatix Solutions',
    year: 'Sep 2019 - Mar 2021',
    link: 'https://www.perfomatix.com/',
    achievements: [
      {
        id: '1',
        title:
          'Architected a real-time resource planning platform for project planning, team capacity, and hiring needs, leveraging Cube.js for analytics, Docker for containerization, Keycloak for Single Sign-On, and Hasura for API creation.',
      },
      {
        id: '2',
        title:
          'Designed and implemented the backend architecture and data model for a dynamic content-sharing social networking platform, utilizing AWS Elemental MediaConvert, CloudFront, and Amazon S3 to ensure seamless video playback and high user engagement.',
      },
    ],
  },
  {
    id: '4',
    title: 'Senior Software Engineer',
    organization: 'Perfomatix Solutions',
    year: 'Mar 2017 - Sep 2019',
    link: 'https://www.perfomatix.com/',
    achievements: [
      {
        id: '1',
        title:
          'Led the design and implementation of a data ingestion pipeline for a web application featuring a resource monitoring dashboard and actionable insights generated from IoT data. Integrated an ML service for prediction and anomaly detection, resulting in a highly effective solution.',
      },
      {
        id: '2',
        title:
          'Developed efficient backend APIs for IT service management tasks, integrating event monitoring, management, and machine learning for actionable analytics using Express, LoopBack, MySQL, Kafka, and Redis',
      },
    ],
  },
]

const theInsightData: ITheInsightData = {
  experience,
  education,
}

/** This is a TypeScript React functional component that renders a card. */
const InsightCard: React.FC<Omit<InsightCardProps, 'id'>> = ({ title, organization, year, achievements, link }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const toggleExpansion = useCallback(() => {
    setIsExpanded((isShowing) => !isShowing)
  }, [])

  return (
    <div className="card">
      <div className="flex cursor-pointer flex-row justify-between">
        <button
          className="text-md mb-2 font-medium leading-snug tracking-tight text-black dark:text-white"
          onClick={toggleExpansion}
        >
          {title}
        </button>
        <h4 className="truncate text-xs font-light text-black/50 dark:text-white/50">{year}</h4>
      </div>
      <Link href={{ pathname: link }} className="text-sm font-medium text-black/50 dark:text-gray-400" target="_blank">
        {organization}
      </Link>
      <Accordion body={achievements} isExpanded={isExpanded} />
    </div>
  )
}

/** This is a TypeScript React functional component that renders a section of InsightCard components. */
const InsightCardSection: React.FC<{ data: InsightCardProps[] }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-4 pt-3">
      {data.map((item) => {
        return (
          <InsightCard
            title={item.title}
            organization={item.organization}
            year={item.year}
            link={item.link}
            achievements={item.achievements}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

/**
 * This is a TypeScript React functional component that renders a section of InsightCard components with a heading and a
 * card section.
 */
const TheInsight: React.FC<{ data: InsightCardProps[]; insight: keyof ITheInsightData }> = ({ data, insight }) => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row justify-between">
          <h2 className="section-heading">{insight}</h2>
          {/* <h4 className="text-xs font-light text-black/50 dark:text-white/50">more</h4> */}
        </div>
      </div>
      <InsightCardSection data={data} />
    </>
  )
}

/**
 * TheInsightSection is a React functional component that renders a section with multiple TheInsight components based on
 * data from theInsightData object.
 */
const TheInsightSection: React.FC = () => {
  return (
    <section id="insight" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="grid grid-cols-2 gap-x-5">
        {Object.keys(theInsightData).map((insightKey) => {
          return (
            <section id={insightKey} className="col-span-2 md:col-span-1" key={insightKey}>
              <TheInsight data={theInsightData[insightKey]} insight={insightKey} />
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default TheInsightSection
