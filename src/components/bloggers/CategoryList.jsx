import Link from 'next/link';

const CategoryList = ({ categories, title = "Categories" }) => {
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
              <span>{category.name}</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link 
        href="/categories" 
        className="mt-3 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
      >
        Browse all categories →
      </Link>
    </section>
  );
};

export default CategoryList;