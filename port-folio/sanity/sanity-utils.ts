import { createClient, groq } from "next-sanity";


// create client to pull all projects
export async function getProjects() {
    // create client
    const client = createClient({
        projectId: 'bkrqoana',
        dataset: 'production',
        apiVersion: "2023-09-19",
    }
    )

    // use client to pull project using GROQ
    return client.fetch(
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