import React, { useEffect } from 'react';
import { FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const technologies = [
  {
    icon: <FaReact className="text-5xl text-blue-500" />,
    name: 'React.js',
    description: 'Building interactive user interfaces with the most popular frontend library'
  },
  {
    icon: <FaAngular className="text-5xl text-red-600" />,
    name: 'Angular',
    description: 'Enterprise-level applications with powerful features and tooling'
  },
  {
    icon: <FaVuejs className="text-5xl text-green-500" />,
    name: 'Vue.js',
    description: 'Progressive framework for building modern web applications'
  },
  {
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    name: 'HTML5',
    description: 'Modern markup language for structuring web content'
  },
  {
    icon: <FaCss3Alt className="text-5xl text-blue-600" />,
    name: 'CSS3',
    description: 'Advanced styling with modern CSS features and frameworks'
  },
  {
    icon: <FaJs className="text-5xl text-yellow-400" />,
    name: 'JavaScript/TypeScript',
    description: 'Building dynamic applications with modern JavaScript and TypeScript'
  }
];

const FrontendDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Frontend Development</h1>
          <p className="text-gray-600 text-center mb-12">
            Creating modern, responsive, and user-friendly web interfaces using the latest technologies
            and best practices.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Our Frontend Development Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. UI/UX Design</h3>
                <p className="text-gray-600">
                  We start with creating intuitive and user-friendly designs that align with your brand
                  and business goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Development</h3>
                <p className="text-gray-600">
                  Using modern frontend technologies to build responsive and performant web applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Testing & Optimization</h3>
                <p className="text-gray-600">
                  Rigorous testing and performance optimization to ensure the best user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Deployment & Maintenance</h3>
                <p className="text-gray-600">
                  Smooth deployment process and ongoing maintenance to keep your application up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;