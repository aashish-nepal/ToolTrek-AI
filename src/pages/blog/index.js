
import { getAllArticles, getTrendingArticles } from '../../lib/contentful';
import Link from 'next/link';

export async function getStaticProps() {
  const allArticles = await getAllArticles();
  const trendingArticles = await getTrendingArticles();

  return {
    props: {
      allArticles,
      trendingArticles,
    },
    revalidate: 60, // Rebuild every 60 seconds for near real-time updates
  };
}

export default function BlogPage({ allArticles, trendingArticles }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      {/* Main content with all articles */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold mb-6">All Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allArticles.map((post) => (
            <Link href={post.url} className="block border rounded-lg shadow-sm hover:shadow-md transition">
            {/* Now this acts like <a> already */}
            <div className="relative h-48">
              <img
                src={post.image.startsWith('http') ? post.image : `https:${post.image}`}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">{post.title}</h2>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(post.datePublished).toLocaleDateString()}
              </p>
              <p className="text-xs text-gray-500">{post.views.toLocaleString()} views</p>
            </div>
          </Link>
          ))}
        </div>
      </main>  
    </div>
  );
}
