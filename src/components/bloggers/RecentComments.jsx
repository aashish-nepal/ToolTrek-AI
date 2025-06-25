
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ✅ Helper to fix avatar URL
const formatAvatarUrl = (url) => {
  if (!url) return '/default-avatar.png'; // Fallback image
  if (url.startsWith('//')) return 'https:' + url;
  return url;
};


const RecentComments = ({
  title = 'Recent Comments',
  showAvatars = true,
  showTimestamps = true,
}) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Fetch recent comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/recent-comments?limit=3');
        const data = await res.json();
        setComments(data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching comments:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  // ✅ Handle Disqus OAuth (if used)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleAuthCallback = async () => {
        if (window.location.hash.includes('access_token')) {
          setIsLoading(true);
          try {
            const hashParams = new URLSearchParams(
              window.location.hash.substr(1)
            );
            const accessToken = hashParams.get('access_token');

            const res = await fetch(
              `/api/recent-comments?access_token=${accessToken}&limit=3`
            );
            const data = await res.json();
            setComments(data.slice(0, 3));

            window.history.replaceState(null, null, ' ');
          } catch (err) {
            console.error('Error fetching user comments:', err);
          } finally {
            setIsLoading(false);
          }
        }
      };

      handleAuthCallback();
    }
  }, []);

  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-4 text-gray-800">{title}</h3>

      {isLoading ? (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-sm text-gray-500">No comments yet.</p>
            ) : (
              comments.map((comment) => (
                <li
                  key={comment.id}
                  className="border-b border-gray-100 pb-3 last:border-0 last:pb-0 flex gap-3"
                >
                  {showAvatars && (
                    <div className="flex-shrink-0">
                      <Image
                        src={formatAvatarUrl(comment.author.avatar)}
                        alt={comment.author.name}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <Link
                      href={comment.url}
                      className="block hover:bg-gray-50 p-2 rounded-md transition"
                    >
                      <p className="text-gray-600 text-sm italic line-clamp-2">
                        "{comment.text}"
                      </p>

                      <div className="flex items-center mt-2">
                        <span className="text-indigo-700 text-sm font-medium">
                          — {comment.author.name}
                        </span>
                        {showTimestamps && (
                          <>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                              {new Date(comment.date).toLocaleDateString()}
                            </span>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </li>
              ))
            )}
          </ul>

          <Link
            href="/community#disqus_thread"
            className="mt-3 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            Join the discussion →
          </Link>
        </>
      )}
    </section>
  );
};

export default RecentComments;
