"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

type NavProps = {
  scrollTo: {
    heroRef: React.RefObject<HTMLDivElement | null>;
    philosophyRef: React.RefObject<HTMLDivElement | null>;
    workRef: React.RefObject<HTMLDivElement | null>;
    purposeRef: React.RefObject<HTMLDivElement | null>;
  };
};

function Nav({ scrollTo }: NavProps) {
  const [contactOpen, setContactOpen] = useState(false);

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
      <section className="relative flex gap-2 sm:gap-4 items-center text-white">
        <ul className="flex gap-2 sm:gap-4 items-center">
          <button onClick={handleScroll(scrollTo.workRef)}>
            <li className="hover:text-green-400 transition">Media</li>
          </button>

          {/* Divider and Status */}
          <span className="hidden sm:block h-8 w-px bg-white mx-2" />
          <span className="h-4 w-4 sm:h-6 sm:w-6 bg-green-500 rounded-full" />

          {/* Contact Button */}
          <div className="relative">
            <button
              onClick={() => setContactOpen((prev) => !prev)}
              className="text-green-500 hover:text-green-400 transition"
            >
              Contact
            </button>

            {contactOpen && (
              <div className="absolute right-0 mt-2 bg-black text-white p-3 rounded-xl shadow-lg flex flex-col gap-3 z-50 min-w-[160px] border border-white/10">
                <Link
                  href="https://www.instagram.com/cineflow.in?igsh=YjFqYnZ5M2lxenpy"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-pink-400"
                >
                  <FaInstagram /> Instagram
                </Link>
                <Link
                  href="http://wa.me/917975807394"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-green-400"
                >
                  <FaWhatsapp /> WhatsApp
                </Link>
              </div>
            )}
          </div>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
