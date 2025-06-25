import Link from 'next/link';
import Image from 'next/image';
import { getAllCategoriesWithCount } from '../lib/contentful';

// Helper function to fix Contentful image URLs
const formatImageUrl = (url) => {
  if (!url) return '';
  return url.startsWith('//') ? `https:${url}` : url;
};

// Enhanced badge color system with professional palette
const getBadgeColor = (count) => {
  const colors = [
    'bg-gray-100 text-gray-800',       // 0 tools
    'bg-blue-50 text-blue-600',        // 1 tool
    'bg-emerald-50 text-emerald-600',  // 2-5 tools
    'bg-amber-50 text-amber-600',      // 6-10 tools
    'bg-indigo-50 text-indigo-600'     // 10+ tools
  ];
  
  if (count === 0) return colors[0];
  if (count === 1) return colors[1];
  if (count <= 5) return colors[2];
  if (count <= 10) return colors[3];
  return colors[4];
};

export async function getStaticProps() {
  const categories = await getAllCategoriesWithCount();
  return { props: { categories } };
}

export default function CategoriesPage({ categories }) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          AI Categories Directory
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Explore specialized AI solutions across {categories.length} categories
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group relative p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-start space-x-4">
              {cat.icon && (
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-200">
                  <Image
                    src={formatImageUrl(cat.icon)}
                    alt={cat.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between space-x-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                    {cat.name}
                  </h3>
                  <span className={`${getBadgeColor(cat.count)} text-xs font-medium px-2.5 py-1 rounded-full inline-flex items-center`}>
                    {cat.count}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {cat.description || 'Specialized AI solutions'}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                View category
              </span>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}