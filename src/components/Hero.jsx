import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main id="about" className="flex lg:mt-20 flex-col lg:flex-row
    items-center justify-between min-h-[calc(90vh-6rem)]">
        
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[60%]
        md:mt[30%] lg:mt-0">
            {/* Tag box-with gradient border*/}
            <div className="relative w-[95%] sm:w-48 h-10
            bg-gradient-to-r from-[#656565] to-[#e99b63]
            shadow-[0_0_15px_rgba(255,255,255,0.4)]
            rounded-full">
                <div className="absolute inset-[3px]
                bg-[#192130] rounded-full flex items-center 
                justify-center gap-1">
                    <i class='bx bx-star'></i> 
                    INTRODUCTION
                </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl
            md:text-5xl lg:text-6xl font-semibold
            tracking-wider my-8">
                ABOUT ME:
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg tracking-wider
            text-gray-400 max-w-[25rem]
            lg:max-w-[30rem]"> 
               I'm an aspiring software engineer in my second year of Computer Science
               at the University of British Columbia in Vancouver, BC. 
               I currently am a TA for UBC's largest introductory CS course, teaching topics
               from basic syntax and style to algorithms and graphs through functional programming.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-12">
                <a className="border border-[#2a2a2a]
                py-2 sm:py-3 px-4 sm:px-5 rounded-full
                sm:text-lg text-sm font-semibold
                tracking-wider transition-all duration-300 
                hover:bg-[#192130] bg-[#0a0c0f]" href="LanaNakaiResume.pdf">
                    Open Resume <i class="bx
                    bx-link-external"></i>
                </a>
                <a className="border border-[#2a2a2a]
                py-2 sm:py-3 px-4 sm:px-10 rounded-full
                sm:text-lg text-sm font-semibold
                tracking-wider transition-all duration-300 
                hover:bg-[#192130]
                bg-[#fffff0] text-[#0d1219] hover:text-[#fffff0]" href="#contact">
                    Contact <i class="bx
                    bx-link-external"></i>
                </a>
            </div>

        </div>

        {/* Image */}
        <img 
            data-aos="fade"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-duration="2000"
            className="absolute mt-[5%] lg:left-[55%] 
              w-[10rem] md:w-[14rem] lg:w-[18rem] h-auto -z-1" 
            src="/me.png" alt="Lana" 
        />
    </main>
  )
}

export default Hero