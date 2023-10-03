'use client'

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
    // creates sanity studio in nextjs app
    return <NextStudio config={config} />
}