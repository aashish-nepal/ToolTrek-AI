import { useState } from 'react';
import Button from '../ui/Button';

const NewsletterSignup = ({ 
  title = "Stay Updated", 
  description = "Subscribe to our newsletter for the latest news and updates.", 
  className = '',
  buttonVariant = 'primary',
  buttonSize = 'medium',
  successMessage = "Thank you for subscribing! Check your email for confirmation."
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Simple email validation
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setError(null);
  };

  return (
    <section className={`p-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-sm ${className}`}>
      <div className="flex flex-col h-full text-white">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-base mb-4">{description}</p>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm mb-4">
            {error}
          </div>
        )}
        
        {isSuccess ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-md text-sm">
              {successMessage}
            </div>
            <Button
              onClick={handleReset}
              variant="outline"
              size={buttonSize}
              fullWidth
              className="justify-center"
            >
              Subscribe Another Email
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base disabled:opacity-70 text-gray-900"
                aria-describedby={error ? "email-error" : undefined}
              />
            </div>
            <Button
              type="submit"
              variant={buttonVariant}
              size={buttonSize}
              loading={isSubmitting}
              disabled={isSubmitting}
              fullWidth
              className="justify-center"
            >
              Subscribe Now
            </Button>
          </form>
        )}
        <p className="text-xs mt-3 opacity-80">
        We respect your privacy. Unsubscribe at any time.
      </p>
        
      </div>
    </section>
  );
};

export default NewsletterSignup;