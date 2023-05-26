import type { ITechnology } from '@/components/TechCard'
import TechCard from '@/components/TechCard'

interface ITechStack {
  languages: ITechnology[]
  backend: ITechnology[]
  frontend: ITechnology[]
  datastore: ITechnology[]
  platform: ITechnology[]
  tools: ITechnology[]
}

type TechStackKeys = keyof ITechStack

const techStack: ITechStack = {
  languages: [
    {
      title: 'Typescript',
      icon: 'typescript',
      rating: 4,
    },
    {
      title: 'JavaScript',
      icon: 'javascript',
      rating: 4.5,
    },
    {
      title: 'HTML',
      icon: 'html',
      rating: 3,
    },
    {
      title: 'CSS',
      icon: 'css',
      rating: 3.5,
    },
    {
      title: 'Python',
      icon: 'python',
      rating: 2.5,
    },
    {
      title: 'Sass',
      icon: 'sass',
      rating: 2.5,
    },
  ],
  backend: [
    {
      title: 'NodeJS',
      icon: 'nodejs',
      rating: 5,
    },
    {
      title: 'Express',
      icon: 'express',
      rating: 5,
    },
    {
      title: 'NestJs',
      icon: 'nestjs',
      rating: 5,
    },
    {
      title: 'Loopback',
      icon: 'loopback',
      rating: 5,
    },
    {
      title: 'TypeGraphQL',
      icon: 'graphql',
      rating: 4,
    },
  ],
  frontend: [
    {
      title: 'VueJS',
      icon: 'vue',
      rating: 3,
    },
    {
      title: 'ReactJS',
      icon: 'react',
      rating: 3,
    },
    {
      title: 'NextJS',
      icon: 'nextjs',
      rating: 3,
    },
    {
      title: 'NuxtJS',
      icon: 'nuxtjs',
      rating: 3,
    },
    {
      title: 'TailwindCSS',
      icon: 'tailwindcss',
      rating: 3.5,
    },
  ],
  datastore: [
    {
      title: 'MongoDB',
      icon: 'mongodb',
      rating: 4,
    },
    {
      title: 'MySQL',
      icon: 'mysql',
      rating: 4,
    },
    {
      title: 'PostgreSQL',
      icon: 'postgresql',
      rating: 4,
    },
    {
      title: 'Redis',
      icon: 'redis',
      rating: 4,
    },
    {
      title: 'InfluxDB',
      icon: 'influxdb',
      rating: 3,
    },
  ],
  platform: [
    {
      title: 'AWS',
      icon: 'aws',
      rating: 3,
    },
    {
      title: 'Azure',
      icon: 'azure',
      rating: 3,
    },
    {
      title: 'Heroku',
      icon: 'heroku',
      rating: 5,
    },
    {
      title: 'Github',
      icon: 'github',
      rating: 4,
    },
    {
      title: 'Bitbucket',
      icon: 'bitbucket',
      rating: 4,
    },
    {
      title: 'Gitlab',
      icon: 'gitlab',
      rating: 4,
    },
  ],
  tools: [
    {
      title: 'Hasura',
      icon: 'hasura',
      rating: 4,
    },
    {
      title: 'GraphQL',
      icon: 'graphql',
      rating: 4,
    },
    {
      title: 'Keycloak',
      icon: 'keycloak',
      rating: 4,
    },
    {
      title: 'SSO',
      icon: 'sso',
      rating: 4,
    },
    {
      title: 'CubeJS',
      icon: 'cubejs',
      rating: 4,
    },
    {
      title: 'Auth0',
      icon: 'auth0',
      rating: 5,
    },
    {
      title: 'LaunchDarkly',
      icon: 'launchdarkly',
      rating: 4,
    },
    {
      title: 'Docker',
      icon: 'docker',
      rating: 4,
    },
    {
      title: 'Vercel',
      icon: 'vercel',
      rating: 4,
    },
  ],
}

/**
 * This is a React functional component that renders a section displaying a tech stack with a title and a list of
 * technology cards
 */
const TheStack: React.FC<{ stack: ITechnology[] }> = ({ stack }) => {
  return (
    <div className="mt-3 grid grid-cols-4 gap-3">
      {stack.map((tech) => {
        return (
          <div className="col-span-4 md:col-span-1" key={tech.title}>
            <TechCard title={tech.title} icon={tech.icon} rating={tech.rating} />
          </div>
        )
      })}
    </div>
  )
}

/** This is a React functional component that renders a tech stack with a title and a list of technology cards */
const TheTechStack: React.FC<{ stack: ITechStack }> = ({ stack }) => {
  return (
    <div className="mt-4 flex flex-col gap-x-5 gap-y-10">
      {Object.keys(stack).map((key) => {
        return (
          <div className="flex-1" key={key}>
            <h3 className="text-xs font-semibold uppercase text-black/50 dark:text-white/50">{key}</h3>
            <TheStack stack={stack[key as TechStackKeys]} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * This is a React functional component that renders a section displaying a tech stack using data from an object.
 *
 * @returns The code is returning a React functional component called `TheTechStack`. It renders a section with an id of
 *   "tech_stack"
 */
const TheTechSection: React.FC = () => {
  return (
    <section id="tech_stack" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="flex flex-none">
        <h2 className="section-heading">Tech Stack</h2>
      </div>
      <TheTechStack stack={techStack} />
    </section>
  )
}

export default TheTechSection
