import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// create client to pull all projects
export async function getProjects(): Promise<Project[]> {
  // create client
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            listOfTechnologies,
            role,
            responsibilities,
            lessonsLearned
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  // use client to pull project using GROQ
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            listOfTechnologies,
            role,
            responsibilities,
            lessonsLearned
        }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
  );
}

export async function getPage(): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        history,
        excites,
        skills,
        "resume": resume.asset->url
      }`
  );
}

export async function getBlogs() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      name,
      content, 
      "image": image.asset->url,
      "slug": slug.current
    }`
  );
}

export async function getBlog(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      content, 
      "image": image.asset->url,
      "slug": slug.current
    }`,
    { slug }
  );
}
