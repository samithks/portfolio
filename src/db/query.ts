import { groupBy } from 'lodash'
import format from 'date-fns/format'

import { prisma } from './db-client'

const LIMIT = 10

/**
 * This function retrieves a user's profile from a database using their email as a unique identifier.
 *
 * @param {string} email - The email parameter is a string that represents the email address of the user whose profile
 *   is being retrieved.
 * @returns The result is an object representing the profile with the matching email, or `null` if no such profile
 *   exists.
 */
export async function getProfile(email: string) {
  return prisma.profile.findUnique({
    where: {
      email,
    },
  })
}

/**
 * This function retrieves multiple contacts from a database.
 *
 * @returns The number of contacts.
 */
export async function getContact() {
  return prisma.contact.findMany({
    take: LIMIT,
  })
}

/**
 * This function retrieves multiple contacts from a database.
 *
 * @returns The number of contacts.
 */
export async function getProjects() {
  return prisma.project.findMany({
    include: {
      organization: {
        select: {
          name: true,
          webpageUrl: true,
        },
      },
    },
    take: LIMIT,
  })
}

/**
 * This function retrieves education data from a database and formats it to include university information and date
 * formatting.
 */
export async function getEducation() {
  return (
    await prisma.education.findMany({
      select: {
        id: true,
        title: true,
        startedAt: true,
        endedAt: true,
        achievements: true,
        university: {
          select: {
            name: true,
            webpageUrl: true,
          },
        },
      },
    })
  ).map(({ university, startedAt, endedAt, ...rest }) => ({
    startedAt: format(startedAt, 'yyyy'),
    endedAt: endedAt && format(endedAt, 'yyyy'),
    ...rest,
    organization: university,
  }))
}

/** This function retrieves experience data from a database and formats the date fields before returning the data. */
export async function getExperience() {
  return (
    await prisma.experience.findMany({
      select: {
        id: true,
        title: true,
        startedAt: true,
        endedAt: true,
        achievements: true,
        organization: {
          select: {
            name: true,
            webpageUrl: true,
          },
        },
      },
    })
  ).map(({ startedAt, endedAt, ...rest }) => ({
    startedAt: format(startedAt, 'MMM yyyy'),
    endedAt: endedAt && format(endedAt, 'MMM yyyy'),
    ...rest,
  }))
}

/** This function retrieves skills from a database using Prisma and groups them by category. */
export async function getSkills() {
  const skills = await prisma.skill.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      icon: true,
      rating: true,
    },
  })
  return groupBy(skills, 'category')
}
