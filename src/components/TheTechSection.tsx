import type { BrandIconProps } from '@/components/_icon/BrandIcon'

import { BrandIcon } from '@/components/_icon/BrandIcon'

interface ITechnology {
  title: string
  icon: BrandIconProps['name']
}

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
    },
    {
      title: 'JavaScript',
      icon: 'javascript',
    },
    {
      title: 'HTML',
      icon: 'html',
    },
    {
      title: 'CSS',
      icon: 'css',
    },
    {
      title: 'Python',
      icon: 'python',
    },
    {
      title: 'Sass',
      icon: 'sass',
    },
  ],
  backend: [
    {
      title: 'NodeJS',
      icon: 'nodejs',
    },
    {
      title: 'Express',
      icon: 'express',
    },
    {
      title: 'NestJs',
      icon: 'nestjs',
    },
    {
      title: 'Loopback',
      icon: 'loopback',
    },
    {
      title: 'TypeGraphQL',
      icon: 'graphql',
    },
  ],
  frontend: [
    {
      title: 'VueJS',
      icon: 'vue',
    },
    {
      title: 'ReactJS',
      icon: 'react',
    },
    {
      title: 'NextJS',
      icon: 'nextjs',
    },
    {
      title: 'NuxtJS',
      icon: 'nuxtjs',
    },
    {
      title: 'TailwindCSS',
      icon: 'tailwindcss',
    },
  ],
  datastore: [
    {
      title: 'MongoDB',
      icon: 'mongodb',
    },
    {
      title: 'MySQL',
      icon: 'mysql',
    },
    {
      title: 'PostgreSQL',
      icon: 'postgresql',
    },
    {
      title: 'Redis',
      icon: 'redis',
    },
    {
      title: 'InfluxDB',
      icon: 'influxdb',
    },
  ],
  platform: [
    {
      title: 'AWS',
      icon: 'aws',
    },
    {
      title: 'Azure',
      icon: 'azure',
    },
    {
      title: 'Heroku',
      icon: 'heroku',
    },
    {
      title: 'Github',
      icon: 'github',
    },
    {
      title: 'Bitbucket',
      icon: 'bitbucket',
    },
    {
      title: 'Gitlab',
      icon: 'gitlab',
    },
  ],
  tools: [
    {
      title: 'Hasura',
      icon: 'hasura',
    },
    {
      title: 'GraphQL',
      icon: 'graphql',
    },
    {
      title: 'Keycloak',
      icon: 'keycloak',
    },
    {
      title: 'SSO',
      icon: 'sso',
    },
    {
      title: 'CubeJS',
      icon: 'cubejs',
    },
    {
      title: 'Auth0',
      icon: 'auth0',
    },
    {
      title: 'LaunchDarkly',
      icon: 'launchdarkly',
    },
    {
      title: 'Docker',
      icon: 'docker',
    },
    {
      title: 'Vercel',
      icon: 'vercel',
    },
  ],
}

/** This is a React functional component that renders a technology card with a title and an icon */
const TechCard: React.FC<ITechnology> = ({ title, icon }) => {
  return (
    <div className="block space-y-2 rounded-md border border-slate-200 bg-white p-6 pt-5 shadow-md transition duration-300 hover:bg-slate-100 hover:shadow-lg dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10 dark:hover:bg-white/10 dark:hover:shadow-lg dark:hover:shadow-white/20">
      <div className="flex flex-row gap-x-2">
        <BrandIcon name={icon} fontSize={'2em'} className="stroke-2" />
        <h2 className="mb-2 text-sm font-medium leading-snug tracking-tight text-black dark:text-white">{title}</h2>
      </div>
    </div>
  )
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
            <TechCard title={tech.title} icon={tech.icon} />
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
