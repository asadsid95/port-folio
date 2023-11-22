import { getProject, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div className="max-w-3xl mx-auto py-5 text-gray-400 h-[50vh] text-center ">
      <header className=" cursor-pointer hover:underline bg-black py-10">
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="  text-5xl drop-shadow-sm font-extrabold">
            {project.name}
          </h1>
        </a>
      </header>

      {project.content && (
        <div className="text-xl  text-gray-400 mt-5 font-bold">
          {/* <p className="">Project Description:<br /></p> */}
          <div>
            <PortableText value={project.content} />
          </div>
        </div>
      )}

      {project.listOfTechnologies && (
        <div className="text-lg  text-gray-400 my-5">
          <p className="underline font-bold">
            Technologies:
            <br />
          </p>
          <div>
            <PortableText value={project.listOfTechnologies} />
          </div>
        </div>
      )}

      {project.role && project && project.responsibilities && (
        <div className="flex justify-center gap-5">
          <div className="flex flex-col">
            <p className="underline font-bold">
              Role:
              <br />
            </p>
            <div className="text-base">
              <p>{project.role}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="underline font-bold">
              Responsibilities:
              <br />
            </p>
            <div className="text-base over">
              {/* <ul>
                                {project.responsibilities.map((resp, index) => {
                                    <li key={index}>
                                        {resp}
                                    </li>
                                })}
                            </ul> */}
              <PortableText value={project.responsibilities} />
            </div>
          </div>
        </div>
      )}

      <div>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="my-5 border-2  object-cover rounded-xl"
          />
        ) : (
          <Image
            src="/default.jpg"
            alt={project.name}
            width={200}
            height={250}
            className="my-5 border-2  object-cover rounded-xl"
          />
        )}
      </div>

      <div className="pb-5">
        <p className="underline font-bold">
          Lessons learned
          <br />
        </p>

        <PortableText value={project.lessonsLearned} />
      </div>
    </div>
  );
}
