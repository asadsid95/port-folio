import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {

    const page = await getPage(params.slug)

    console.log('page: ', page)

    return (
        <div>
            <h1 className="
            bg-gradient-to-r from-stone-500 via-blue-400 to-orange-500 bg-clip-text text-transparent text-5xl drop-shadow-sm font-extrabold">
                {page.title}
            </h1>

            <div className="text-lg mt-10 text-gray-700">

                <PortableText value={page.content} />
            </div>

        </div>
    )
}