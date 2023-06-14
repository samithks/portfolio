import { getEducation, getExperience } from '@/db/query'
import type { Experience, Prisma } from '@prisma/client'
import { InsightCard, InsightCardProps } from '@/components/card/InsightCard'

interface ITheInsightData {
  experience: (Experience & {
    organization: {
      name: string
      webpageUrl: string | null
    }
  })[]
  education: {
    organization: {
      name: string
      webpageUrl: string | null
    }
    title: string
    id: string
    startedAt: Date
    endedAt: Date | null
    universityId: string
    achievements: Prisma.JsonValue
  }[]
}

/** This is a TypeScript React functional component that renders a section of InsightCard components. */
const InsightCardSection: React.FC<{ data: ITheInsightData['education'] | ITheInsightData['experience'] }> = ({
  data,
}) => {
  return (
    <div className="flex flex-col gap-y-4 pt-3">
      {data.map((item) => {
        return (
          <InsightCard
            title={item.title}
            organization={item.organization.name}
            year={`${item.startedAt} - ${item.endedAt}`}
            link={item.organization.webpageUrl!}
            achievements={item.achievements as unknown as InsightCardProps['achievements']}
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
const TheInsight: React.FC<{
  data: ITheInsightData['education'] | ITheInsightData['experience']
  insight: keyof ITheInsightData
}> = ({ data, insight }) => {
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

const TheInsightSubSection = ({
  title,
  data,
}: {
  title: keyof ITheInsightData
  data: ITheInsightData['education'] | ITheInsightData['experience']
}) => {
  return (
    <section id={title} className="col-span-2 md:col-span-1">
      <TheInsight data={data} insight={`${title}`} />
    </section>
  )
}

/**
 * TheInsightSection is a React functional component that renders a section with multiple TheInsight components based on
 * data from theInsightData object.
 */
const TheInsightSection = async () => {
  const experience = await getExperience()
  const education = await getEducation()
  return (
    <section id="insight" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="grid grid-cols-2 gap-x-5">
        <TheInsightSubSection title="experience" data={experience} />
        <TheInsightSubSection title="education" data={education} />
      </div>
    </section>
  )
}

export default TheInsightSection
