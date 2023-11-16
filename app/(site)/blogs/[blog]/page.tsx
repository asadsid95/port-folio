import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { blog: string };
};

export default async function Project({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  return (
    <div className="max-w-3xl mx-auto py-5 text-gray-400 h-[50vh] text-center ">
      <header className=" cursor-pointer hover:underline bg-black py-10">
        {/* <a href={project.url} title='View Project' target='_blank' rel='noopener noreferrer'> */}
        <h1 className="  text-5xl drop-shadow-sm font-extrabold">
          {blog.name}
        </h1>
        {/* </a> */}
      </header>
      <div>
        <Image
          src={blog.image}
          alt={blog.name}
          width={420}
          height={280}
          className="my-5 border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>

      {blog.content && (
        <div className="text-xl  text-gray-400 mt-5 font-bold">
          {/* <p className="">blog Description:<br /></p> */}
          <div>
            <PortableText value={blog.content} />
          </div>
        </div>
      )}
    </div>
  );
}
