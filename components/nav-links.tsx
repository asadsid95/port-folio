'use client'

import { useRef } from "react";
import { ProjectSection } from "./projects-section";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


const navLinks = ['About', 'Projects']

export const NavLink = ({ projects }) => {

    const aboutRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='flex justify-between px-4 bg-black/40 '>
            <div className="w-full text-center  sticky top-0">

                <nav className="w-full text-4xl z-20 sticky top-52">
                    <ul className='' >

                        <li className='active:text-gray-500' onClick={() => scrollToSection(projectsRef)}>Projects</li>
                        {/* <li className='active:text-gray-500' onClick={() => scrollToSection(aboutRef)}>About</li> */}

                    </ul>
                </nav>
            </div>

            <div className="w-full bg-black/40 pt-20">

                <section ref={projectsRef} className='bg-black/50 scroll-mt-10 mb-36'>
                    <div className="flex flex-col items-center justify-center ">
                        {projects.map((project) => (

                            <Link
                                href={`/projects/${project.slug}`}
                                key={project._id}

                                className="group p-3 gap-3 flex justify-between text-white  "
                            >
                                <div className="flex items-center group-hover:scale-105 group-hover:bg-gray-700 group-hover:rounded-md transition">

                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={200}
                                            height={250}
                                            className="object-cover rounded-md "
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col">

                                    <div className="font-extrabold ">
                                        {project.name}
                                    </div>

                                    <div className="font-bold text-xs text-gray-600 ">
                                        <PortableText value={project.content} />
                                    </div>
                                    <div className="font-base text-xs mt-3">
                                        <p className="underline">Technologies:<br /></p>

                                        <PortableText value={project.listOfTechnologies} />
                                    </div>
                                </div>
                                {/* <hr className="w-full mt-5 bg-slate-500" /> */}

                            </Link>
                        ))}
                    </div>
                </section>

                {/* <section ref={aboutRef} className='bg-black/30 scroll-mt-16 mb-36'>
                    <div>

                        <h2>About</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                        </p>
                    </div>
                </section> */}
            </div>


        </div>
    )
}