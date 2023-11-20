"use client";

import Image from "next/image";
import Link from "next/link";

export const Blog = ({ blogs }: any) => {
  return (
    <>
      <section className="bg-black/30 scroll-mt-16 mb-36">
        <h1 className="text-4xl text-center">Blog</h1>
        <div className="flex items-center justify-center ">
          {blogs.slice(0, 3).map((blog: any) => (
            <Link
              href={`/blogs/${blog.slug}`}
              key={blog._id}
              className="group p-3 gap-3 flex justify-between text-white  "
            >
              <div className="flex items-center group-hover:scale-105 group-hover:bg-gray-700 group-hover:rounded-md transition">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.name}
                    width={200}
                    height={250}
                    className="object-cover rounded-md "
                  />
                )}
              </div>
              <div className="flex flex-col">
                <div className="font-extrabold ">{blog.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-right ">
          <Link
            href={"/blogs"}
            className=" mr-4 text-blue hover:text-blue hover:font-bold transition"
          >
            See more blogs
          </Link>
        </div>
      </section>
    </>
  );
};
