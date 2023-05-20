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

const TheTechStack: React.FC = () => {
  return (
    <section id="tech_stack" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="">
        <h2 className="text-sm font-medium uppercase text-white/60">Tech Stack</h2>
      </div>
    </section>
  )
}

export default TheTechStack
