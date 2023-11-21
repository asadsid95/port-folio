import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { blog: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  const formattedDate = new Date(blog._createdAt).toLocaleDateString();

  return (
    <div className=" flex flex-col w-full gap-5 h-full my-10 justify-between items-center  ">
      <header className="  text-center">
        <div>
          <h1 className="text-3xl font-bold hover:text-[#f2cd87] transition duration-300">
            {blog.name}
          </h1>
        </div>
        <div className="text-gray-400 text-sm py-2">
          <p>Written by Asad </p>
          <p>Created at: {formattedDate}</p>
        </div>
      </header>
      <div className="">
        <Image
          src={blog.image}
          alt={blog.name}
          width={320}
          height={280}
          className="rounded-md max-w-md"
        />
      </div>

      {blog.content ? (
        <div className=" mx-8">
          <div>
            <PortableText value={blog.content} />
          </div>
        </div>
      ) : (
        <p>More coming soon!</p>
      )}
    </div>
  );
}
