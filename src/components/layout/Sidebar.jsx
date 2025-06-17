import NewsletterSignup from '../monetization/NewsletterSignup';
import AffiliateBanner from '../affiliate/AffiliateBanner';

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-3">Popular Categories</h3>
        <ul className="space-y-2">
          <li><a href="/tools/writing" className="text-indigo-600 hover:underline">AI Writing Tools</a></li>
          <li><a href="/tools/image" className="text-indigo-600 hover:underline">AI Image Generators</a></li>
          <li><a href="/tools/code" className="text-indigo-600 hover:underline">AI Coding Assistants</a></li>
          <li><a href="/tools/video" className="text-indigo-600 hover:underline">AI Video Tools</a></li>
        </ul>
      </div>
      
      <NewsletterSignup />
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-3">Sponsored</h3>
        <AffiliateBanner />
      </div>
    </div>
  );
};

export default Sidebar;