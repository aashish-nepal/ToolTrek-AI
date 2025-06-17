const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Tools Blog</h3>
              <p className="text-gray-300">
                Your trusted source for AI tools and technology insights.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="/tools" className="text-gray-300 hover:text-white">AI Tools</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="/disclaimer" className="text-gray-300 hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  {/* Facebook icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  {/* Instagram icon */}
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AI Tools Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;