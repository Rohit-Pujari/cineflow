import React from "react";

function Hero() {
  return (
    <section className="relative mt-24 w-full px-4 md:px-8 lg:px-12  mx-auto min-h-[70vh] ">
      <div className="absolute top-0 right-0 z-0 sm:block mt-12 sm:mt-8">
        <img
          src="/images/hero.png"
          alt="Hero Image"
          className="h-[80vh] w-auto rounded-xl shadow-xl object-contain"
        />
      </div>
      <div className="relative z-10 max-w-3xl font-impact">
        <section className="flex flex-wrap text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-extrabold leading-none text-white">
          <span className="mr-4">CUTS.</span>
          <span className="mr-4">EDITS.</span>
          <span>MOMENTS.</span>
        </section>

        <section className="mt-6 sm:mt-8 text-left text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mx-auto font-poppins">
          <p>
            As an editor I help agencies, filmmakers, and creatives in achieving
            their goals. Tools like video editing, sound design, and color
            correction empower us in telling your story. From social media
            content to feature films, I will tackle every obstacle with you
            until the result is satisfying.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Hero;
