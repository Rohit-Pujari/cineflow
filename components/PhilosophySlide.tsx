import React from "react";

function PhilosophySlide() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 px-4 sm:px-8 text-center min-h-[80vh] max-w-screen-xl mx-auto">
      <h1 className="text-[10vw] sm:text-7xl md:text-8xl font-anthonio opacity-70">
        Philosophy
      </h1>

      <h2 className="text-[5.5vw] sm:text-4xl md:text-5xl font-impact font-extrabold max-w-5xl leading-tight">
        "THE WAY YOU CAN AWAKEN FEELINGS JUST BY PUTTING ONE PICTURE AFTER THE
        OTHER IS MAGICAL TO ME."
      </h2>

      <p className="max-w-2xl text-base sm:text-lg md:text-2xl opacity-70 font-impact leading-relaxed">
        Consciously looking for these moments, internalizing them, and learning
        from them gets me excited in a way that I just need to do this for the
        rest of my life.
      </p>
    </section>
  );
}

export default PhilosophySlide;
