export interface Blog {
  id: string;
  title: string;
  tag: string;
  body: HTMLElement;
  createdAt: Date;
}

const serviceId = process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_ID;
const baseUrl = `https://${serviceId}.microcms.io/api/v1`
const apiKey: string = process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY as string;

const params = (method: string) => {
  return {
    "method": method,
    "headers": {
      "X-MICROCMS-API-KEY": apiKey
    }
  }
}

export const fetchAllBlogs = async (): Promise<Blog[]> => {
  const data = await fetch(`${baseUrl}/blog`, params("GET"))
  .then(res => res.json())
  .catch(() => null);

  return data.contents;
}

export const fetchPostById = async (id: string): Promise<Blog> => {
  const data = await fetch(`${baseUrl}/blog/${id}`, params("GET"))
  .then(res => res.json())
  .catch(() => null);

  return data
}