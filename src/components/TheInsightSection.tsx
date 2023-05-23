import Link from 'next/link'

interface InsightCardProps {
  title: string
  organization: string
  year: string
  link: string
}

interface ITheInsightData {
  [key: string]: InsightCardProps[]
}

const education: InsightCardProps[] = [
  {
    title: 'MTech in Computer Science',
    organization: 'Calicut University',
    year: '2013 ‐ 2015',
    link: 'https://www.uoc.ac.in/',
  },
  {
    title: 'BTech in Information Technology',
    organization: 'MG University',
    year: '2008 - 2012',
    link: 'https://www.mgu.ac.in/',
  },
]

const experience: InsightCardProps[] = [
  {
    title: 'Senior Software Engineer',
    organization: 'Colabra Inc',
    year: 'Jan 2023 -',
    link: 'https://www.colabra.app/',
  },
  {
    title: 'Lead Engineer',
    organization: 'Qburst Technologies',
    year: 'Mar 2021 - Dec 2022',
    link: 'https://www.qburst.com/',
  },
  {
    title: 'Lead Engineer',
    organization: 'Perfomatix Solutions',
    year: 'Sep 2019 - Mar 2021',
    link: 'https://www.perfomatix.com/',
  },
  {
    title: 'Senior Software Engineer',
    organization: 'Perfomatix Solutions',
    year: 'Mar 2017 - Sep 2019',
    link: 'https://www.perfomatix.com/',
  },
]

const theInsightData: ITheInsightData = {
  experience,
  education,
}

/** This is a TypeScript React functional component that renders a card. */
const InsightCard: React.FC<InsightCardProps> = ({ title, organization, year, link }) => {
  return (
    <Link href={{ pathname: link }} className="card">
      <div className="flex flex-row justify-between">
        <h2 className="text-md mb-2 truncate font-medium leading-snug tracking-tight text-black dark:text-white">
          {title}
        </h2>
        <h4 className="text-xs font-light text-black/50 dark:text-white/50">{year}</h4>
      </div>
      <p className="truncate text-sm font-medium text-black/50 dark:text-gray-400">{organization}</p>
    </Link>
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
            key={item.title}
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
