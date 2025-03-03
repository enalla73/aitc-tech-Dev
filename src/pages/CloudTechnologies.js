import React, { useState, useEffect } from 'react';
import { FaAws } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const cloudServices = {
  IAAS: ["Virtual Machines", "Storage Services", "Networking", "Load Balancers", "Auto Scaling"],
  PAAS: ["App Hosting", "Database Services", "Middleware", "Development Tools", "Serverless Computing"],
  SAAS: ["Email Services", "CRM Software", "Collaboration Tools", "ERP Systems", "Cloud Storage"],
  OnPremises: ["Data Centers", "Dedicated Servers", "Security & Compliance", "Custom IT Solutions"]
};

const AzureIcon = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" 
    alt="Azure" 
    className="w-14 h-14"
  />
);

const technologies = [
  {
    icon: <FaAws className="text-5xl text-yellow-500" />,
    name: 'AWS',
    description: 'Building scalable cloud solutions with Amazon Web Services'
  },
  {
    icon: <AzureIcon />, 
    name: 'Microsoft Azure',
    description: 'Enterprise-grade cloud computing platform with AI & DevOps support'
  },
  {
    icon: <SiGooglecloud className="text-5xl text-blue-500" />,
    name: 'Google Cloud Platform',
    description: 'Secure, scalable, and intelligent cloud solutions by Google'
  }
];

const CloudServicesDropdown = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (service) => {
    setOpenSection(openSection === service ? null : service);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-center mb-4">Cloud Technologies</h1>
          <p className="text-gray-600 text-center mb-12">
            Creating modern, responsive, and user-friendly web interfaces using the latest technologies
            and best practices.
          </p>

          {/* Cloud Technologies Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
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

          {/* Cloud Services Accordion */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Our Cloud Services</h2>
            <div className="space-y-6">
              {Object.keys(cloudServices).map((service) => (
                <div key={service} className="border rounded-lg">
                  {/* Section Header Button */}
                  <button
                    onClick={() => toggleSection(service)}
                    className="w-full bg-white text-black px-6 py-3 rounded-t-lg hover:bg-gray-200 transition flex justify-between items-center"
                  >
                    {service} 
                    <span>{openSection === service ? "▲" : "▼"}</span>
                  </button>

                  {/* Expandable List */}
                  <div className={`transition-all duration-300 ${openSection === service ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
                    <ul className="py-2 px-4 bg-white-200 rounded-b-lg">
                      {cloudServices[service].map((item, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CloudServicesDropdown;
