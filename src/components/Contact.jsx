import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const links = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/lana-nakai/" },
  { label: "GITHUB", href: "https://github.com/nakailana" },
  { label: "EMAIL", href: "mailto:lana.nakai07@gmail.com" },
];

const inputStyle = `peer w-full bg-transparent border-b border-[#192130] py-2
  text-sm md:text-base placeholder-gray-600 outline-none
  hover:border-gray-600 transition-colors`;

// glowing gradient line that sweeps in under a field while it's focused
const emberStyle = `pointer-events-none absolute left-0 right-0 bottom-0 h-px
  bg-gradient-to-r from-[#656565] to-[#e99b63]
  shadow-[0_0_8px_rgba(233,155,99,0.7)]
  origin-left scale-x-0 opacity-0 transition-all duration-500`;

const labelStyle = "text-gray-600 text-xs tracking-widest";

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
    mt-20 mb-[2rem] items-center py-1 px-1 lg:px-5 relative z-10">

      <div className="mt-10 mb-2 md:mb-4 lg:mb-8 ml-[5%]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wider">
            <i>LET'S CONNECT</i>
        </h1>
      </div>

      <div className="relative p-[1px] mb-5 lg:mb-10 bg-[#192130]">

        <div className="flex flex-col wide:flex-row gap-10 wide:gap-16
            py-8 md:py-10 px-4 md:px-10 bg-[#05070a]">

          {/* intro + links */}
          <div className="wide:w-[35%] shrink-0">
            <p className="text-gray-400 text-sm md:text-base lg:text-lg tracking-wider">
              Want to work together, or just say hi? Send me a message or
              find me on any of these.
            </p>
            <ul className="mt-6 flex flex-col">
              {links.map((link, index) => (
                <li key={link.label}
                  className="group/link relative flex items-center gap-4 md:gap-6
                    py-3 px-2 -mx-2 border-b border-[#192130]
                    hover:bg-[#111720] transition-colors duration-300">
                  <span className="w-6 text-gray-600 text-xs md:text-sm tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <a href={link.href} rel="noreferrer"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="text-sm md:text-base tracking-wider text-gray-200
                      hover:underline hover:text-gray-400 transition-colors">
                    {link.label} ↗
                  </a>
                  <span className={`${emberStyle}
                    group-hover/link:scale-x-100 group-hover/link:opacity-100`} />
                </li>
              ))}
            </ul>
          </div>

          {/* input boxes */}
          <form ref={form} onSubmit={sendEmail}
            className="flex flex-col gap-6 w-full wide:flex-1">

            <div className="flex flex-col sm:flex-row gap-6">
              <label className="flex flex-col gap-1 flex-1">
                <span className={labelStyle}>NAME</span>
                <div className="relative">
                  <input name="user_name" type="text" placeholder="Your name" required
                    className={inputStyle}/>
                  <span className={`${emberStyle} peer-focus:scale-x-100 peer-focus:opacity-100`} />
                </div>
              </label>
              <label className="flex flex-col gap-1 flex-1">
                <span className={labelStyle}>EMAIL</span>
                <div className="relative">
                  <input name="user_email" type="email" placeholder="you@email.com" required
                    className={inputStyle}/>
                  <span className={`${emberStyle} peer-focus:scale-x-100 peer-focus:opacity-100`} />
                </div>
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className={labelStyle}>MESSAGE</span>
              <div className="relative flex">
                <textarea name="message" placeholder="Say hello..." required
                  rows={5} className={`${inputStyle} resize-none`}/>
                <span className={`${emberStyle} peer-focus:scale-x-100 peer-focus:opacity-100`} />
              </div>
            </label>

            <div className="flex justify-end">
              <button type="submit"
                className="py-2 sm:py-3 px-8 sm:px-10 rounded-full
                  text-sm sm:text-base font-semibold tracking-wider
                  transition-all duration-300 border border-[#2a2a2a]
                  bg-[#fffff0] text-[#0d1219] hover:bg-[#192130] hover:text-[#fffff0]">
                SEND ↗
              </button>
            </div>
          </form>

        </div>
      </div>

    </section>
  )
}

export default Contact
