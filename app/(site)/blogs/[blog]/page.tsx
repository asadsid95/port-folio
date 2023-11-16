import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { blog: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  return (
    <div className="max-w-3xl mx-auto py-5  h-[100vh] text-center bg-white">
      <header className="py-5">
        <div className="text-gray-400">
          <p>Written by Asad </p>
          <p>Created at: {blog._createdAt}</p>
        </div>
        <div className="text-black">
          <h1 className="text-3xl drop-shadow-sm font-extrabold">
            {blog.name}
          </h1>
        </div>
      </header>
      <div className="my-5  object-cover rounded-xl">
        <Image
          src={blog.image}
          alt={blog.name}
          width={420}
          height={280}
          className="mx-auto"
        />
      </div>

      {blog.content && (
        <div className="text-gray-400 mt-5 font-bold border-2">
          <div>
            <PortableText value={blog.content} />
          </div>
        </div>
      )}
    </div>
  );
}
