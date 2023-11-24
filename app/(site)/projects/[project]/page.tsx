import { getProject, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

const myPortableTextComponents = {
  block: {
    h5: ({ children }: any) => <h1 className="text-xl mb-1">{children}</h1>,
    normal: ({ children }: any) => <p className="mb-1">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="bg-gray-400 font-semibold text-xs list-disc pl-4 mb-5">
        {children}
      </ul>
    ),
  },
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div className=" flex flex-col w-full gap-5 h-full my-10 justify-between items-center  ">
      <header className="text-center">
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-md lg:text-3xl font-bold text-center  hover:text-[#f2cd87] transition duration-300 ">
            {project.name}
          </h1>
        </a>

        {project.content && (
          <div className="text-gray-400 text-xs lg:text-sm py-2">
            <div>
              <PortableText
                value={project.content}
                components={myPortableTextComponents}
              />
            </div>
          </div>
        )}
        {project.listOfTechnologies && (
          <div className=" text-xs lg:text-sm py-2">
            <p className="underline font-bold">
              Technologies
              <br />
            </p>
            <div>
              <PortableText value={project.listOfTechnologies} />
            </div>
          </div>
        )}
      </header>

      <div>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            width={320}
            height={280}
            className="rounded-md max-w-md"
          />
        ) : (
          <Image
            src="/default.jpg"
            alt={project.name}
            width={200}
            height={250}
            className="rounded-md max-w-md"
          />
        )}
      </div>

      <div className="text-xs mx-4 lg:text-base lgmx-8">
        <p className="underline font-bold">
          Lessons learned
          <br />
        </p>

        <PortableText value={project.lessonsLearned} />
      </div>
    </div>
  );
}
