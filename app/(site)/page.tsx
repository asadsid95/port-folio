import { getPage, getProjects } from "@/sanity/sanity-utils";
import React from "react";
import { NavLink } from "@/components/nav-links";
import Header from "@/components/header";

async function App() {
  const projects = await getProjects();
  const pages = await getPage();
  console.log(pages.resume);

  return (
    <>
      <Header pages={pages} projects={projects} />
    </>
  );
}

export default App;
