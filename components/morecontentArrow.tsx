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
    <div
      className={`border-2 border-blue-200 cursor-pointer ${
        isHovered ? "bold" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      onClick={handleClick}
    >
      ▼
    </div>
  );
}
