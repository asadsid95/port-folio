// 'use client'

import { getPage, getProjects } from '@/sanity/sanity-utils';
import React, { useRef } from 'react';
import Image from 'next/image'
import Link from "next/link"
import { PortableText } from '@portabletext/react';
import { NavLink } from '@/components/nav-links';

const navLinks = ['About', 'Projects']

async function App() {
    // const aboutRef = useRef(null);
    // const experienceRef = useRef(null);
    // const projectsRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const projects = await getProjects()
    const pages = await getPage()

    return (
        <div className="px-10 flex justify-between gap-4">

            <div className="sticky flex flex-col max-h-screen w-1/2 justify-between pt-10 text-center ">

                <h1 className="text-5xl font-extrabold text-gray-600">Hi, my name is<a href='/'> Asad Siddiqui</a> </h1>
                <p className='mt-3 text-lg font-medium bg-black/30 '>Looking for the next thing</p>
                <p className='mt-4 max-w-xs text-gray-600'>Engineer finally found focus in software after completing nuclear engineering, customer and application support, and hospitality</p>
                <nav className='block w-full'>
                    <ul className='mt-16 w-max'>
                        {navLinks.map((link) => (
                            <li key={link}>
                                <NavLink link={link} />
                            </li>
                        ))}

                    </ul>
                </nav>
                <a
                    className='cursor-pointer text-blue-600 underline'
                    href="" download>
                    Download Resume
                </a>
            </div>

            {/* <div className="w-1/2 pt-10  overflow-y-scroll">
                <section ref={aboutRef} className='bg-black/30 scroll-mt-16 mb-36'>
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
                </section>
                <section ref={experienceRef} className='bg-black/40 scroll-mt-16 mb-36'>
                    <h2>Experience</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis vitae rem deleniti magni cumque quis sed necessitatibus quo, delectus voluptates nobis animi nisi? Explicabo reiciendis blanditiis quis vitae sequi.
                    </p>
                </section>
                <section ref={projectsRef} className='bg-black/50 scroll-mt-16 mb-36'>
                    <h2>Projects</h2>
                    {projects.map((project) => (

                        <Link
                            href={`/projects/${project.slug}`}
                            key={project._id}
                            className="rounded-lg p-3 hover:bg-gray-500 flex flex-col items-center justify-center text-white"
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={350}
                                    height={250}
                                    className="object-cover rounded-lg border-2 border-gray-500 hover:scale-105 hover:border-gray-500 transition "
                                />
                            )}

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

                        </Link>
                    ))}
                </section>
            </div> */}
        </div>
    );
}

export default App;