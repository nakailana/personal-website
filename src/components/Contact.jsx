import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  return (
    <section className="flex-row justify-center mt-[2rem]
    items-center py-1 px-1 lg:px-5 relative z-50 bg-[#0d1219]">

        <div className="flex max-w-5xl ml-[15%] z-10 mt-[2rem] mb-[2rem]">

            <div className="flex flex-col gap-2 w-max-w-3xl p-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wider mb-5">
                    <i>Let's Connect</i>
                </h1>
                <h2 className="text-small md:text-base lg:text-large tracking-wider mb-3">
                    LINKS:
                </h2>
                <ul className="text-xs md:text-sm lg:text-base tracking-wider mb-5 flex flex-col gap-1">
                    <li>
                        <a href="https://www.linkedin.com/in/lana-nakai/" target="_blank" rel="noreferrer"
                            className="underline hover:text-gray-400 transition-colors">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/nakailana" target="_blank" rel="noreferrer"
                            className="underline hover:text-gray-400 transition-colors">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="mailto:lana.nakai07@gmail.com"
                            className="underline hover:text-gray-400 transition-colors">
                            lana.nakai07@gmail.com
                        </a>
                    </li>
                </ul>
            </div>

            {/* input boxes */}
            <div className="flex flex-col gap-2 w-full ml-[5rem] mr-[2rem]
                bg-[#192130] rounded-3xl items-center justify-center p-4 w-full">

                <input type="text" placeholder="Name" 
                    className="w-full rounded-3xl px-4 py-2 bg-[#0d1520] text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-gray-600"/>
                
                <input type="text" placeholder="Email"
                    className="w-full rounded-3xl px-4 py-2 bg-[#0d1520] text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-gray-600"/>
                
                <textarea type="text"  placeholder="Message" 
                    rows={5}
                    className="w-full rounded-3xl px-4 py-2 bg-[#0d1520] text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-gray-600"/>
                
                <div className="flex justify-end">
                    <button className="py-3 px-12 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 bg-[#fffff0] text-black hover:bg-transparent hover:text-white border border-[#fffff0]">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact