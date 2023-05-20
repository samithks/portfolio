import ThePages from '@/components/ThePage'
import HomeHero from '@/components/hero/HomeHero'

interface IEducation {
  course: string
  university: string
  year: string
}

const education: IEducation[] = [
  {
    course: 'BSc Computer Science',
    university: 'University of the West Indies',
    year: '2016 - 2019',
  },
  {
    course: 'A-Level',
    university: "St. George's College",
    year: '2014 - 2016',
  },
  {
    course: 'CXC',
    university: "St. George's College",
    year: '2009 - 2014',
  },
]

interface ITechnology {
  title: string
  icon: string
}

interface ITechStack {
  development: ITechnology[]
  backend: ITechnology[]
  frontend: ITechnology[]
  tools: ITechnology[]
  platform: ITechnology[]
}

const techStack: ITechStack = {
  development: [
    {
      title: 'Java',
      icon: 'mdi-language-java',
    },
    {
      title: 'Python',
      icon: 'mdi-language-python',
    },
    {
      title: 'C#',
      icon: 'mdi-language-csharp',
    },
    {
      title: 'C++',
      icon: 'mdi-language-cpp',
    },
    {
      title: 'C',
      icon: 'mdi-language-c',
    },
  ],
  backend: [
    {
      title: 'NodeJS',
      icon: 'mdi-nodejs',
    },
    {
      title: 'ExpressJS',
      icon: 'mdi-nodejs',
    },
    {
      title: 'Spring Boot',
      icon: 'mdi-spring',
    },
    {
      title: 'Flask',
      icon: 'mdi-flask',
    },
    {
      title: 'Django',
      icon: 'mdi-django',
    },
  ],
  frontend: [
    {
      title: 'VueJS',
      icon: 'mdi-vuejs',
    },
    {
      title: 'ReactJS',
      icon: 'mdi-react',
    },
    {
      title: 'Angular',
      icon: 'mdi-angular',
    },
    {
      title: 'HTML',
      icon: 'mdi-language-html5',
    },
    {
      title: 'CSS',
      icon: 'mdi-language-css3',
    },
  ],
  tools: [
    {
      title: 'Git',
      icon: 'mdi-git',
    },
    {
      title: 'GitHub',
      icon: 'mdi-github',
    },
    {
      title: 'GitLab',
      icon: 'mdi-gitlab',
    },
    {
      title: 'Docker',
      icon: 'mdi-docker',
    },
    {
      title: 'Kubernetes',
      icon: 'mdi-kubernetes',
    },
  ],
  platform: [
    {
      title: 'AWS',
      icon: 'mdi-aws',
    },
    {
      title: 'Azure',
      icon: 'mdi-microsoft-azure',
    },
    {
      title: 'Google Cloud',
      icon: 'mdi-google-cloud',
    },
    {
      title: 'Heroku',
      icon: 'mdi-heroku',
    },
    {
      title: 'Firebase',
      icon: 'mdi-firebase',
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mb-10 space-y-24">
        <section id="hero" className="mx-5 my-16 flex flex-col items-center justify-between gap-y-3 px-5 py-10">
          <HomeHero />
        </section>
        <section id="pages" className="mx-5 flex flex-col gap-y-3 px-5 py-10">
          <ThePages />
        </section>
        <section id="insight" className="mx-5 flex flex-col gap-y-3 px-5 py-10">
          <div className="fle-row flex">
            <div id="experience" className="w-1/2">
              <div className="">
                <h2 className="text-sm font-medium uppercase text-white/60">experience</h2>
              </div>
            </div>
            <div id="education" className="w-1/2">
              <div className="">
                <h2 className="text-sm font-medium uppercase text-white/60">education</h2>
              </div>
            </div>
          </div>
        </section>
        <section id="tech_stack" className="mx-5 flex flex-col gap-y-3 px-5 py-10">
          <div className="">
            <h2 className="text-sm font-medium uppercase text-white/60">Tech Stack</h2>
          </div>
        </section>
      </div>
    </main>
  )
}
