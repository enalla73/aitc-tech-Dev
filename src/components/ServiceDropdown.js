import React from 'react';

const ServiceDropdown = ({
  services,
  onServiceClick,
  show,
}) => {
  if (!show) return null;

  return (
    <div
    className="absolute right-0 mt-1 max-w-[1000px] w-full sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px] bg-white rounded-lg shadow-xl border border-gray-100 z-50"
    style={{ 
        marginTop: '15px'
      }}
    >
      <div className="grid grid-cols-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 hover:bg-gray-50/80 transition-all duration-500 cursor-pointer border-r last:border-r-0 border-gray-100"
            onClick={() => onServiceClick(service.path)}
          >
            <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-100">
              {service.icon}
              <h3 className="font-bold text-lg text-gray-800">{service.title}</h3>
            </div>
            <div className="space-y-3">
              {service.technologies.map((tech, techIndex) => (
                <div 
                  key={techIndex} 
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-200">
                    {tech.icon} 
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDropdown;