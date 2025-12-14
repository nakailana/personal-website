import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row
    items-center justify-between min-h-[calc(90vh-6rem)]">
        
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%]
        md:mt[60%] lg:mt-0">
            {/* Tag box-with gradient border*/}
            <div className="relative w-[95%] sm:w-48 h-10
            bg-gradient-to-r from-[#656565] to-[#e99b63]
            shadow-[0_0_15px_rgba(255,255,255,0.4)]
            rounded-full">
                <div className="absolute inset-[3px]
                bg-[#192130] rounded-full flex items-center 
                justify-center gap-1">
                    <i class='bx bx-star'></i> 
                    INTRODUCING
                </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl
            md:text-5xl lg:text-6xl font-semibold
            tracking-wider my-8">
                ABOUT ME:
                <br />
                LANA NAKAI
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg tracking-wider
            text-gray-400 max-w-[25rem]
            lg:max-w-[30rem]"> 
               Hello! I'm currently an undergrad Computer Science 
               student in the Faculty of Science at the University of British Columbia. 
               In the future, I look forward to building exciting solutions to problems, however small or complex!
               <br /> Nice to meet you! 
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-12">
                <a className="border border-[#2a2a2a]
                py-2 sm:py-3 px-4 sm:px-5 rounded-full
                sm:text-lg text-sm font-semibold
                tracking-wider transition-all duration-300 
                hover:bg-[#192130] bg-[#0a0c0f]" href="#">
                    Resume Download <i class="bx
                    bx-link-external"></i>
                </a>
                <a className="border border-[#2a2a2a]
                py-2 sm:py-3 px-4 sm:px-10 rounded-full
                sm:text-lg text-sm font-semibold
                tracking-wider transition-all duration-300 
                hover:bg-[#192130]
                bg-[#fffff0] text-black hover:text-white" href="#">
                    Contact <i class="bx
                    bx-link-external"></i>
                </a>
            </div>

        </div>

        {/* 3D robot */}
        {/* Spline data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" 
            data-aos-duration="3000"
            className='absolute lg:top-0 top-[-20%]
            bottom-0 lg:left-[25%] sm:lfe" scene ="" */}
    </main>
  )
}

export default Hero