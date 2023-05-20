import type { BrandIconProps } from '@/components/icon/BrandIcon'
import { BrandIcon } from '@/components/icon/BrandIcon'

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
  ],
}

const TechCard: React.FC<ITechnology> = ({ title, icon }) => {
  return (
    <div className="block space-y-2 rounded-md border border-slate-200 bg-white p-6 pt-5 shadow-md transition duration-300 hover:bg-slate-100 hover:shadow-lg dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10 dark:hover:bg-white/10 dark:hover:shadow-lg dark:hover:shadow-white/20">
      <div className="flex flex-row gap-x-2">
        <BrandIcon name={icon} fontSize={'2em'} className="stroke-2" />
        <h2 className="text-md mb-2 truncate font-medium leading-snug tracking-tight text-black dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  )
}

const TheTechStack: React.FC = () => {
  return (
    <section id="tech_stack" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="">
        <h2 className="text-sm font-medium uppercase text-white/60">Tech Stack</h2>
      </div>

      <div className="mt-4 flex flex-col gap-x-5 gap-y-10">
        {Object.keys(techStack).map((key) => {
          return (
            <div className="flex-1" key={key}>
              <h3 className="text-sm font-semibold text-white/80">{key}</h3>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {techStack[key as keyof ITechStack].map((tech) => {
                  return (
                    <div className="col-span-1" key={tech.title}>
                      <TechCard title={tech.title} icon={tech.icon} />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TheTechStack
