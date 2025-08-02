import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    excerpt?: string;
    content: any;
    publishedDate: string;
    author?: string;
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
    });
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });
    return (response.items[0] as unknown as BlogPost) || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
