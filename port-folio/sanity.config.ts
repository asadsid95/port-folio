import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
    projectId: 'bkrqoana',
    dataset: 'production',
    title: 'My Portfolio',
    apiVersion: "2023-09-19",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [project] }
})


export default config