import { useEffect } from 'react';

const AdSenseInArticle = () => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="w-full my-8 bg-gray-100 py-4 flex justify-center rounded-md">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-YOUR_PUB_ID"
        data-ad-slot="IN_ARTICLE_SLOT_ID"
        data-ad-format="fluid"
        data-ad-layout="in-article"
        data-full-width-responsive="true"
      ></ins>

      {/* Proper <noscript> handling */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <noscript>
              <div style="color: #9CA3AF; font-size: 0.875rem;">
                Ad content not available.
              </div>
            </noscript>
          `,
        }}
      />
    </div>
  );
};

export default AdSenseInArticle;
