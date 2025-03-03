import React, { useEffect } from 'react';
import { FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3Alt, FaJs, FaJava, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiDotnet, SiRuby, SiSpringboot } from 'react-icons/si';

const technologies = [
    {
        icon: <FaJava className="text-5xl text-blue-500" />,
        name: 'Java',
        description: 'Building interactive user interfaces with the most popular frontend library'
    },
    {
        icon: <SiSpringboot className="text-5xl text-red-600" />,
        name: 'Spring Boot',
        description: 'Enterprise-level applications with powerful features and tooling'
    },
    {
        icon: <FaNodeJs className="text-5xl text-green-500" />,
        name: 'Node js',
        description: 'Progressive framework for building modern web applications'
    },
    {
        icon: <FaPython className="text-5xl text-orange-500" />,
        name: 'Python',
        description: 'Modern markup language for structuring web content'
    },
    {
        icon: <SiDotnet className="text-5xl text-blue-600" />,
        name: '.NET',
        description: 'Advanced styling with modern CSS features and frameworks'
    },
    {
        icon: <SiRuby className="text-5xl text-yellow-400" />,
        name: 'RUBY',
        description: 'Building dynamic applications with modern JavaScript and TypeScript'
    }
];

const BackendDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-4">Backend Development</h1>
                    <p className="text-gray-600 text-center mb-12">
                        Building robust, scalable, and secure server-side applications, APIs, and databases using modern technologies and best practices.
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
                        <h2 className="text-2xl font-bold mb-6">Our Backend Development Process</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">1. Requirement Analysis</h3>
                                <p className="text-gray-600">
                                    We begin by understanding your business requirements and designing a backend architecture
                                    that supports scalability, performance, and security.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">2. API Development</h3>
                                <p className="text-gray-600">
                                    We design and build RESTful APIs or GraphQL services to ensure seamless communication
                                    between frontend and backend systems.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">3. Database Design & Integration</h3>
                                <p className="text-gray-600">
                                    We design optimized, scalable databases and integrate them to ensure efficient data
                                    storage and retrieval.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">4. Security & Authentication</h3>
                                <p className="text-gray-600">
                                    We implement secure authentication methods and ensure that all data is encrypted and safe
                                    from unauthorized access.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">5. Testing & Optimization</h3>
                                <p className="text-gray-600">
                                    Thorough testing and performance optimization are done to ensure your backend performs
                                    efficiently under high loads.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">6. Deployment & Maintenance</h3>
                                <p className="text-gray-600">
                                    We deploy your backend services with ease and provide ongoing maintenance and updates to
                                    ensure smooth operation.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BackendDevelopment;