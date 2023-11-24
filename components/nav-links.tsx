"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// const navLinks = ['About', 'Projects']

export const NavLink = ({ projects, blogs }: any) => {
  const blogRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between px-1 lg:px-32  ">
      <div id="projects" className="w-full text-center font-bold  ">
        <p
          className=" sticky top-52 hover:text-[#f2cd87] transition duration-300 text-lg md:text-xl lg:text-4xl "
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </p>
      </div>

      <div className="w-full pr-4">
        {/* Projects section */}
        <section ref={projectsRef} className="scroll-mt-10 text-black  ">
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project: any) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="group p-3 gap-3 flex flex-col justify-between items-center transition rounded-md hover:bg-gray-300 "
              >
                <div className="flex items-center group-hover:scale-110 duration-100 ">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={350}
                      height={250}
                      className="rounded-md shadow-lg lg:max-w-lg"
                    />
                  ) : (
                    <Image
                      src="/default.jpg"
                      alt={project.name}
                      width={350}
                      height={250}
                      className="rounded-md shadow-lg lg:max-w-lg"
                    />
                  )}
                </div>
                <div className="flex flex-col items-center w-[30vw]">
                  <div>
                    <p className="text-xs font-bold lg:text-xl lg:font-extrabold text-center">
                      {project.name}
                    </p>
                  </div>
                  <div className="mt-1 text-xs lg:text-md lg:font-semibold  text-center">
                    <PortableText value={project.description} />
                  </div>
                  {/* <div className="text-xs mt-1 text-center">
                    <p className="underline ">Technologies</p>
                    <PortableText value={project.listOfTechnologies} />
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
