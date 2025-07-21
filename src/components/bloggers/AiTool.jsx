// components/AiTool.jsx
import React from 'react';

export default function AiTool({ featuredTools }) {
  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg text-gray-800">Featured AI Tools</h2>
        <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Updated Daily</span>
      </div>

      <ul className="space-y-3" itemScope itemType="http://schema.org/ItemList">
        {featuredTools.length > 0 ? featuredTools.map((tool, index) => (
          <li 
            key={tool.id} 
            className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors duration-200 group" 
            itemProp="itemListElement" 
            itemScope 
            itemType="http://schema.org/ListItem"
          >
            <meta itemProp="position" content={index + 1} />
            <img 
              src={tool.image.startsWith('//') ? `https:${tool.image}` : tool.image} 
              alt={`${tool.name} logo`} 
              className="w-10 h-10 mr-3 object-contain rounded-full bg-gray-100 p-1" 
              loading="lazy"
              width={40}
              height={40}
              itemProp="image"
            />

            <div className="flex-1 min-w-0" itemScope itemType="http://schema.org/SoftwareApplication">
              <div className="flex items-start justify-between">
                <a 
                  href={tool.url} 
                  className="block font-medium text-gray-800 hover:text-indigo-700 truncate"
                  itemProp="url"
                >
                  <span itemProp="name">{tool.name}</span>
                </a>
                {tool.isSponsored && (
                  <span 
                    className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded" 
                    itemProp="isAccessibleForFree" 
                    content="false"
                  >
                    Sponsored
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center">
                <div 
                    className="flex items-center bg-gray-100 rounded-full px-2.5 py-1" 
                    itemProp="aggregateRating" 
                    itemScope 
                    itemType="http://schema.org/AggregateRating"
                  >
                    <meta itemProp="ratingValue" content={tool.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    <span className="text-yellow-500 text-sm font-medium mr-1">
                      {tool.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-3.5 w-3.5 ${i < Math.round(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      </div>
                      </div>

                  <span 
                    className="ml-2 text-xs text-gray-500" 
                    itemProp="applicationCategory"
                  >
                    {tool.category}
                  </span>
                </div>
                <a 
                  href={tool.url} 
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                  aria-label={`Try ${tool.name}`}
                >
                  Try Now →
                </a>
              </div>
              <meta itemProp="description" content={tool.description} />
            </div>
          </li>
        )) : (
          <p className="text-sm text-gray-500">No featured tools available.</p>
        )}
      </ul>

      <a 
        href="/ai-tools" 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        aria-label="View all AI tools"
      >
        View all 200+ AI tools
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  );
}
