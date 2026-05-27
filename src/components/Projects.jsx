import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="flex-row justify-center 
    bg-[#0d1219] md:mt-10 lg:mt-20 mb-[2rem] 
    items-center py-1 px-1 lg:px-5 relative z-50">

      <div className="mt-5 lg:mt-10 mb-2 md:mb-4 lg:mb-8 ml-[5%]">
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

            <div className="flex flex-col lg:flex-row items-start lg:items-center 
                justify-between gap-4 py-6 px-4 bg-[#05070a]
                group-hover:bg-[#111720] transition-all duration-300">
            
              <div className="flex items-center gap-6">
               <span className="text-gray-600 text-xs md:text-sm lg:text-base 
               tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl 
                    font-semibold not-italic font-sans
                    tracking-wider group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-xs md:text-sm lg:text-base mt-1">
                      {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-6 
                  ml-20 lg:ml-10 mr-10 lg:mr-5">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs lg:text-sm border border-[#192130] 
                                          px-3 py-1 rounded-full text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm shrink-0">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer"
                      className="hover:underline hover:text-gray-400 transition-colors 
                          tracking-wider text-gray-200">
                      OPEN ↗
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects