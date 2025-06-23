import Link from 'next/link';

const PopularPosts = ({ posts = [], title = "Popular Posts" }) => {
  
  // 🔍 Debug logs — ADD HERE
  console.log("🔥 PopularPosts typeof:", typeof posts);
  console.log("🔥 PopularPosts Array.isArray?", Array.isArray(posts));
  console.log("🔥 PopularPosts full:", posts);

  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">No popular posts available</p>
      </section>
    );
  }

  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
            <Link href={post.url} className="block hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
              <h4 className="font-medium text-gray-800 hover:text-indigo-700 line-clamp-2">
                {post.title}
              </h4>
              {post.views && (
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {post.views.toLocaleString()} views
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <Link 
        href="/blog" 
        className="mt-3 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
      >
        View all articles →
      </Link>
    </section>
  );
};

export default PopularPosts;
