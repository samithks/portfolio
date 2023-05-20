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

const TheInsight: React.FC = () => {
  return (
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
  )
}

export default TheInsight
