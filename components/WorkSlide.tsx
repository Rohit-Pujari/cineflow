import React from "react";

function WorkSlide() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 px-4 sm:px-8 text-center max-w-screen-xl mx-auto">
      {/* Title */}
      <h1 className="text-[10vw] sm:text-7xl md:text-8xl font-anthonio opacity-70">
        Work
      </h1>

      {/* Subtitle */}
      <h2 className="text-[6vw] sm:text-4xl md:text-5xl font-extrabold">
        LATEST PROJECTS
      </h2>

      {/* Videos */}
      <div className="flex flex-col justify-center items-center w-full sm:w-[80%] md:w-[60%] p-4 sm:p-8 md:p-12 gap-8 sm:gap-10 md:gap-12 opacity-80">
        {["video1.mp4", "video5.mp4", "video4.mp4"].map((file, idx) => (
          <video
            key={idx}
            src={`/videos/${file}`}
            controls
            className="w-full h-auto sm:h-[40vh] rounded-xl shadow-xl"
            about="My latest project"
          />
        ))}
      </div>
    </section>
  );
}

export default WorkSlide;
