import React from 'react';
import { useNavigate } from 'react-router-dom';



const technologies = [
  {
    name: 'Frontend',
    description: 'React, TypeScript, Tailwind CSS, Redux, Next.js',
    icon: '🎨',
    path: '/frontend-development'
  },
  {
    name: 'Backend',
    description: 'Node.js, Express, NestJS, GraphQL',
    icon: '⚙️',
    path: '/backend-development'
  },
  {
    name: 'Database',
    description: 'PostgreSQL, MongoDB, Redis, Prisma',
    icon: '🗄️',
    path: '/database-development'
  },
  {
    name: 'DevOps',
    description: 'Docker, Kubernetes, CI/CD, AWS',
    icon: '🚀',
    path: '/devops-development'
  }
];

const FullstackDev= () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Fullstack Development Expertise
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We deliver end-to-end solutions using modern technologies and best practices,
          ensuring scalable and maintainable applications.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleServiceClick(tech.path)}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Our Development Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">1. Planning & Design</h4>
                <p className="text-gray-600">
                  Requirements gathering, architecture design, and project roadmap creation
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">2. Development</h4>
                <p className="text-gray-600">
                  Agile development with regular sprints and continuous integration
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">3. Deployment & Support</h4>
                <p className="text-gray-600">
                  Automated deployment, monitoring, and ongoing maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullstackDev;