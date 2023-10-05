import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';
import { Page } from "@/types/Page";


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
            listOfTechnologies
        }`
    )
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
            listOfTechnologies
        }`,
        { slug }
    )

}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }`,
        { slug }
    )
}