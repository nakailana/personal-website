import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // Simple function to toggle the mobile menu
    const toggleMobileMenu = () => {
        // Get the Mobile Menu Element
        const mobileMenu = document.getElementById('mobileMenu')

        // If it has the 'hidden class, remove it, otherwise add
        if(mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }

  return (
    <header className="fixed w-full flex justify-between
    items-center py-4 px-4 lg:px-20 z-50 bg-gradient-to-b from-[#0d1219] to-transparent pb-32">

        <h1 className="text-3xl md:text-4xl lg:text-5xl
        font-light m-0"> { /*adjust logo nicely*/}          
            Lana Nakai
        </h1>

        {/*desktop navigation*/}
        {/*hidden on small screens, flex at med or larger*/}
        <nav className="hidden md:flex items-center gap-12">
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" 
            className="text-base tracking-wider
            transition-colors hover:text-gray-300
            z-50" href="#">
                BIO
            </a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1300" 
            className="text-base tracking-wider
            transition-colors hover:text-gray-300
            z-50" href="#projects">
                PROJECTS
            </a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1600" 
            className="text-base tracking-wider
            transition-colors hover:text-gray-300
            z-50" href="#contact">
                CONTACT
            </a>
        </nav>

        {/*mobile menu button- visibly only on mobile*/}
        <button onClick={toggleMobileMenu}
        className='md:hidden text-3xl p-2 z-50'>
            <i class='bx bx-menu'></i> 
        </button>

        {/*mobile menu button- hidden by default*/}
        <div id='mobileMenu' className='hidden fixed 
        top-16 bottom-0 right-0 left-0
        p-5 md:hidden z-40 bg-[#0d1219] bg-opacity-70
        backdrop-blur- md'>
            <nav className="flex flex-col gap-6 items-center">
                <a className="text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50" href="#about">
                    BIO
                </a>
                <a className="text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50" href="#projects">
                    PROJECTS
                </a>
                <a className="text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50" href="#contact">
                    CONTACT
                </a>
            </nav>
        </div>

    </header>
  )
}

export default Header