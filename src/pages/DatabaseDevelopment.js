import React, { useEffect } from 'react';
import { SiMysql, SiPostgresql, SiOracle, SiMongodb } from 'react-icons/si';

const technologies = [
  {
    icon: <SiMysql className="text-5xl text-blue-500" />,
    name: 'SQL',
    description: 'Building interactive user interfaces with the most popular frontend library'
  },
  {
    icon: <SiPostgresql className="text-5xl text-green-500" />,
    name: 'POSTGRESQL',
    description: 'Progressive framework for building modern web applications'
  },
  {
    icon: <SiOracle className="text-5xl text-orange-500" />,
    name: 'ORACLE',
    description: 'Modern markup language for structuring web content'
  },
  {
    icon: <SiMongodb className="text-5xl text-blue-600" />,
    name: 'MONGODB',
    description: 'Advanced styling with modern CSS features and frameworks'
  }
];

const DatabaseDevelopment = () => {
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
            <h2 className="text-2xl font-bold mb-6">Database Management</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Database Design</h3>
                <p className="text-gray-600">
                  Structuring databases efficiently to ensure scalability, performance, and data integrity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Data Storage & Retrieval</h3>
                <p className="text-gray-600">
                  Implementing optimized queries and indexing techniques for fast and efficient data access.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Security & Backup</h3>
                <p className="text-gray-600">
                  Ensuring data protection with encryption, access controls, and regular backups for disaster recovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Performance Optimization</h3>
                <p className="text-gray-600">
                  Using caching, indexing, and normalization techniques to improve database performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">5. Database Maintenance</h3>
                <p className="text-gray-600">
                  Performing routine monitoring, updates, and optimizations to ensure long-term efficiency and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseDevelopment;