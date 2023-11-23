"use client";

import { useState } from "react";

export default function MoreContentArrow() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const projectsSection = document.getElementById("projects"); // Adjust the ID to match your content section
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center">
      <p
        className="{text-center text-xl text-[#f2cd87] cursor-pointer}"
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onClick={handleClick}
      >
        <button
          className={
            isHovered
              ? "bg-gradient-to-b from-black to-yellow-400 bg-clip-text text-transparent"
              : ""
          }
        >
          ▼
        </button>
      </p>
    </div>
  );
}
