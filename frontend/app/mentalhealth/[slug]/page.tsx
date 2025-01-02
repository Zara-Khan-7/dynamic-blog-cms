import { PageProps } from "@/app/lib/interface";
import { Mentalhealth } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "mentalhealth" && slug.current == "${slug}"]{
    title,
    content,
    _createdAt,
    url,
    "mainImage": mainImage.asset->url
  }[0]`;

  return await client.fetch(query);
}

export const revalidate = 60; // Revalidates the page every 60 seconds

type PostType = "programming" | "mentalhealth";



async function getRecentPosts(postType: PostType) {
  const query = `*[_type == "${postType}"] | order(_createdAt desc)[0..3]{
    title,
    overview,
    slug,
    _id,
    _createdAt,
    url,
    "mainImage": mainImage.asset->url,
    content
  }`;

  return await client.fetch(query);
}

const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).url()}
        alt="image"
        width={800}
        height={800}
        className=""
      />
    ),
  },
};

export default async function MentalHealthSlugPage({ params }: PageProps) {
  // Await the params to resolve the Promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    return <div>Error: Slug is missing</div>;
  }

  const data = await getData(slug);

  if (!data) {
    return <div>Post not found</div>;
  }

  // Fetch recent mental health posts
  const mentalhealthData = (await getRecentPosts(
    "mentalhealth"
  )) as unknown as Mentalhealth[];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main content */}
        <div className="my-24 lg:col-span-8 col-span-1 mx-auto">
          <div className="mx-auto text-center">
            <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl px-4 pt-4">
              {data.title}
            </h1>
            <p className="my-2 font-bold">
              {new Date(data._createdAt).toISOString().split("T")[0]}
            </p>
            {data.mainImage && (
              <Image
                src={data.mainImage}
                alt="image"
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500 mx-auto"
              />
            )}
          </div>
          <div className="px-0 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 leading-8 w-[70%] text-[#333]">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 col-span-1 my-24">
          <div className="lg:sticky relative top-8 my-24">
            <div className="bg-white shadow-lg rounded-lg pb-12 p-5 mg-8">
              <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Related Posts
              </h3>
              {mentalhealthData.map((mentalhealth) => (
                <div key={mentalhealth._id}>
                  <Link href={`/mentalhealth/${mentalhealth.slug.current}`}>
                    <div className="flex items-center w-full mb-4">
                      <div className="w-16 flex-none">
                        {mentalhealth.mainImage && (
                          <Image
                            src={mentalhealth.mainImage}
                            alt="image"
                            width={60}
                            height={60}
                            className="align-middle rounded-full"
                          />
                        )}
                      </div>
                      <div className="flex-grow ml-4">
                        <p className="text-gray-500 font-xs">
                          {new Date(mentalhealth._createdAt)
                            .toISOString()
                            .split("T")[0]}
                        </p>
                        <Link
                          href={`/mentalhealth/${mentalhealth.slug.current}`}
                          className="text-md hover:text-purple-600"
                        >
                          {mentalhealth.title}
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
