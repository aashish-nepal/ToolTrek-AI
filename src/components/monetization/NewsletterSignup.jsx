import { useState } from 'react';
import Button from '../ui/Button'; // Add this import

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-2">Join Our AI Community</h3>
      <p className="mb-4">Get the latest AI tools, tips, and exclusive content delivered to your inbox weekly.</p>
      
      {isSubscribed ? (
        <div className="bg-white text-indigo-600 p-3 rounded-md text-center">
          Thank you for subscribing! Please check your email to confirm.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <Button type="submit" className="whitespace-nowrap">
            Subscribe Now
          </Button>
        </form>
      )}
      
      <p className="text-xs mt-3 opacity-80">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;