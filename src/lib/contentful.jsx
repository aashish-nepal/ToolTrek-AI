import { createClient } from 'contentful';

const contentfulConfig = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
};

if (!contentfulConfig.space || !contentfulConfig.accessToken) {
  throw new Error('Contentful space ID and access token are required.');
}

const client = createClient(contentfulConfig);

// 🔍 Get all blog posts
export async function getAllArticles() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.datePublished',
  });

  return entries.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    url: `/blog/${item.fields.slug}`,
    image: item.fields.coverImage?.fields?.file?.url || '',
    views: item.fields.views || 0,
    datePublished: item.fields.datePublished,
    author: item.fields.author || 'Unknown',
    body: item.fields.body || '', 
  }));
}

// 🔥 Get only trending articles (isPopular = true)
export async function getTrendingArticles() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.isPopular': true,
    order: '-fields.views',
    limit: 3,
  });

  return entries.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    url: `/blog/${item.fields.slug}`,
    image: item.fields.coverImage?.fields?.file?.url || '',
    views: item.fields.views || 0,
    datePublished: item.fields.datePublished,
    author: item.fields.author || 'Unknown',
  }));
}
