import { DiscussionEmbed } from 'disqus-react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Community = () => {
  const router = useRouter();
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;
  
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/community`,
    identifier: 'community-page',
    title: 'Community Discussions',
    language: 'en',
  };

  useEffect(() => {
    // This will ensure Disqus handles any authentication callbacks
    if (typeof window !== 'undefined' && window.location.hash.includes('#')) {
      window.DISQUS?.reset({
        reload: true,
        config: disqusConfig
      });
    }
  }, [disqusConfig]);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6">Community Discussions</h1>
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <DiscussionEmbed 
          shortname={disqusShortname} 
          config={disqusConfig}
        />
      </div>
    </div>
  );
};

export default Community;