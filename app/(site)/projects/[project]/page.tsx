import { getProject, getProjects } from "@/sanity/sanity-utils"
import { PortableText } from '@portabletext/react'
import Image from "next/image"

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {

    const slug = params.project

    const project = await getProject(slug)

    return (
        <div className="max-w-3xl mx-auto py-20 text-white ">
            <header className="flex items-center justify-between">
                <h1 className="  text-5xl drop-shadow-sm font-extrabold">
                    {project.name}
                </h1>

                {project.url && (
                    <a href={project.url} title='View Project' target='_blank' rel='noopener noreferrer'
                        className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-500 hover:text-pink-100 transition ">
                        View Project
                    </a>


                )}
            </header>

            <Image src={project.image} alt={project.name}
                width={1920} height={1080}
                className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />

            {project.content && (

                <div className="text-lg text-gray-400 mt-5">
                    <p className="">Project Description:<br /></p>
                    <div className="text-base">

                        <PortableText value={project.content} />
                    </div>
                </div>

            )}

        </div>)
}