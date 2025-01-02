export interface Programming {
    title:string;
    overview:string;
    content:any;
    _id: string;
    slug: {
        current: string;
    }
    _createdAt: string;
    mainImage: string;
    url: string;
}
export interface Mentalhealth {
    title:string;
    overview:string;
    content:any;
    _id: string;
    slug: {
        current: string;
    }
    _createdAt: string;
    mainImage: string;
    url: string;
}

export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: any;
}
