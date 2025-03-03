import React, { useEffect } from 'react';
import { FaDocker, FaJenkins, FaGitlab, FaGitAlt } from 'react-icons/fa';
import { SiAnsible, SiApachekafka, SiApachemaven, SiChef, SiGrafana, SiHelm, SiKubernetes, SiNginx, SiPuppet, SiSelenium, SiTerraform, SiVagrant, SiYaml } from 'react-icons/si';
import { DiJira } from 'react-icons/di';

const technologies = [
  {
    icon: <FaGitAlt className="text-5xl text-orange-400" />,
    name: 'GIT',
    description: 'A distributed version control system for tracking changes in code.'
  },
  {
    icon: <FaGitlab className="text-5xl text-orange-500" />,  
    name: 'GITLAB',
    description: 'A DevOps platform that provides Git repositories, CI/CD pipelines, and collaboration tools.'
  },
  {
    icon: <SiApachemaven className="text-5xl text-red-400" />,
    name: 'Maven',
    description: 'A build automation and dependency management tool primarily for Java projects.'
  },
  {
    icon: <SiVagrant className="text-5xl text-blue-400" />,
    name: 'Vagrent',
    description: 'A tool for managing and provisioning virtualized development environments.'
  },
  {
    icon: <SiNginx className="text-5xl text-yellow-400" />,
    name: 'Nginx',
    description: 'A high-performance web server, reverse proxy, and load balancer.'
  },
  {
    icon: <FaDocker className="text-5xl text-black-600" />,
    name: 'Docker',
    description: 'A containerization platform for developing, shipping, and running applications in isolated environments.'
  },
  {
    icon: <FaJenkins className="text-5xl text-green-500" />,
    name: 'Jenkins',
    description: 'An open-source automation server used for CI/CD pipelines.'
  },
  {
    icon: <DiJira className="text-5xl text-blue-400" />,
    name: 'Jira',
    description: 'A project management tool used for issue tracking and agile workflows'
  },
  {
    icon: <SiAnsible className="text-5xl text-orange-500" />,
    name: 'Ansible',
    description: 'A configuration management tool for automating infrastructure provisioning and application deployment.'
  },
  {
    icon: <SiYaml className="text-5xl text-blue-600" />,
    name: 'YAML',
    description: 'A human-readable data serialization format used in configuration files and automation tools.'
  },
  {
    icon: <SiKubernetes className="text-5xl text-blue-400" />,
    name: 'Kubernetes',
    description: 'A container orchestration platform for managing and scaling containerized applications.'
  },
  {
    icon: <SiHelm className="text-5xl text-blue-400" />,
    name: 'Helm',
    description: 'A package manager for Kubernetes that simplifies application deployment'
  },
  {
    icon: <SiTerraform className="text-5xl text-skyblue-400" />,
    name: 'Terraform',
    description: 'An infrastructure as code (IaC) tool for provisioning and managing cloud resources.'
  },
  {
    icon: <SiGrafana className="text-5xl text-yellow-400" />,
    name: 'Grafana',
    description: 'A visualization and monitoring tool for time-series data from various sources.'
  },
  {
    icon: <SiApachekafka className="text-5xl text-yellow-400" />,
    name: 'Kafka',
    description: 'A distributed event streaming platform used for real-time data processing.'
  },
  {
    icon: <SiChef className="text-5xl text-yellow-400" />,
    name: 'Chef',
    description: 'A configuration management tool for automating infrastructure as code.'
  },
  {
    icon: <SiPuppet className="text-5xl text-yellow-400" />,
    name: 'Puppet',
    description: 'A configuration management tool for automating server provisioning and configuration.'
  },
  {
    icon: <SiSelenium className="text-5xl text-green-400" />,
    name: 'Selenium',
    description: 'A browser automation framework for testing web applications.'
  }
];

const DevopsDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Devops Development</h1>
          <p className="text-gray-600 text-center mb-12">
            Deveopling a methodology, integrate development (Dev) and operations (Ops) to automate, streamline, and accelerate the software development lifecycle (SDLC) through continuous integration, continuous delivery (CI/CD), infrastructure as code (IaC), monitoring, and collaboration.
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
            <h2 className="text-2xl font-bold mb-6">Our DevOps Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Planning & Collaboration</h3>
                <p className="text-gray-600">
                  Aligning development and operations teams with clear objectives, workflows, and automation strategies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Continuous Integration (CI)</h3>
                <p className="text-gray-600">
                  Automating code integration and testing to detect and fix issues early in the development cycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Continuous Deployment (CD)</h3>
                <p className="text-gray-600">
                  Ensuring seamless and automated deployment processes for faster and reliable software releases.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Infrastructure as Code (IaC)</h3>
                <p className="text-gray-600">
                  Managing infrastructure using code for consistency, scalability, and automation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">5. Monitoring & Logging</h3>
                <p className="text-gray-600">
                  Continuously monitoring system performance, collecting logs, and analyzing metrics for proactive issue resolution.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">6. Security & Compliance</h3>
                <p className="text-gray-600">
                  Implementing security best practices, vulnerability scanning, and compliance checks throughout the pipeline.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">7. Automation & Optimization</h3>
                <p className="text-gray-600">
                  Automating repetitive tasks, optimizing performance, and continuously improving processes for efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevopsDevelopment;