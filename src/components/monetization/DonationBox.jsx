import { useState } from 'react';
import Button from '../ui/Button';

const DonationBox = () => {
  const [amount, setAmount] = useState('5');
  const [customAmount, setCustomAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation amount:', customAmount || amount);
    console.log('Message:', message);
    // Reset form
    setAmount('5');
    setCustomAmount('');
    setMessage('');
    alert('Thank you for your support!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Support Our Work</h3>
      <p className="text-gray-600 mb-6">
        Your donation helps us create more quality content about AI tools and technology.
        Every contribution makes a difference!
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {['3', '5', '10', '20', '50', '100'].map((value) => (
            <label key={value} className="relative">
              <input
                type="radio"
                name="amount"
                value={value}
                checked={amount === value}
                onChange={handleAmountChange}
                className="absolute opacity-0 w-0 h-0"
              />
              <div className={`py-2 px-4 text-center rounded-md border cursor-pointer transition-colors ${
                amount === value 
                  ? 'bg-indigo-100 border-indigo-500 text-indigo-700' 
                  : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
              }`}>
                ${value}
              </div>
            </label>
          ))}
        </div>
        
        <div className="mb-4">
          <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">
            Or enter a custom amount
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="customAmount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-2 border-gray-300 rounded-md"
              placeholder="0.00"
              min="1"
              step="1"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Optional message
          </label>
          <textarea
            id="message"
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Leave us an encouraging note..."
          />
        </div>
        
        <Button type="submit" className="w-full">
          Donate Now
        </Button>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          Secure payment processing via Stripe. Your information is safe with us.
        </div>
      </form>
    </div>
  );
};

export default DonationBox;