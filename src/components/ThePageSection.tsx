import PageCard, { IPage } from "@/components/card/PageCard"

const pages: IPage[] = [
  {
    title: 'Blog',
    description: 'My thoughts on various topics',
    icon: 'blog',
    to: '/blog',
  },
  {
    title: 'Projects',
    description: 'My projects',
    icon: 'project',
    to: '/project',
  },
  {
    title: 'Contact',
    description: 'Contact me',
    icon: 'contact',
    to: '/contact',
  },
  {
    title: 'About Me',
    description: 'About me',
    icon: 'aboutMe',
    to: '/about',
  },
]

/** This component renders a list of pages as cards. */
const ThePagesSection: React.FC<{ pages: IPage[] }> = ({ pages }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-10">
      {pages.map((page) => {
        return (
          <div className="col-span-2 md:col-span-1" key={page.title}>
            <PageCard title={page.title} description={page.description} icon={page.icon} to={page.to} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * This is the main entry point of our app. It renders a single component, TheApp, which is the root component of our
 * app.
 */
const ThePageSection: React.FC = () => {
  return (
    <section id="pages" className="mx-5 flex flex-col gap-y-3 px-5">
      <div className="flex flex-none">
        <h2 className="section-heading">pages</h2>
      </div>
      <ThePagesSection pages={pages} />
    </section>
  )
}

export default ThePageSection
