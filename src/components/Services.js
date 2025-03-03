import React, { useState } from 'react';
import { FaLaptopCode, FaCloud, FaGraduationCap, FaUsers, FaTimes, FaAws, FaCode, FaBrain, FaProjectDiagram, FaMobile } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    title: 'Full stack development',
    description: 'End-to-end development solutions for web applications'
  },
  {
    icon: <FaCloud className="text-4xl text-blue-600" />,
    title: 'Cloud Technologies',
    description: 'Cloud infrastructure and deployment solutions'
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: 'Compitative Courses',
    description: 'Comprehensive technology training programs'
  },
  {
    icon: <FaUsers className="text-4xl text-blue-600" />,
    title: 'Internship Projects',
    description: 'Hands-on experience with real-world projects'
  }
];

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleServiceClick = (title) => {
    setActiveModal(title);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'Full stack development':
        return (
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Our full stack development service provides end-to-end solutions for web and mobile applications. 
                We combine front-end and back-end technologies to create robust, scalable applications that meet 
                your business needs.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Technologies We Use</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>React.js</li>
                    <li>Angular</li>
                    <li>Vue.js</li>
                    <li>HTML5/CSS3</li>
                    <li>JavaScript/TypeScript</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>PHP</li>
                    <li>.NET Core</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Database</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>SQL</li>
                    <li>Oracle</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">1. Requirements Analysis</h4>
                  <p className="text-gray-600">
                    We work closely with you to understand your business needs and technical requirements.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">2. Design & Architecture</h4>
                  <p className="text-gray-600">
                    Creating scalable architecture and intuitive user interfaces.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">3. Development</h4>
                  <p className="text-gray-600">
                    Agile development with regular updates and quality assurance.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">4. Testing & Deployment</h4>
                  <p className="text-gray-600">
                    Thorough testing and smooth deployment to production.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'Cloud Technologies':
        return (
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive cloud infrastructure and deployment solutions to help businesses 
                leverage the power of cloud computing for scalability, reliability, and cost-effectiveness.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Cloud Platforms</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <FaAws className="text-5xl text-orange-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Amazon Web Services</h4>
                  <p className="text-gray-600">Complete AWS infrastructure and services</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <FaCloud className="text-5xl text-blue-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Microsoft Azure</h4>
                  <p className="text-gray-600">Enterprise-grade cloud solutions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <FaCloud className="text-5xl text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Google Cloud</h4>
                  <p className="text-gray-600">Innovative cloud technologies</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">DevOps Services</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Infrastructure as Code</h4>
                  <p className="text-gray-600">Automated infrastructure deployment and management</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">CI/CD Implementation</h4>
                  <p className="text-gray-600">Streamlined development and deployment pipelines</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Container Orchestration</h4>
                  <p className="text-gray-600">Docker and Kubernetes solutions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Monitoring & Security</h4>
                  <p className="text-gray-600">Comprehensive monitoring and security solutions</p>
                </div>
              </div>
            </section>
          </div>
        );

        case 'Compitative Courses':
          return (
            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold mb-4">Course Tracks</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our comprehensive training programs are designed to help you master modern technologies 
                  and prepare for a successful career in software development.
                </p>
              </section>
  
              <section>
                <h3 className="text-2xl font-semibold mb-4">CRT Programs</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    {/* <FaCode className="text-4xl text-blue-600 mb-4" /> */}
                    <h4 className="font-semibold mb-3">Aptitude Training</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Arithmetic</li>
                      <li>Logical Reasoning</li>
                      <li>Verbal Ability</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Soft Skills Training</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Communication skills</li>
                      <li>Team work and Collaboration</li>
                      <li>Work Ethic and Professionalism</li>
                      <li>Leadership Skills </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className='font-semibold mb-3'>Mock Interviews</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Self Introduction</li>
                      <li>JAM sessions</li>
                      <li>Group Discussion</li>
                      <li>Coding skills</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
              <h3 className="text-2xl font-semibold mb-4">Course Objectives</h3>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">1.	Aptitude Skills Development</h4>
                  <p className="text-gray-600">Enhance participants' quantitative, logical, and verbal reasoning skills required for aptitude tests.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">2.	Effective Communication</h4>
                  <p className="text-gray-600">Improve participants' communication skills, both verbal and written, for effective interaction in interviews and group discussions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">3.	Problem-Solving Skills</h4>
                  <p className="text-gray-600">Develop participants' ability to analyze and solve problems efficiently, a crucial aspect of technical and HR interviews.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">4.	Group Discussion Strategies</h4>
                  <p className="text-gray-600">Train participants in group discussion techniques, including effective communication, leadership, and collaboration.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">5.	Interview Techniques</h4>
                  <p className="text-gray-600">Equip participants with interview etiquette, body language, and strategies for performing well in technical and HR interviews.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">6.	Resume Building</h4>
                  <p className="text-gray-600">Assist participants in crafting impactful resumes that highlight their skills, achievements, and suitability for prospective roles.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">7.	Mock Interviews</h4>
                  <p className="text-gray-600">Conduct mock interviews to provide participants with practical experience and constructive feedback for improvement.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">8.	Confidence Building</h4>
                  <p className="text-gray-600">Boost participants' confidence and self-esteem to face campus recruitment challenges with a positive mindset.</p>
                </div>
              </div>
            </section>

  
            </div>
          );

      case 'Internship Projects':
        return (
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4">Real-World Project Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain hands-on experience working on real projects with our industry partners. 
                Our internship program provides practical exposure to modern development practices 
                and technologies.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Project Areas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <FaProjectDiagram className="text-4xl text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Web Applications</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>E-commerce Platforms</li>
                    <li>Content Management Systems</li>
                    <li>Social Media Applications</li>
                    <li>Enterprise Solutions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <FaMobile className="text-4xl text-green-600 mb-4" />
                  <h4 className="font-semibold mb-2">Mobile Development</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>iOS Applications</li>
                    <li>Android Applications</li>
                    <li>Cross-platform Apps</li>
                    <li>Progressive Web Apps</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">Program Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Industry Experience</h4>
                  <p className="text-gray-600">Work on real client projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mentorship</h4>
                  <p className="text-gray-600">Guidance from senior developers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Portfolio Building</h4>
                  <p className="text-gray-600">Create impressive project portfolio</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Job Opportunities</h4>
                  <p className="text-gray-600">Potential for full-time positions</p>
                </div>
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{activeModal}</h2>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              {renderModalContent()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;