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

export async function getEducation() {
  const education = await prisma.education.findMany({
    select: {
      id: true,
      title: true,
      startedAt: true,
      endedAt: true,
      universityId: true,
      achievements: true,
      university: {
        select: {
          name: true,
          webpageUrl: true,
        },
      },
    },
  })
  return education.map(({ university, ...rest }) => ({
    ...rest,
    organization: university,
  }))
}

export async function getExperience() {
  return prisma.experience.findMany({
    include: {
      organization: {
        select: {
          name: true,
          webpageUrl: true,
        },
      },
    },
  })
}
