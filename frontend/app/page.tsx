import  Banner  from "./components/Banner";
import { Programming, Mentalhealth } from "./lib/interface";
import { client } from "./lib/sanity";
import Link from "next/link";
import Image from "next/image";

type PostType = "programming" | "mentalhealth";

interface PostData {
  title:string;
  overview:string;
  slug:string;
  _id:string;
  _createdAt:string;
  mainImage:string;
  url:string;
  content:string;
}

async function getRecentPosts(postType : PostType){
  const query = `*[_type == "${postType}"] | order(_createdAt desc)[0..3]{
    title,
    overview,
    slug,
    _id,
    _createdAt,
    url,
    "mainImage" : mainImage.asset->url,
    content
  }`

  const data = (await client.fetch(query)) as PostData;
  return data;
}

export const revalidate = 60; //revalidates the page every 60 seconds

export default async function Home() {
  // to fetch recent programming posts
  const programmingData = (await getRecentPosts("programming")) as unknown as Programming[];
 
  // to fetch recent mentalhealth posts
  const mentalhealthData = (await getRecentPosts("mentalhealth")) as unknown as Mentalhealth[];
 
 
 
  return (
    <>
    
      <div className="">
        <Banner/>
      </div>

      <div className="">
        <h1 className="font-extrabold capitalize text-2xl md:text-3xl lg:text-5xl text-center text-black my-12">
              Recent Programming Posts
        </h1>
      </div>

      <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
        {programmingData.map((programming) => (
          <div key={programming._id} className="">
          <div
            key={programming._id}
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
              Date Published :
              <span className="font-semibold">
                {new Date(programming._createdAt).toISOString().split("T")[0]}
              </span>
            </div>
          </article>
          </div>
          </div>
        ))}
      </div>
    

      <div className="">
        <h1 className="font-extrabold capitalize text-2xl md:text-3xl lg:text-5xl text-center text-black my-12">
              Recent Mental Health Posts
        </h1>
      </div>

      <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
        {mentalhealthData.map((mentalhealth) => (
          <div key={mentalhealth._id} className="">
          <div
            key={mentalhealth._id}
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
              Date Published :
              <span className="font-semibold">
                {new Date(mentalhealth._createdAt).toISOString().split("T")[0]}
              </span>
            </div>
          </article>
          </div>
          </div>
        ))}
      </div>
    </>




  );
}