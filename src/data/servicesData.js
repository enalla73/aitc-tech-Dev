import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaServer, FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaBootstrap, FaJava, FaPython, FaNodeJs, FaAws, FaMicrosoft } from 'react-icons/fa';
import { SiSpringboot, SiDotnet, SiRuby, SiMysql, SiOracle, SiPostgresql, SiMongodb, SiGooglecloud, SiTypescript } from 'react-icons/si';


export const services = [
  {
    title: 'Frontend Development',
    technologies: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3 className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
      { name: 'React JS', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Angular JS', icon: <FaAngular className="text-red-600" /> }
    ],
    icon: <FaCode className="text-blue-600 text-2xl" />,
    path: '/frontend-development'
  },
  {
    title: 'Backend Development',
    technologies: [
      { name: 'JAVA', icon: <FaJava className="text-red-500" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      { name: 'Python', icon: <FaPython className="text-blue-500" /> },
      { name: 'NodeJS', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'C#', icon: <></> },
      { name: '.NET', icon: <SiDotnet className="text-blue-600" /> },
      { name: 'Ruby', icon: <SiRuby className="text-red-600" /> }
    ],
    icon: <FaServer className="text-green-600 text-2xl" />,
    path: '/backend-development'
  },
  {
    title: 'Cloud Technologies',
    technologies: [
      { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
      { name: 'Azure', icon: <FaMicrosoft className="text-blue-500" /> },
      { name: 'GCP', icon: <SiGooglecloud className="text-yellow-500" /> }
    ],
    icon: <FaCloud className="text-purple-600 text-2xl" />,
    path: '/cloud-Technologies'
  },
  {
    title: 'Database',
    technologies: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'Oracle', icon: <SiOracle className="text-red-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    ],
    icon: <FaDatabase className="text-orange-600 text-2xl" />,
    path: '/database-development'
  },
  {
    title: 'DevOps',
    technologies: [
      { name: 'Git', icon: <FaCode className="text-red-500" /> },
      { name: 'Maven', icon: <FaCode className="text-blue-500" /> },
      { name: 'Ansible', icon: <FaCode className="text-green-500" /> },
      { name: 'Jira', icon: <FaCode className="text-blue-500" /> },
      { name: 'Jenkins', icon: <FaCode className="text-blue-500" /> },
      { name: 'Docker', icon: <FaCode className="text-cyan-500" /> },
      { name: 'Kubernetes', icon: <FaCode className="text-purple-500" /> },
      { name: 'Terraform', icon: <FaCode className="text-green-500" /> },
      { name: 'Grafana', icon: <FaCode className="text-blue-500" /> },
      { name: 'Puppet', icon: <FaCode className="text-red-500" /> },
      { name: 'Chef', icon: <FaCode className="text-blue-500" /> },
      { name: 'Vagrant', icon: <FaCode className="text-purple-500" /> }
    ],
    icon: <FaCode className="text-gray-600 text-2x2" />,
    path: '/devops-development'
  }
];