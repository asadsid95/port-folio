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
    <div className="flex justify-between ">
      <div id="projects" className="w-full text-center ">
        <p
          className=" text-4xl font-bold sticky top-52"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </p>
      </div>

      <div className="w-full">
        {/* Projects section */}
        <section ref={projectsRef} className="scroll-mt-10 text-black ">
          <div className="flex flex-col items-center justify-between space-y-5 ">
            {projects.map((project: any) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="group p-3 gap-3 flex justify-between transition rounded-md hover:bg-gray-300 "
              >
                <div className="flex items-center group-hover:scale-110 duration-100 ">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={200}
                      height={250}
                      className="rounded-md max-w-md shadow-lg"
                    />
                  ) : (
                    <Image
                      src="/default.jpg"
                      alt={project.name}
                      width={200}
                      height={250}
                      className="rounded-md max-w-md shadow-lg"
                    />
                  )}
                </div>
                <div className="flex flex-col whitespace-pre-wrap text-center w-[30vw]">
                  <div className="font-extrabold ">{project.name}</div>

                  <div className="font-semibold text-xs ">
                    <PortableText value={project.content} />
                  </div>
                  <div className="font-base text-xs mt-3">
                    <p className="underline font-medium">Technologies:</p>
                    <PortableText value={project.listOfTechnologies} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
