import Link from "next/link";
import React from "react";

type NavProps = {
  scrollTo: {
    heroRef: React.RefObject<HTMLDivElement | null>;
    philosophyRef: React.RefObject<HTMLDivElement | null>;
    workRef: React.RefObject<HTMLDivElement | null>;
    purposeRef: React.RefObject<HTMLDivElement | null>;
  };
};

function Nav({ scrollTo }: NavProps) {
  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 sm:px-6 md:px-8 lg:px-12 text-base sm:text-lg md:text-xl bg-black/80 backdrop-blur-xl shadow-2xl">
      {/* Logo */}
      <section>
        <button onClick={handleScroll(scrollTo.heroRef)}>
          <img
            src="/images/logo.png"
            alt="CineFlow"
            width={60}
            height={60}
            className="sm:w-[80px] md:w-[100px]"
          />
        </button>
      </section>

      {/* Nav Items */}
      <section className="flex gap-2 sm:gap-4 items-center text-white">
        <ul className="flex gap-2 sm:gap-4 items-center">
          <button onClick={handleScroll(scrollTo.workRef)}>
            <li className="hover:text-green-400 transition">Media</li>
          </button>
          {/* Divider and Status Indicator */}
          <span className="hidden sm:block h-8 w-px bg-white mx-2" />
          <span className="h-4 w-4 sm:h-6 sm:w-6 bg-green-500 rounded-full" />

          {/* Contact Link */}
          <Link href="https://www.instagram.com/cineflow.in?igsh=YjFqYnZ5M2lxenpy">
            <li className="text-green-500 hover:underline">Contact</li>
          </Link>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
