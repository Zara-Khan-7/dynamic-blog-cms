
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { client } from "../lib/sanity";
import  { Programming }  from "../lib/interface"
import MailForm from "../components/MailForm";

async function getData() {
  const query = `*[_type == "programming"]
  {
    title,
    overview,
      slug,
      _id,
      _createdAt,
      "mainImage" :mainImage.asset->url
  }`;
    const data = await client.fetch(query);
    return data;
}

export const revalidate = 60;  //revalidates the page every 60 seconds

export default async function ProgrammingPage () {
  const data = await getData() as Programming[];
  return (
  <div>
    <div className='w-full bg-programmingbanner bg-center h-96'>
        <div className='w-full h-96 bg-black opacity-80 text-white z-[-1]'>
            <div className='h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center text-4xl md:text-5xl font-extrabold text-center'>
               Programming 💻
            </div>
        </div>
    </div>
    <div>
    <h1 className='font-extrabold capitalize text-2xl md:text-3xl lg:text-5xl text-center text-violet-500 my-12'>All Programming Posts</h1>
   </div>

   <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
    {data.map((programming) => (
      <div key={programming._id}
      className="bg-white p-3 rounded-lg shadow-xl hover:-translate-y-3 hover:scale-300 duration-300"
      >
        <article>
          <Link href={`/programming/${programming.slug.current}`}>
            <div>
              <div className="w-[300px] h-[200px] overflow-hidden rounded-lg border border-gray-500">
              {programming.mainImage && (
              <Image
               src={programming.mainImage}
               alt={programming.title}
               width={300}
                height={200}
               className="w-full h-full"
               />
              )}
              </div>
              <h2 className="font-bold text-3xl hover:text-violet-500 transition duration-300 ease-in-out mt-8">{programming.title}</h2>,
            </div>

            <p className="line-clamp-2 mt-4 font-bold">{programming.overview}</p>
          </Link>
          <div>
            Date Published :<span className="font-semibold">{new Date(programming._createdAt).toISOString().split("T")[0]}</span>
          </div>
        </article>

      </div>
    ))}
   </div>


   <div className='text-center text-white mt-16 bg-fixed bg-programmingbanner bg-cover'>
    <div className="bg-black opacity-80">
        <MailForm/>
    </div>
    </div>
 </div>
  )
}
