"use client";

import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  useEffect(() => {
    // fetching all blog posts from sanity
    const fetchBlogs = async () => {
      const allBlogs = await getBlogs();

      setBlogs(allBlogs);
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <h1 className="text-4xl text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs
          .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
          .map((blog: any) => (
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
              <div className="flex flex-col text-black">
                <div className="font-extrabold ">{blog.name}</div>
              </div>
            </Link>
          ))}
      </div>

      <div>
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
      </div>
    </>
  );
}
