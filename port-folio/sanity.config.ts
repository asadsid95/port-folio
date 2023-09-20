import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: 'bkrqoana',
    dataset: 'production',
    title: 'My Portfolio',
    apiVersion: "2023-09-19",
    basePath: "/admin",
    plugins: [deskTool()]
})


export default config