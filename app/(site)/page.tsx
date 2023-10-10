// 'use client'

import { getPage, getProjects } from '@/sanity/sanity-utils';
import React from 'react';
import { NavLink } from '@/components/nav-links';

async function App() {

    const projects = await getProjects()
    const pages = await getPage()
    console.log('hello1111111111111111111111111111')
    console.log(pages.resume)

    // const downloadFile = () => {
    //     pages.resumeURL
    // }

    return (
        <>
            <header className="flex flex-col h-screen justify-center text-center">

                <h1 className="text-5xl font-extrabold my-5"><a href='/' className=' shadow-md'> Asad Siddiqui</a></h1>
                <p className='mt-4 text-lg font-medium '><span className=''>Status: </span>Looking for the next thing</p>
                <p className='mt-4 text-gray-500 text-lg font-semibold'>I want to build softwares</p>

                <div className='mt-5'>
                    <a href={`${pages.resume}?dl=Resume.pdf`}>
                        <button className="bg-[#f2cd87] px-4 py-2 rounded-md shadow-lg w-36">
                            Download CV
                        </button>

                    </a>
                </div>

            </header >

            <NavLink projects={projects} />
        </>

    );
}

export default App;