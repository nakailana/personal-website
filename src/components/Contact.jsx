import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('Message sent!');
      form.current.reset();
    }).catch(() => {
      alert('Something went wrong, please try again.');
    });
  };

  return (
    <section id="contact" className="flex-row justify-center 
    mt-5 md:mt-10 lg:mt-20 mb-[2rem]
    items-center py-1 px-1 lg:px-5 relative z-50">

        <div className="flex flex-col md:flex-row max-w-5xl mx-[5%] md:ml-[15%] md:mr-0
          z-10 mb-[2rem]">

            <div className="flex flex-col gap-2 md:p-4 shrink-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wider mb-5">
                    <i>Let's Connect</i>
                </h1>
                <div className="tracking-wider md:mb-3">
                    <ul className="text-xs md:text-sm lg:text-base 
                      tracking-wider mb-5 flex flex-col gap-1">
                    <li>
                        <a href="https://www.linkedin.com/in/lana-nakai/" 
                          target="_blank" rel="noreferrer"
                            className="underline hover:text-gray-400 transition-colors">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/nakailana" 
                          target="_blank" rel="noreferrer"
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
                
            </div>

            {/* input boxes */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 w-full
              md:ml-[5rem] md:mr-[15%] mb-5 md:mb-10 lg:mb-20
              bg-[#192130] rounded-3xl items-center justify-center p-4">

                <input name="user_name" type="text" placeholder="Name" required
                    className="w-full rounded-3xl px-4 py-2 bg-[#0d1520] hover:bg-[#111720]
                      placeholder-gray-500 outline-none focus:ring-1 focus:ring-gray-600"/>
                
                <input name="user_email" type="email" placeholder="Email" required
                    className="w-full rounded-3xl px-4 py-2 bg-[#0d1520] hover:bg-[#111720]
                      placeholder-gray-500 outline-none focus:ring-1 focus:ring-gray-600"/>
                
                <textarea name="message"  type="text"  placeholder="Message" required
                    rows={5}
                    className="w-full rounded-3xl px-4 py-2 bg-[#0d1520] hover:bg-[#111720]
                      placeholder-gray-500 outline-none focus:ring-1 focus:ring-gray-600"/>
                
                <div className="flex justify-end">
                    <button type="submit"
                        className="py-3 px-12 rounded-full text-sm font-semibold 
                          tracking-wider transition-all duration-300 bg-[#fffff0] text-[#0d1219] 
                          hover:bg-[#c5cedd]  hover:text-gray-700 border border-[#2a2a2a]">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact