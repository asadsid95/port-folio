"use client";

import React, { useEffect, useRef } from "react";
import { NavLink } from "./nav-links";

// Add a scroll event listener

const Header = ({ pages, projects }: any) => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex flex-col h-screen justify-center text-center">
        <h1 className="text-5xl font-extrabold my-5">
          <a href="/" className=" shadow-md">
            {" "}
            Asad Siddiqui
          </a>
        </h1>
        <p className="mt-4 text-lg font-medium ">
          <span className="">Status: </span>Looking for the next thing
        </p>
        <p className="mt-4 text-gray-500 text-lg font-semibold">
          I want to build softwares
        </p>

        <div className="mt-5">
          <a href={`${pages.resume}?dl=Resume.pdf`}>
            <button className="bg-[#f2cd87] px-4 py-2 rounded-md shadow-lg w-36">
              Download CV
            </button>
          </a>
        </div>
      </header>

      <NavLink projects={projects} ref={projectsRef} />
    </>
  );
};

export default Header;
