import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main id="about" className="flex flex-col-reverse lg:flex-row
    items-center justify-between gap-6 lg:gap-12
    px-[5%] pt-24 lg:pt-0 lg:mt-20 min-h-[calc(90vh-6rem)]">

        <div className="max-w-xl z-10 animate-fade-in">
            {/* Tag - gradient border with a soft ember glow */}
            <div className="inline-flex p-[2px] rounded-full
            bg-gradient-to-r from-[#656565] to-[#e99b63]
            shadow-[0_0_12px_rgba(233,155,99,0.25)]">
                <div className="inline-flex items-center gap-2
                bg-[#192130] rounded-full px-4 py-1.5
                text-xs sm:text-sm tracking-widest text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e99b63]"></span>
                    CS @ UBC VANCOUVER
                </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl
            font-semibold tracking-tight mt-6 mb-6">
                Hi, I'm Lana.
            </h1>

            {/* Description */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed
            text-gray-400 max-w-[26rem] lg:max-w-[32rem]">
                <p>
                    A second-year Computer Science student at UBC Vancouver, passionate about
                    building software with an impact. This summer I interned at Atropos Group
                    and CHAOS Industries, working on drone telemetry and robotics software.
                </p>
                <p>
                    Now I'm a software developer on UBC UAS, orchestrating the software onboard
                    our drone's Jetson. I also TA UBC's main intro CS course, teaching students
                    from their first lines of code to recursive algorithms and graphs.
                </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 mt-10">
                <a className="inline-flex items-center gap-2 border border-[#2a2a2a]
                py-2 sm:py-2.5 px-5 sm:px-6 rounded-full
                sm:text-base text-sm font-medium
                transition-colors duration-200
                hover:bg-[#192130] bg-[#0a0c0f]" href="Lana_Nakai_Resume.pdf"
                target="_blank" rel="noopener noreferrer">
                    Resume <i className="bx bx-link-external"></i>
                </a>
                <a className="inline-flex items-center gap-2 border border-[#fffff0]
                py-2 sm:py-2.5 px-5 sm:px-6 rounded-full
                sm:text-base text-sm font-medium
                transition-colors duration-200
                bg-[#fffff0] text-[#0d1219]
                hover:bg-transparent hover:text-[#fffff0]" href="#contact">
                    Get in touch <i className="bx bx-right-arrow-alt"></i>
                </a>
            </div>

        </div>

        {/* Photo - bottom fades into the background */}
        <img
            className="w-[15rem] sm:w-[20rem] lg:w-[26rem] xl:w-[32rem]
              max-w-full aspect-square object-cover shrink-0 lg:mr-[6%]
              [mask-image:linear-gradient(to_bottom,black_60%,transparent)]
              [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent)]
              animate-fade-in"
            src="/me.png" alt="Lana Nakai"
        />
    </main>
  )
}

export default Hero
