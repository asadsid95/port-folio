"use client";

import { getBlogs, getPage, getProjects } from "@/sanity/sanity-utils";
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "@/components/nav-links";
import { Blog } from "@/components/blog";
import MoreContentArrow from "@/components/morecontentArrow";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";
import Contact from "@/components/contact";

//@ts-ignore
function App() {
  const [projects, setProjects]: any[] = useState([]);
  const [pages, setPages]: any[] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#6b6b6b",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

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
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="fixed top-0 left-0 -z-0"
      />
      <div className="flex flex-col h-screen justify-evenly px-10 py-10 ">
        <div className="flex flex-col  justify-center text-center  ">
          <a href="/" className="">
            <h1 className="text-2xl font-extrabold my-1 lg:text-5xl lg:my-5">
              Asad Siddiqui
            </h1>
          </a>
          <p className="mt-2 lg:mt-4 text-xs lg:text-lg font-medium ">
            <em className="bg-[#f2cd87] not-italic">Status:</em> Seeking the
            next production-ready product to build
          </p>

          <hr className=" w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded lg:w-72 lg:my-6 dark:bg-gray-700" />
          <p className=" text-xs  lg:text-lg lg:mt-4 font-normal ">
            I'm building software, tinkering in the cloud, and visualizing data
            flow
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
      <Contact />
    </>
  );
}

export default App;
