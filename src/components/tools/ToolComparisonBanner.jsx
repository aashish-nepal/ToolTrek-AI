import React from 'react';
import Link from 'next/link';

const ToolComparisonBanner = ({ 
  title = "AI Tool Comparison", 
  url = "/comparisons", 
  ctaText = "Compare Now",
  badgeText = "New"
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg text-gray-800">
          {title}
        </h3>
        {badgeText && (
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {badgeText}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-4">
        See how leading AI tools stack up against each other in our detailed comparison.
      </p>
      <Link 
        href={url}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default ToolComparisonBanner;