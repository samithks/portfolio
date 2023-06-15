import type { ITechStack } from '@/components/TheTechSection'

import TheInsightSection from '@/components/TheInsightSection'
import ThePageSection from '@/components/ThePageSection'
import TheTechSection from '@/components/TheTechSection'
import HomeHero from '@/components/home/HomeHero'
import { getEducation, getExperience, getTechStack } from '@/db/query'

/** Home page */
export default async function Home() {
  const [experience, education, techStack] = await Promise.all([getExperience(), getEducation(), getTechStack()])
  return (
    <div className="mb-10 space-y-20">
      <HomeHero />
      <ThePageSection />
      <TheInsightSection experience={experience} education={education} />
      <TheTechSection techStack={techStack as unknown as ITechStack} />
    </div>
  )
}
