import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'German-standard quality service',
  'Expert team of developers and engineers',
  '24/7 technical support',
  'Customized solutions for your business',
  'Competitive pricing',
  'Regular maintenance and updates'
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We combine German precision with Bangladeshi innovation to deliver exceptional services.
            </p>
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="ml-3 text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;