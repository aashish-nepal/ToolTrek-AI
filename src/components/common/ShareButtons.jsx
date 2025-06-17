const ShareButtons = ({ url, title }) => {
    const shareText = `Check out this article: ${title}`;
    
    const shareLinks = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };
  
    return (
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Share:</span>
        <a 
          href={shareLinks.twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
          aria-label="Share on Twitter"
        >
          {/* Twitter icon */}
        </a>
        <a 
          href={shareLinks.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
          aria-label="Share on Facebook"
        >
          {/* Facebook icon */}
        </a>
        <a 
          href={shareLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800"
          aria-label="Share on LinkedIn"
        >
          {/* LinkedIn icon */}
        </a>
      </div>
    );
  };
  
  export default ShareButtons;