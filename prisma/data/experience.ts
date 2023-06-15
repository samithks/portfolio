import type { JobTitle } from '@prisma/client'

interface IExperience {
  id: string
  title: JobTitle
  organizationId: string
  startedAt: string
  endedAt: string | null
  achievements: {
    id: string
    title: string
  }[]
}

export const experiences: IExperience[] = [
  {
    id: 'ec5694eb-5134-4fbc-8d50-a13346205a3a',
    title: 'SENIOR_SOFTWARE_ENGINEER',
    organizationId: 'a46f3b98-a73d-4b46-a718-d5a7a08aedd4',
    startedAt: '2023-01-01',
    endedAt: null,
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
    id: '0dad773e-6eb8-4f02-b957-1455db8c7c3b',
    title: 'LEAD_ENGINEER',
    organizationId: '1b3474de-c4e8-48cf-a33b-b4bbe28bc43b',
    startedAt: '2021-03-01',
    endedAt: '2022-12-01',
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
    id: 'b8193804-d2ef-4a7f-b516-033f3ff6ef65',
    title: 'LEAD_ENGINEER',
    organizationId: 'c4324f93-946f-49ac-b4d3-a812ba6272d0',
    startedAt: '2019-09-01',
    endedAt: '2021-03-01',
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
    id: '00ff6cb0-2e27-4018-8184-a782fae59a50',
    title: 'SENIOR_SOFTWARE_ENGINEER',
    organizationId: 'c4324f93-946f-49ac-b4d3-a812ba6272d0',
    startedAt: '2017-03-01',
    endedAt: '2019-09-01',
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
