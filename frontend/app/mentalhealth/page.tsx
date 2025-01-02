import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { client } from '../lib/sanity';
import  { Mentalhealth }  from "../lib/interface";
import MailForm from "../components/MailForm";

async function getData() {
  const query = `*[_type == "mentalhealth"]
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

// export const revalidate = 60;  //revalidates the page every 60 seconds

export default async function MentalhealthPage () {
  const data = await getData() as Mentalhealth[];
  return (
   <div>
     <div className='w-full bg-mentalhealthbanner bg-center h-96'>
       <div className='w-full h-96 bg-black opacity-80 text-white z-[-1]'>
         <div className='h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center text-4xl md:text-5xl font-extrabold text-center'>
             Mental Health 🧠
          </div>
      </div>
   </div>
   <div>
    <h1 className='font-extrabold capitalize text-2xl md:text-3xl lg:text-5xl text-center text-violet-500 my-12'>All Mental Health Posts</h1>
   </div>

   <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
    {data.map((mentalhealth) => (
      <div key={mentalhealth._id}
      className="bg-white p-3 rounded-lg shadow-xl hover:-translate-y-3 hover:scale-300 duration-300"
      >
        <article>
          <Link href={`/mentalhealth/${mentalhealth.slug.current}`}>
            <div>
              <div className="w-[300px] h-[200px] overflow-hidden rounded-lg border border-gray-500">
              {mentalhealth.mainImage && (
              <Image
               src={mentalhealth.mainImage}
               alt={mentalhealth.title}
               width={300}
                height={200}
               className="w-full h-full"
               />
              )}
              </div>
              <h2 className="font-bold text-3xl hover:text-violet-500 transition duration-300 ease-in-out mt-8">{mentalhealth.title}</h2>,
            </div>

            <p className="line-clamp-2 mt-4 font-bold">{mentalhealth.overview}</p>
          </Link>
          <div>
            Date Published :<span className="font-semibold">{new Date(mentalhealth._createdAt).toISOString().split("T")[0]}</span>
          </div>
        </article>

      </div>
    ))}
   </div>

   <div className='text-center text-white mt-16 bg-fixed bg-mentalhealthbanner bg-cover'>
    <div className="bg-black opacity-80">
        <MailForm/>
    </div>
    </div>
</div>
  )
}

