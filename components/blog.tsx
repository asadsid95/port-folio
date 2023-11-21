"use client";

import Image from "next/image";
import Link from "next/link";

export const Blog = ({ blogs }: any) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <p className="text-4xl font-bold text-center hover:text-[#f2cd87] transition duration-300 mt-10">
          Blog
        </p>
        <div className="flex items-center justify-around mx-10">
          {blogs.slice(0, 3).map((blog: any) => (
            <Link
              href={`/blogs/${blog.slug}`}
              key={blog._id}
              className="group p-3 gap-3 flex flex-col justify-between items-center text-center hover:bg-gray-300 rounded-md max-w-sm   "
            >
              <div className="group-hover:scale-105 transition">
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
              <div className="">
                <div className="font-extrabold ">{blog.name}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-right mr-24 mb-3 text-black font-bold">
          <Link
            href={"/blogs"}
            className=" mr-4 hover:text-[#f2cd87] hover:underline transition duration-100 "
          >
            See more blogs -&gt;
          </Link>
        </div>
      </div>
    </>
  );
};
