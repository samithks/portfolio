import type { JobTitle, SKillCategory } from '@prisma/client'

import { PrismaClient } from '@prisma/client'
import contacts from './data/contact.json'
import organizations from './data/organization.json'
import universities from './data/university.json'
import profile from './data/profile.json'
import skills from './data/skill.json'
import projects from './data/project.json'
import educations from './data/education.json'
import experiences from './data/experience.json'
import projectToSkills from './data/project_to_skill.json'

const prisma = new PrismaClient()

/** Seed data to database */
async function seed() {
  const profileData = await prisma.profile.upsert({
    where: { email: profile.email },
    update: {},
    create: {
      ...profile,
    },
  })

  for (const organization of organizations) {
    await prisma.organization.upsert({
      where: { name: organization.name },
      update: {},
      create: {
        ...organization,
      },
    })
  }
  for (const university of universities) {
    await prisma.university.upsert({
      where: { name: university.name },
      update: {},
      create: {
        ...university,
      },
    })
  }

  for (const contact of contacts) {
    await prisma.contact.upsert({
      where: { title: contact.title },
      update: {},
      create: {
        ...contact,
      },
    })
  }

  for (const skill of skills) {
    const { category, ...rest } = skill
    await prisma.skill.upsert({
      where: { title: skill.title },
      update: {},
      create: {
        ...rest,
        category: category as SKillCategory,
      },
    })
  }

  for (const project of projects) {
    await prisma.project.upsert({
      where: { title_organizationId: { title: project.title, organizationId: project.organizationId } },
      update: {},
      create: {
        ...project,
      },
    })
  }

  for (const projectToSkill of projectToSkills) {
    await prisma.projectToSkill.upsert({
      where: { projectId_skillId: { projectId: projectToSkill.projectId, skillId: projectToSkill.skillId } },
      update: {},
      create: {
        ...projectToSkill,
      },
    })
  }

  for (const experience of experiences) {
    const { title , startedAt, endedAt, ...rest } = experience
    await prisma.experience.upsert({
      where: {
        title_organizationId: { title: title as JobTitle, organizationId: experience.organizationId },
      },
      update: {},
      create: {
        title: title as JobTitle,
        startedAt: new Date(startedAt),
        endedAt: endedAt ? new Date(endedAt) : null,
        ...rest,
      },
    })
  }

  for (const education of educations) {
    const { startedAt, endedAt, ...rest } = education
    await prisma.education.upsert({
      where: { title: education.title },
      update: {},
      create: {
        startedAt: new Date(startedAt),
        endedAt: endedAt ? new Date(endedAt) : null,
        ...rest,
      },
    })
  }

  console.log({ profileData })
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
