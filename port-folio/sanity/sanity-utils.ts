import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

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
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {

    const client = createClient({
        projectId: 'bkrqoana',
        dataset: 'production',
        apiVersion: "2023-09-19",
    }
    )

    // use client to pull project using GROQ
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    )

}