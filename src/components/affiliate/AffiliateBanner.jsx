const AffiliateBanner = () => {
    return (
      <div className="border border-gray-200 rounded-md p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h4 className="font-medium text-lg mb-2">Recommended Tool</h4>
        <p className="text-sm text-gray-600 mb-3">
          Try our top-rated AI writing assistant with a special discount for our readers.
        </p>
        <a 
          href="https://example.com/affiliate-link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Get Special Offer
        </a>
      </div>
    );
  };
  
  export default AffiliateBanner;