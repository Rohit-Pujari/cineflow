import React from "react";

function PurposeSlide() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 px-4 sm:px-8 text-center min-h-[80vh] max-w-screen-xl mx-auto">
      <h1 className="text-[10vw] sm:text-7xl md:text-8xl font-anthonio opacity-70">
        Purpose
      </h1>

      <h2 className="text-[5.5vw] sm:text-4xl md:text-5xl font-impact font-extrabold max-w-5xl leading-tight">
        "SUSTAINABILITY IS A SUBJECT CLOSE TO MY HEART."
      </h2>

      <p className="max-w-2xl text-base sm:text-lg md:text-2xl opacity-70 font-poppins leading-relaxed">
        Environmentally-conscious projects deserve special attention and will be
        met by me in this way. Get in touch so we can work out a tailored offer.
      </p>
    </section>
  );
}

export default PurposeSlide;
