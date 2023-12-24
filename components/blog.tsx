"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export const Blog = ({ blogs }: any) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check window dimensions after the component has mounted
    setIsLargeScreen(window.innerWidth >= 1024);

    // Add event listener to update dimensions on window resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //////////////////////////////////////////////////////

  return (
    <>
      <div className="flex flex-col h-screen lg:pt-10">
        <Link
          href={"/blogs"}
          className=" font-bold text-center hover:text-[#f2cd87] transition duration-300  text-lg md:text-xl lg:text-4xl"
        >
          Blog
        </Link>
        {/* <div className="flex flex-col gap-y-5 lg:flex-row items-center lg:items-start justify-around mx-5 "> */}
        <div className="grid lg:grid-cols-3 gap-3 justify-center lg:py-10">
          {blogs.slice(0, isLargeScreen ? 6 : 3).map((blog: any) => (
            <Link
              href={`/blogs/${blog.slug}`}
              key={blog._id}
              className="group p-1 flex flex-col justify-between items-center text-center hover:bg-gray-300 rounded-md w-56 mx-20 "
            >
              <div className="group-hover:scale-105 hover:brightness-90 transition w-full h-28 lg:h-36 ">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.name}
                    width={200}
                    height={250}
                    className="rounded-md w-full h-full object-contain"
                  />
                )}
              </div>
              <div>
                <div className=" mt-2 text-xs font-semibold lg:text-lg lg:font-bold ">
                  {blog.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-right mb-4 mr-10 lg:mr-32 text-black/60">
          <Link
            href={"/blogs"}
            className="hover:text-[#f2cd87] hover:underline transition duration-100 text-[10px] font-bold lg:font-bold lg:text-sm "
          >
            See more blogs -&gt;
          </Link>
        </div>
      </div>
    </>
  );
};
