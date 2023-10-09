import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'

// type Props = {
//     params: { slug: string }
// }

// export default async function Page({ params }: Props) {

//     const page = await getPage(params.slug)

//     return (
//         <div className="text-center text-gray-400">

//             <div className="flex items-center justify-center gap-5 pt-10 ">
//                 <div>

//                     <Image
//                         src={page.image}
//                         alt={page.title}
//                         width={400}
//                         height={920} />
//                 </div>

//                 <div className="text-xl w-[50%]">
//                     <PortableText value={page.history} />
//                 </div>
//             </div>


//             <div className="flex flex-col items-center justify-center gap-5 py-10 ">

//                 <div className="text-xl w-[50%]">
//                     <p className="underline font-bold">What excites me?</p>
//                     <PortableText value={page.excites} />
//                 </div>
//                 <div className="text-xl w-[50%]">
//                     <p className="underline font-bold">Skills:</p>

//                     <PortableText value={page.skills} />
//                 </div>
//             </div>

//         </div>
//     )
// }