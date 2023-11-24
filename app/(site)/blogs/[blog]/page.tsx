import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { blog: string };
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

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  const formattedDate = new Date(blog._createdAt).toLocaleDateString();

  return (
    <div className="flex flex-col w-full gap-5 h-full my-10 justify-between items-center  ">
      <header className=" text-center">
        <div className="text-gray-400 text-xs lg:text-sm py-2">
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
      <div>
        <h1 className="text-md font-bold lg:text-3xl hover:text-[#f2cd87] transition duration-300">
          {blog.name}
        </h1>
      </div>

      {blog.content ? (
        <div className=" text-xs mx-4 lg:text-base lg:mx-8">
          <div className="p-6  flex flex-col ">
            <PortableText
              value={blog.content}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      ) : (
        <p>More coming soon!</p>
      )}
    </div>
  );
}
