import Link from 'next/link';

const RecentComments = ({ comments, title = "Recent Comments" }) => {
  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
            <Link href={comment.url} className="block hover:bg-gray-50 p-2 rounded-md transition-colors duration-200">
              <p className="text-gray-600 text-sm italic line-clamp-2">"{comment.text}"</p>
              <div className="flex items-center mt-2">
                <span className="text-indigo-700 text-sm font-medium">— {comment.author}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-xs text-gray-500">
                  {comment.date || '2 days ago'}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link 
        href="/community" 
        className="mt-3 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
      >
        Join the discussion →
      </Link>
    </section>
  );
};

export default RecentComments;