// 'use client'

import { getBlogs, getPage, getProjects } from "@/sanity/sanity-utils";
import React from "react";
import { NavLink } from "@/components/nav-links";
import { Blog } from "@/components/blog";

async function App() {
  const projects = await getProjects();
  const pages = await getPage();
  const blogs = await getBlogs();

  // const downloadFile = () => {
  //     pages.resumeURL
  // }

  return (
    <>
      <header className="flex flex-col h-screen justify-center text-center">
        <a href="/" className="">
          <h1 className="text-5xl font-extrabold my-5">Asad Siddiqui</h1>
        </a>
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

      <NavLink projects={projects} blogs={blogs} />
      <Blog blogs={blogs} />
    </>
  );
}

export default App;
