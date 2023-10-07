import { getProjects } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from 'next/image'
import Link from "next/link"

export default async function Home() {

  const projects = await getProjects()

  return (
    <div className="max-w-7xl mx-auto py-20 px-10 flex ">
      <div className="text-center">

        <h1 className="text-5xl font-extrabold text-gray-600">Hi, my name is<span > Asad</span>!</h1>

        <p className="my-6 text-xl font-bold text-gray-600">I like to take apart things and then rebuild them.</p>
      </div>

      <div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:mx-12 sm:mx-3 ">
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
        </div>
      </div >
    </div >
  )
}
