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
    title: 'BSc Computer Science',
    organization: 'University of the West Indies',
    year: '2016 - 2019',
    link: 'https://www.mona.uwi.edu/',
  },
  {
    title: 'A-Level',
    organization: "St. George's College",
    year: '2014 - 2016',
    link: 'https://www.stgc.org/',
  },
  {
    title: 'CXC',
    organization: "St. George's College",
    year: '2009 - 2014',
    link: 'https://www.stgc.org/',
  },
]

const experience: InsightCardProps[] = [
  {
    title: 'Software Engineer',
    organization: 'Colabra',
    year: '2020 - Present',
    link: 'https://colabra.app/',
  },
  {
    title: 'Software Engineer',
    organization: 'Qburst Technologies',
    year: '2020 - Present',
    link: 'https://www.qburst.com/',
  },
  {
    title: 'Software Engineer',
    organization: 'Perfomatix Solutions',
    year: '2020 - Present',
    link: 'https://www.perfomatix.com/',
  },
  {
    title: 'Software Engineer',
    organization: 'Kottakal Business Solutions',
    year: '2020 - Present',
    link: 'https://www.kottakaltech.com/',
  },
]

const theInsightData: ITheInsightData = {
  experience,
  education,
}

const InsightCard: React.FC<InsightCardProps> = ({ title, organization, year, link }) => {
  return (
    <Link
      href={{ pathname: link }}
      className="block space-y-2 rounded-md border border-slate-200 bg-white p-6 pt-5 shadow-md transition duration-300 hover:bg-slate-100 hover:shadow-lg dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10 dark:hover:bg-white/10 dark:hover:shadow-lg dark:hover:shadow-white/20"
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-md mb-2 truncate font-medium leading-snug tracking-tight text-black dark:text-white">
          {title}
        </h2>
        <h4 className="text-sm font-light text-black/50 dark:text-white/50">{year}</h4>
      </div>
      <p className="line-clamp-3 truncate text-sm font-normal text-black/10 dark:text-gray-400">{organization}</p>
    </Link>
  )
}

const TheInsightSection: React.FC = () => {
  return (
    <>
      {Object.keys(theInsightData).map((key) => {
        return (
          <section id={key} className="w-1/2" key={key}>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row justify-between">
                <h2 className="text-sm font-medium uppercase text-white/60">{key}</h2>
                <h4 className="text-xs font-light text-white/60">more</h4>
              </div>
              <div className="flex flex-col gap-y-4 pt-3">
                {theInsightData[key].map((item) => {
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
            </div>
          </section>
        )
      })}
    </>
  )
}

const TheInsight: React.FC = () => {
  return (
    <section id="insight" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="flex flex-row gap-x-5">
        <TheInsightSection />
      </div>
    </section>
  )
}

export default TheInsight
