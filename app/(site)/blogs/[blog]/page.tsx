import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "../../../../sanity/config/client-config";

import Image from "next/image";

const builder = imageUrlBuilder(clientConfig);

type Props = {
  params: { blog: string };
};

const myPortableTextComponents = {
  block: {
    h5: ({ children }: any) => (
      <h1 className="text-xl mb-1 font-semibold">{children}</h1>
    ),
    normal: ({ children }: any) => <p className="mb-1">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="bg-gray-200 font-semibold text-xs list-disc pl-4 mb-5">
        {children}
      </ul>
    ),
  },
  marks: {
    // Define rendering logic for different mark types
    // For now, handling only the 'span' mark type
    span: ({ children, mark }: any) => (
      <span className={`text-${mark.text.toLowerCase()} bg-blue-600`}>
        {children}
      </span>
    ),
  },
  // inblogimage: ({ value, isInline }: any) => {
  //   console.log(value);
  //   return (
  //     <img className="bg-black" src={builder.image(value.asset._ref).url()} />
  //   );
  // },
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  const formattedDate = new Date(blog._createdAt).toLocaleDateString();

  // console.log(blog);

  // blog.content.forEach((block: any) => {
  //   console.log(block.asset);
  // });

  return (
    <div className="flex flex-col w-full gap-5 h-full my-10 justify-between items-center mx-4 ">
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
        <div className=" text-xs  lg:text-base lg:mx-8">
          <div className="p-6  flex flex-col bg-gray-200/50 ">
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
