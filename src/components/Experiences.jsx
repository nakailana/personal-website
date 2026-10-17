import { useEffect, useState } from "react";
import { experiences } from "../data/experiences";

const PhotoSlider = ({ images, title }) => {
  const loops = images.length > 1;
  // copies of the last/first photo on each end so the slider can wrap around
  const slides = loops ? [images[images.length - 1], ...images, images[0]] : images;

  const [position, setPosition] = useState(loops ? 1 : 0);
  const [animate, setAnimate] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  const current = loops ? (position - 1 + images.length) % images.length : 0;
  const onCopy = position === 0 || position === slides.length - 1;

  // wait until we've jumped off a copy before moving again
  const prev = () => { if (!onCopy) setPosition(position - 1); };
  const next = () => { if (!onCopy) setPosition(position + 1); };

  // after sliding onto a copy, jump (without animating) to the real photo
  const handleTransitionEnd = () => {
    if (!onCopy) return;
    setAnimate(false);
    setPosition(position === 0 ? images.length : 1);
  };

  // turn animation back on once the jump has been painted
  useEffect(() => {
    if (animate) return;
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  // swipe support for mobile
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const distance = touchStart - e.changedTouches[0].clientX;
    if (distance > 40) next();
    if (distance < -40) prev();
    setTouchStart(null);
  };

  return (
    <div className="relative w-full max-w-md wide:w-64 self-center wide:self-auto
        aspect-video overflow-hidden border border-[#192130] bg-[#0d1219] shrink-0"
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}>

      <div className={`flex h-full ${animate ? "transition-transform duration-500" : ""}`}
        style={{ transform: `translateX(-${position * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}>
        {slides.map((src, i) => (
          <img key={i} src={src} alt={`${title} photo ${i + 1}`}
            className="w-full h-full object-cover shrink-0" />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Previous photo"
            className="absolute left-1 top-1/2 -translate-y-1/2 px-2 py-1
                text-gray-200 bg-[#05070a]/60 hover:text-gray-400 transition-colors">
            ‹
          </button>
          <button onClick={next} aria-label="Next photo"
            className="absolute right-1 top-1/2 -translate-y-1/2 px-2 py-1
                text-gray-200 bg-[#05070a]/60 hover:text-gray-400 transition-colors">
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((src, i) => (
              <button key={src} onClick={() => setPosition(i + 1)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors
                    ${i === current ? "bg-[#e99b63]" : "bg-gray-500"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const Experiences = () => {
  return (
    <section id="experience" className="flex-row justify-center
    bg-[#0d1219] mt-20 mb-[2rem]
    items-center py-1 px-1 lg:px-5 relative z-10">

      <div className="mt-10 mb-2 md:mb-4 lg:mb-8 ml-[5%]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wider">
            <i>EXPERIENCE</i>
        </h1>
      </div>

      <div className="flex flex-col gap-6 bg-[#0d1219] mb-5 lg:mb-10">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="group relative p-[1px]
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
                  <h2 className="text-xl md:text-2xl lg:text-3xl
                    font-semibold not-italic font-sans
                    tracking-wider group-hover:text-gray-300 transition-colors">
                    {experience.title}
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm lg:text-base mt-1">
                    {experience.role}
                    <span className="text-gray-600"> · </span>
                    {experience.date}
                    <span className="text-gray-600"> · </span>
                    {experience.location}
                  </p>
                  <ul className="list-disc pl-4 mt-2 space-y-1
                      text-gray-500 text-xs md:text-sm lg:text-base">
                    {experience.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2 flex-wrap mt-4">
                    {experience.tech.map((t) => (
                      <span key={t} className="text-xs lg:text-sm border border-[#192130]
                                            px-3 py-1 rounded-full text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {experience.images.length > 0 && (
                <div className="flex justify-center w-full wide:w-auto wide:mr-5">
                  <PhotoSlider images={experience.images} title={experience.title} />
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Experiences
