import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="flex-row justify-center 
    bg-[#0d1219] mt-20 mb-[2rem]
    items-center py-1 px-1 lg:px-5 relative z-10">

      <div className="mt-10 mb-2 md:mb-4 lg:mb-8 ml-[5%]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wider">
            <i>PROJECTS</i>
        </h1>
      </div>

      <div className="flex flex-col gap-6 bg-[#0d1219] mb-5 lg:mb-10">
        {projects.map((project, index) => (
          <div key={project.id} className="group relative p-[1px]
            bg-[#192130] hover:bg-gradient-to-r hover:from-[#656565] 
            hover:to-[#e99b63] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] 
            transition-all duration-300">

            <div className="flex flex-col wide:flex-row items-start wide:items-center
                justify-between gap-4 wide:gap-10 py-6 px-4 bg-[#05070a]
                group-hover:bg-[#111720] transition-all duration-300">

              <div className="flex items-start gap-4 md:gap-6 min-w-0 wide:flex-1">
                <span className="w-6 shrink-0 mt-1.5 md:mt-2 text-gray-600
                text-xs md:text-sm lg:text-base tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h2 className="text-xl md:text-2xl lg:text-3xl
                      font-semibold not-italic font-sans
                      tracking-wider group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h2>
                    {project.inProgress && (
                      <span className="text-[10px] md:text-xs tracking-widest
                          border border-[#fffff0]/60 bg-[#fffff0]/10 text-[#fffff0]
                          px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        IN PROGRESS
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm lg:text-base mt-1">
                      {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs lg:text-sm border border-[#192130]
                                            px-3 py-1 rounded-full text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.live && (
                <div className="text-sm shrink-0 self-end wide:self-auto wide:mr-5">
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="hover:underline hover:text-gray-400 transition-colors
                        tracking-wider text-gray-200">
                    OPEN ↗
                  </a>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects