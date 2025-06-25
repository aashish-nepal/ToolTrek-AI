import Link from 'next/link';
import Image from 'next/image';

const isValidImageUrl = (url) => {
  return typeof url === 'string' && (url.startsWith('/') || url.startsWith('http'));
};

const CategoryList = ({ categories, title = "Categories", showIcons = false, showCounts = false }) => {
  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link 
              href={`/category/${category.slug}`} 
              className="flex justify-between items-center text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                {showIcons && category.icon && isValidImageUrl(category.icon) && (
                  <Image 
                    src={category.icon} 
                    alt={category.name}
                    width={20}
                    height={20}
                    className="rounded-sm"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <span>{category.name}</span>
              </div>
              {showCounts && (
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                  {category.count}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <Link 
        href="/categories" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-3 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
      >
        Browse all categories →
      </Link>
    </section>
  );
};

export default CategoryList;