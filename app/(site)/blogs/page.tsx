"use client";

import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // fetching all blog posts from sanity
    const fetchBlogs = async () => {
      const allBlogs = await getBlogs();

      setBlogs(allBlogs);
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <Link
          href={"/"}
          className="text-4xl font-bold text-center mt-10 hover:text-[#f2cd87] transition duration-300 mx-auto"
        >
          Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 my-11 ">
        {blogs
          .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
          .map((blog: any) => (
            <div className="flex justify-center items-center">
              <Link
                href={`/blogs/${blog.slug}`}
                key={blog._id}
                className="group p-3 gap-3 flex flex-col justify-center items-center text-center hover:bg-gray-300 rounded-md max-w-sm "
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
                  <div className="font-extrabold">{blog.name}</div>
                </div>
              </Link>
            </div>
          ))}
      </div>

      {/* <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button key={number} onClick={() => handlePageChange(number)}>
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
    </div>
  );
}
