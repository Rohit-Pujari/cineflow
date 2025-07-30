import Link from "next/link";
import React from "react";

function WorkSlide() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 px-4 sm:px-8 text-center max-w-screen-xl mx-auto">
      {/* Title */}
      <h1 className="text-[10vw] sm:text-7xl md:text-8xl font-anthonio opacity-70">
        Work
      </h1>

      {/* Subtitle */}
      <h2 className="text-[6vw] sm:text-4xl md:text-5xl font-extrabold font-impact">
        LATEST PROJECTS
      </h2>

      {/* Videos */}
      <div className="flex flex-col justify-center items-center w-full sm:w-[80%] md:w-[60%] p-4 sm:p-8 md:p-12 gap-8 sm:gap-10 md:gap-12 opacity-80">
        {[
          "1K_u1wVkZbqEQvJH5XVplw7azlIazr7Ct",
          "1qi6InGlg4ZJUNk0m6e-XdkQNfxELlvwG",
          "1p7sn_TBL6GRuKaWErfuigUUgF2pCcM7E",
        ].map((fileId, idx) => (
          <iframe
            key={idx}
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            width="100%"
            height="360"
            allow="autoplay"
            className="rounded-xl shadow-xl"
          />
        ))}
      </div>
      <Link
      href="https://drive.google.com/drive/folders/11Wtb-QrK727ML7CqSTjZ4-nhnaUPzByz"
        className="p-2 bg-white/20 rounded-xl hover:translate-y-[-2px] transition text-sm sm:text-base md:text-lg font-poppins"
      >
        Explore Other Projects
      </Link>
    </section>
  );
}

export default WorkSlide;
