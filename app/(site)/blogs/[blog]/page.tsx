import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "../../../../sanity/config/client-config";

import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(clientConfig);

type Props = {
  params: { blog: string };
};

const myPortableTextComponents = {
  block: {
    h5: ({ children }: any) => (
      <h1 className="text-xl mb-1 font-semibold  text-center">{children}</h1>
    ),
    normal: ({ children }: any) => <p className="mb-1">{children}</p>,
    link: ({ children }: any) => <a href={children.href}></a>,
  },
  marks: {
    code: ({ children }: any) => (
      <p className="bg-gray-200 p-1 m-1 inline-block font-semibold">
        {" "}
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="text-xs list-disc pl-4 mb-3">{children}</ul>
    ),
  },

  types: {
    inblogimage: ({ value, isInline }: any) => {
      return (
        <img className="bg-black" src={builder.image(value.asset._ref).url()} />
      );
    },
  },
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  const formattedDate = new Date(blog._createdAt).toLocaleDateString();

  return (
    <div className="flex flex-col w-full gap-5 h-screen  justify-between items-center px-4">
      <header className=" text-center mt-10 ">
        <div className="text-gray-400 text-xs lg:text-sm ">
          <p>Written by Asad </p>
          <p>Created at: {formattedDate}</p>
        </div>
      </header>
      <div className=" ">
        <Image
          src={blog.image}
          alt={blog.name}
          width={220}
          height={180}
          className="rounded-md max-w-md"
        />
      </div>
      <div className="">
        <Link href="/">
          <h1 className="text-sm font-bold lg:text-2xl hover:text-[#f2cd87] transition duration-300 text-center  ">
            {blog.name}
          </h1>
        </Link>
      </div>

      {blog.content ? (
        <div className=" text-xs lg:text-sm lg:mx-8 lg:w-[50vw]">
          <div className="">
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
