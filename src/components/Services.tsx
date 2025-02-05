import React from 'react';
import { Cloud, Globe, Code, Server, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure for your business needs'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications and responsive website development'
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Tailored software solutions to streamline your operations'
  },
  {
    icon: Server,
    title: 'Server Management',
    description: '24/7 server monitoring and maintenance services'
  },
  {
    icon: Database,
    title: 'Database Services',
    description: 'Efficient database design and management solutions'
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Comprehensive cybersecurity solutions for your business'
  }
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your digital transformation
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;