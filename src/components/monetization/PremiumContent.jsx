import Button from '../ui/Button'; 

const PremiumContent = () => {
  const features = [
    'Exclusive AI tool reviews',
    'Early access to new content',
    'Premium tutorials & guides',
    'Member-only discounts',
    'Direct support from our team'
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-2xl mx-auto">
      <div className="p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Premium Membership</h2>
          <p className="mt-2 text-gray-600">Unlock all content and exclusive benefits</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="sm:w-1/2">
            <div className="bg-indigo-50 rounded-lg p-6 h-full">
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-indigo-600">$9</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">Subscribe Monthly</Button>
            </div>
          </div>
          
          <div className="sm:w-1/2">
            <div className="bg-gray-50 rounded-lg p-6 h-full">
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-indigo-600">$90</span>
                <span className="text-gray-500">/year</span>
                <div className="text-sm text-indigo-600 mt-1">Save $18 (2 months free)</div>
              </div>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full mt-6">
                Subscribe Yearly
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Cancel anytime. 7-day money-back guarantee.
        </div>
      </div>
    </div>
  );
};

export default PremiumContent;