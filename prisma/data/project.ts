export const projects = [
  {
    id: 'c654fc3a-9a4a-4bf0-9541-5752daafd0bb',
    title: 'R&D workflow visibility platform',
    organizationId: 'a46f3b98-a73d-4b46-a718-d5a7a08aedd4',
    techStack: [
      'Postgresql',
      'Hasura',
      'Vue js',
      'Cube js',
      'Auth0',
      'Node js',
      'Azure',
      'Express',
      'TypeScript',
      'Uploadcare',
      'LaunchDarkly',
    ],
    role: 'Full Stack Developer',
    summary:
      'A platform simplifies tracking,documenting,and organizing lab work with an intuitive interface that improves project visibility and enables better collaboration. Its features increase productivity and streamline lab processes.',
    responsibility: [
      {
        id: '1',
        title:
          'Experience in Hasura authentication and authorization with Auth0, developing analytics page using Vue.js and GoogleCharts integrated with CubeJS, and optimizing file uploads.',
      },
    ],
  },
  {
    id: 'bb804ee7-a716-4538-98da-13a24e504473',
    title: 'Telecom Service Platform',
    organizationId: '1b3474de-c4e8-48cf-a33b-b4bbe28bc43b',
    techStack: ['EXPRESS', 'NESTJS', 'REDIS', 'AWS', 'LERNA', 'GRPC'],
    role: 'Lead Engineer',
    summary:
      'A telecom vendor web application that enables customers to perform various services, including recharging, changing pin, requesting technical support, and submitting identification documents.',
    responsibility: [
      {
        id: '1',
        title:
          'Led the re-architecture and bootstrapping of the application into a mono-repository, which resulted in improved code reusability and scalability across multiple countries.',
      },
      {
        id: '2',
        title:
          'Implemented various code quality tools and clean coding principles to enhance codebase readability and scalability, resulting in a more streamlined development process.',
      },
      {
        id: '3',
        title:
          'Managed the expiration of fields within Redis hashes, despite the limitations of TTL only being able to be set at the key level.',
      },
    ],
  },
  {
    id: '875e3a53-5f9c-4cf9-a024-98069dc17a8d',
    title: 'Resource Planner',
    organizationId: 'c4324f93-946f-49ac-b4d3-a812ba6272d0',
    techStack: [
      'NestJS',
      'React',
      'Hasura',
      'Graphql',
      'TypeGraphQL',
      'Cube.js',
      'Keycloak SSO',
      'Passport.js',
      'Postgres',
    ],
    role: 'Lead Engineer',
    summary:
      'A productivity platform for professional services that provides real-time insights to help teams confidently plan projects, manage team capacity, forecast budgets, optimize team utilization, and make informed hiring decisions.',
    responsibility: [
      {
        id: '1',
        title:
          'Contributed to feature discussions, integrated Cube.js for analytics, dockerized services, created GraphQL and REST APIs, and handled application design and database modeling.',
      },
      {
        id: '2',
        title:
          'Implemented Keycloak authentication, including authentication hooks in Hasura and Cube.js for force logout.',
      },
    ],
  },
  {
    id: '353761e2-d985-4962-860d-6aea2911662c',
    title: 'Short Video Content Manager',
    organizationId: 'c4324f93-946f-49ac-b4d3-a812ba6272d0',
    techStack: [
      'Node.js',
      'LoopBack',
      'AWS Elemental MediaConvert',
      'Amazon CloudFront',
      'Amazon S3',
      'AWS Lambda',
      'MySQL',
    ],
    role: 'Lead Engineer',
    summary:
      'A mobile platform for uploading and sharing short videos, providing users with a seamless experience to showcase their creativity and engage with a vibrant community.',
    responsibility: [
      {
        id: '1',
        title:
          'A mobile application for uploading or recording short videos, with features such as liking, commenting, sharing, and chat functionality.',
      },
      {
        id: '2',
        title:
          'Designed and data-modeled an application architecture for a scalable video sharing platform that includes features such as file storage, video streaming, and email notifications.',
      },
      {
        id: '3',
        title:
          'Implemented video upload and transcoding using AWS Elemental MediaConvert, and integrated Amazon CloudFront and Amazon S3 for video storage.',
      },
      {
        id: '4',
        title:
          'Developed a storage service that utilizes Amazon S3 to upload and download files, and integrated video streaming using AWS Elemental Media Convert, AWS Lambda, Amazon S3, and Amazon CloudFront for optimized content delivery.',
      },
      {
        id: '5',
        title: 'Implemented an email service using AWS SES to ensure seamless communication and user engagement.',
      },
      {
        id: '6',
        title: 'Utilized PM2 clustering for improved performance and reliability of the application.',
      },
    ],
  },
  {
    id: '4f4f8810-e80f-4d78-bc72-6cf1ea852674',
    title: 'Smart Water Monitoring System',
    organizationId: 'c4324f93-946f-49ac-b4d3-a812ba6272d0',
    techStack: ['Node.js', 'TimescaleDB', 'LoopBack', 'PySpark', 'IoT Hub', 'MongoDB', 'Redis', 'Azure'],
    role: 'Lead Engineer',
    summary:
      'A water usage monitoring system, which receives data from IoT based smart water meters and processes the data to make ML based predictions for leak detection.',
    responsibility: [
      {
        id: '1',
        title:
          'Ensured Role-Based Access Control to protect sensitive data and created APIs with LoopBack for efficient communication between the application and users.',
      },
      {
        id: '2',
        title:
          'Conducted data modeling for a NoSQL database, streamed data from IoT devices via IoT Hub, transformed data with PySpark, employed API caching for better responsiveness, and implemented a notification service using Azure Functions.',
      },
    ],
  },
  {
    id: '31e7a0c7-33d4-4132-b313-7772b9781540',
    title: 'Unified Monitoring and Event Management',
    organizationId: 'c4324f93-946f-49ac-b4d3-a812ba6272d0',
    techStack: ['Express', 'LoopBack', 'MySQL', 'Kafka', 'Redis'],
    role: 'Senior Software Engineer',
    summary:
      'The application integrates event monitoring, management, and machine learning to deliver actionable analytics for IT operations, enabling efficient management of intricate IT environments.',
    responsibility: [
      {
        id: '1',
        title:
          'Collaborated with clients to design data models and application architecture to meet their requirements.',
      },
      {
        id: '2',
        title:
          'Employed a high-velocity development process with continuous product releases to ensure timely delivery of new features and improvements.',
      },
      {
        id: '3',
        title:
          "Developed REST endpoints and effectively managed deployment processes using LoopBack and Strong-PM to optimize the application's performance and scalability.",
      },
    ],
  },
]
