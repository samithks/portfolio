import { PrismaClient } from '@prisma/client'

import {
  profile,
  organizations,
  universities,
  contacts,
  skills,
  projectToSkill,
  experiences,
  educations,
  projects,
} from './data'

const prisma = new PrismaClient()

/** Seed data to database */
async function seed() {
  const parsedExperience = experiences.map(({ startedAt, endedAt, ...rest }) => {
    return {
      startedAt: new Date(startedAt),
      endedAt: endedAt ? new Date(endedAt) : null,
      ...rest,
    }
  })

  const parsedEducations = educations.map(({ startedAt, endedAt, ...rest }) => {
    return {
      startedAt: new Date(startedAt),
      endedAt: endedAt ? new Date(endedAt) : null,
      ...rest,
    }
  })

  await Promise.all([
    await prisma.profile.create({
      data: profile,
    }),

    await prisma.organization.createMany({
      data: organizations,
      skipDuplicates: true,
    }),

    await prisma.university.createMany({
      data: universities,
      skipDuplicates: true,
    }),

    await prisma.contact.createMany({
      data: contacts,
      skipDuplicates: true,
    }),
    await prisma.skill.createMany({
      data: skills,
      skipDuplicates: true,
    }),
  ])

  await Promise.all([
    await prisma.project.createMany({
      data: projects,
      skipDuplicates: true,
    }),
    await prisma.experience.createMany({
      data: parsedExperience,
      skipDuplicates: true,
    }),
    await prisma.education.createMany({
      data: parsedEducations,
      skipDuplicates: true,
    }),
  ])

  await prisma.projectToSkill.createMany({
    data: projectToSkill,
    skipDuplicates: true,
  })
}
seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
