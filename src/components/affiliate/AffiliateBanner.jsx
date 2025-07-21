import React from "react";
import PropTypes from "prop-types";

const AffiliateBanner = ({ items, className = "", variant = "default" }) => {
  // Variant styles
  const variants = {
    default: "from-blue-50 to-indigo-50",
    premium: "from-gray-50 to-blue-100 border-blue-200",
    minimal: "bg-white border-gray-150",
  };

  return (
    <div className={`space-y-5 ${className}`}>
      {items.map((item, index) => (
        <article
          key={`affiliate-item-${index}`}
          className={`relative overflow-hidden border rounded-lg p-5 bg-gradient-to-r ${variants[variant]} hover:shadow-sm transition-all duration-200 ease-in-out group`}
          aria-labelledby={`affiliate-heading-${index}`}
        >
          {/* Badge for verified items */}
          {item.isVerified && (
            <span className="absolute top-3 right-3 flex items-center px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Verified
            </span>
          )}

          <div className="flex items-start">
            {/* Logo with graceful fallback */}
            <div className="flex-shrink-0 mr-4">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="w-14 h-14 object-contain rounded-lg border border-gray-100 bg-white p-1.5"
                  loading="lazy"
                  width={56}
                  height={56}
                />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3
                id={`affiliate-heading-${index}`}
                className="text-lg font-semibold text-gray-900 leading-tight"
              >
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-gray-600 leading-snug">
                {item.description}
              </p>

              {/* Rating and metadata row */}
              <div className="mt-2 flex items-center flex-wrap gap-x-4 gap-y-1">
                {item.rating && (
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(item.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                )}

                {item.category && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <div className="mt-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
                  aria-label={`Visit ${item.name} website`}
                >
                  Visit Site
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Disclosure text */}
          {item.disclosure && (
            <p className="mt-3 text-xs text-gray-500 leading-tight">
              <span className="inline-block mr-1">*</span>
              {item.disclosure}
            </p>
          )}
        </article>
      ))}
    </div>
  );
};

AffiliateBanner.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      logo: PropTypes.string,
      rating: PropTypes.number,
      disclosure: PropTypes.string,
      isVerified: PropTypes.bool,
      category: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "premium", "minimal"]),
};

export default AffiliateBanner;
