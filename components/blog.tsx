"use client";

import Image from "next/image";
import Link from "next/link";

export const Blog = ({ blogs }: any) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <p className=" font-bold text-center hover:text-[#f2cd87] transition duration-300 mt-10 text-lg md:text-xl lg:text-4xl">
          Blog
        </p>
        <div className="flex items-start justify-around mx-8 ">
          {blogs.slice(0, 3).map((blog: any) => (
            <Link
              href={`/blogs/${blog.slug}`}
              key={blog._id}
              className="group p-3 flex flex-col justify-between items-center text-center hover:bg-gray-300 rounded-md w-48 "
            >
              <div className="group-hover:scale-105 transition w-full h-12 lg:h-36 ">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.name}
                    width={100}
                    height={150}
                    className="rounded-md w-full h-full"
                  />
                )}
              </div>
              <div>
                <div className="text-xs font-normal lg:text-lg lg:font-bold ">
                  {blog.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-right mb-2 mr-2">
          <Link
            href={"/blogs"}
            className="hover:text-[#f2cd87] hover:underline transition duration-100 text-xs font-bold lg:font-bold lg:text-sm "
          >
            See more blogs -&gt;
          </Link>
        </div>
      </div>
    </>
  );
};
