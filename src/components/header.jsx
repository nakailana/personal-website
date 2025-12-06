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
    <header className="flex justify-between
    items-center py-4 px-4 lg:px-20">

        <h1 className="text-3xl md:text-4xl lg:text-5xl
        font-light m-0"> { /*adjust logo nicely*/}          
            Lana Nakai
        </h1>

        {/*desktop navigation*/}
        {/*hidden on small screens, flex at med or larger*/}
        <nav className="hidden md:flex items-center gap-12">
            <a className="text-base tracking-wider
            transition-colors hover:text-gray-300
            z-50" href="#">
                HOME
            </a>
            <a className="text-base tracking-wider
            transition-colors hover:text-gray-300
            z-50" href="#">
                ABOUT ME
            </a>
            <a className="text-base tracking-wider
            transition-colors hover:text-gray-300
            z-50" href="#">
                BLOG
            </a>
            <a className="text-base tracking-wider
            transition-colors hover:text-gray-300
            z-50" href="#">
                PORTFOLIO
            </a>
        </nav>

        <button className="hidden md:block bg-[#a7a7a7] text-black
        py-3 px-8 rounded-full border-none font-medium 
        transition-all duration-500 hover:bg-white cursor-pointer
        z-50">
            SIGN IN
        </button>

        {/*mobile menu button- visibly only on mobile*/}
        <button onClick={toggleMobileMenu}
        className='md:hidden text-3xl p-2 z-50'>
            <i class='bx bx-menu'></i> 
        </button>

        {/*mobile menu button- hidden by default*/}
        <div id='mobileMenu' className='hidden fixed 
        top-16 bottom-0 right-0 left-0
        p-5 md:hidden z-40 bg-black bg-opacity-70
        backdrop-blur- md'>
            <nav className="flex flex-col gap-6 items-center">
                <a className="text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50" href="#">
                    HOME
                </a>
                <a className="text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50" href="#">
                    ABOUT ME
                </a>
                <a className="text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50" href="#">
                    BLOG
                </a>
                <a className="text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50" href="#">
                    PORTFOLIO
                </a>
            </nav>
        </div>

    </header>
  )
}

export default Header