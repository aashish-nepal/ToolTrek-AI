import Image from 'next/image';
import Button from '../ui/Button'; 

const AffiliateCard = ({ tool }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 relative rounded-md overflow-hidden">
            <Image 
              src={tool.image} 
              alt={tool.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-lg">{tool.name}</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < tool.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">({tool.reviews})</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-indigo-600 font-bold">{tool.price}</span>
            {tool.discount && (
              <span className="text-xs text-gray-500 line-through ml-2">{tool.originalPrice}</span>
            )}
          </div>
          <Button 
            as="a" 
            href={tool.affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm"
          >
            Get Deal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateCard;