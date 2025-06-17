const AdSenseInArticle = () => {
    return (
      <div className="w-full my-8 bg-gray-100 py-4 flex justify-center rounded-md">
        <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">In-Article Advertisement</span>
          {/* Replace with actual AdSense code */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUB_ID"></script>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-YOUR_PUB_ID"
            data-ad-slot="IN_ARTICLE_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      </div>
    );
  };
  
  export default AdSenseInArticle;