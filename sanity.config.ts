import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'bkrqoana',
    dataset: 'production',
    title: 'My Portfolio',
    apiVersion: "2023-09-20",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})


export default config