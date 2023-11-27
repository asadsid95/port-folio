"use client";

import { getBlogs, getPage, getProjects } from "@/sanity/sanity-utils";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "@/components/nav-links";
import { Blog } from "@/components/blog";
import MoreContentArrow from "@/components/morecontentArrow";
import Link from "next/link";
import Image from "next/image";

//@ts-ignore
function App() {
  const [projects, setProjects]: any[] = useState([]);
  const [pages, setPages]: any[] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const allProjects = await getProjects();
      const allPages = await getPage();
      const allBlogs = await getBlogs();

      setProjects(allProjects);
      setPages(allPages);
      setBlogs(allBlogs);
    };

    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen justify-evenly px-10 py-10 ">
        <div className="flex flex-col  justify-center text-center  ">
          <a href="/" className="">
            <h1 className="text-2xl font-extrabold my-1 lg:text-5xl lg:my-5">
              Asad Siddiqui
            </h1>
          </a>
          <p className="mt-2 lg:mt-4 text-xs lg:text-lg font-medium ">
            <span className="bg-[#f2cd87]">Status:</span> Looking for the next
            thing
          </p>

          <hr className=" w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded lg:w-72 lg:my-6 dark:bg-gray-700" />
          <p className=" text-xs  lg:text-lg lg:mt-4 font-normal ">
            I want to continue building software, tinker in the cloud, and
            visualize data flow
          </p>

          <div className="mt-10 ">
            <a href={`${pages.resume}?dl=Resume.pdf`}>
              <button className="bg-[#f2cd87] hover:bg-[#f2cd87]/80 rounded-md shadow-md px-2 py-2 w-24 text-xs font-bold lg:text-lg lg:font-bold lg:w-48 lg:px-4 lg:py-2">
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-5 ">
          <a href="https://github.com/asadsid95">
            <Image src="/github.png" alt="github-icon" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/asad-siddiqui/">
            <Image
              src="/linkedin.png"
              alt="linkedin-icon"
              width={30}
              height={30}
            />
          </a>
        </div>

        <MoreContentArrow />
      </div>
      <NavLink projects={projects} blogs={blogs} />
      <Blog blogs={blogs} />


    </>
  );
}

export default App;
