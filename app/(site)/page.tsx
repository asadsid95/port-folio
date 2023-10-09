// 'use client'

import { getPage, getProjects } from '@/sanity/sanity-utils';
import React from 'react';
import { NavLink } from '@/components/nav-links';

async function App() {

    const projects = await getProjects()
    const pages = await getPage()

    return (
        <>
            <header className="flex flex-col h-screen justify-center text-center">

                <h1 className="text-5xl font-extrabold my-5"><a href='/' className=' shadow-md'> Asad Siddiqui</a></h1>
                <p className='mt-4 text-lg font-medium '><span className=''>Status: </span>Looking for the next thing</p>
                <p className='mt-4 text-gray-500 text-lg font-semibold'>I want to build oftwares</p>

                <div className='mt-5'>
                    <button className="bg-[#f2cd87] px-4 py-2 rounded-md shadow-lg w-36">
                        Download CV
                    </button>
                </div>
                {/* <a
                    className='cursor-pointer text-blue-600 underline bg-black/40 my-4 '
                    href="" download>
                    Download Resume
                </a> */}
            </header >

            <NavLink projects={projects} />
        </>

    );
}

export default App;