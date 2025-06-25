import { createClient } from 'contentful';

const contentfulConfig = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
};

if (!contentfulConfig.space || !contentfulConfig.accessToken) {
  throw new Error('Contentful space ID and access token are required.');
}

const client = createClient(contentfulConfig);

//
// 🔍 BLOG FUNCTIONS
//
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

//
// 🚀 AI TOOL DIRECTORY FUNCTIONS
//

// ✅ Get all categories with tool counts and icons
export async function getAllCategoriesWithCount() {
  const categoryEntries = await client.getEntries({ content_type: 'category' });

  const toolEntries = await client.getEntries({
    content_type: 'tool',
    select: ['fields.category'],
  });

  const countMap = {};

  toolEntries.items.forEach((tool) => {
    const categoryId = tool.fields.category?.sys?.id;
    if (categoryId) {
      countMap[categoryId] = (countMap[categoryId] || 0) + 1;
    }
  });

  return categoryEntries.items.map((cat) => ({
    name: cat.fields.name,
    slug: cat.fields.slug,
    count: countMap[cat.sys.id] || 0,
    icon: cat.fields.icon?.fields?.file?.url || null,
  }));
}

// ✅ Get full category data with tools and icons
export async function getCategoryBySlug(slug) {
  const categoryRes = await client.getEntries({
    content_type: 'category',
    'fields.slug': slug,
    limit: 1,
  });

  const category = categoryRes.items?.[0];

  if (!category) {
    return { tools: [], category: null, allCategories: [] };
  }

  const toolsRes = await client.getEntries({
    content_type: 'tool',
    'fields.category.sys.id': category.sys.id,
    order: '-fields.rating',
  });

  const allCategories = await getAllCategoriesWithCount();

  return {
    category: {
      name: category.fields.name,
      slug: category.fields.slug,
      icon: category.fields.icon
      ? `https:${category.fields.icon.fields.file.url}`
      : null,
    },
    tools: toolsRes.items.map((tool) => ({
      name: tool.fields.name,
      slug: tool.fields.slug || tool.sys.id, // fallback if slug not added
      logo: tool.fields.logo?.fields?.file?.url || '',
      url: tool.fields.url || `/tools/${tool.fields.slug || tool.sys.id}`,
      rating: tool.fields.rating || 0,
      isSponsored: tool.fields.isSponsored || false,
      description: tool.fields.description || '',
    })),
    allCategories,
  };
}
