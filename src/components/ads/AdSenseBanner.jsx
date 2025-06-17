import React, { useEffect } from 'react';

const AdSenseBanner = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <div className="w-full bg-gray-100 py-4 flex justify-center">
      <div className="container mx-auto px-4 text-center">
        <span className="text-gray-500 block mb-2">Advertisement</span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1234567890123456" // Replace with your actual publisher ID
          data-ad-slot="1234567890"               // Replace with your actual ad slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export default AdSenseBanner;
