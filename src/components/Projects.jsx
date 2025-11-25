import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const getTruncatedDescription = (description, maxLength = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  // TODO: Update these projects with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Pravha - AI-Powered Flood Management System',
      description: 'Pravha is an AI-driven full-stack flood forecasting and emergency response platform designed to save lives, protect communities, and enhance disaster resilience. It integrates real-time sensor data, machine learning, and GIS technology to accurately predict flood occurrences with their timing and severity, while generating automated early warnings in 12 Indian languages. The system also features a real-time SOS network, intelligent evacuation planning, and interactive GIS mapping for effective coordination during emergencies. Built using React, FastAPI, XGBoost, and MongoDB, Pravha offers a comprehensive, scalable, and multilingual flood management solution for proactive disaster preparedness and rapid response.',
      image: '/images/pravha.png',
      technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'XGBoost', 'MongoDB', 'Docker', 'GIS', 'Machine Learning'],
      githubUrl: 'https://github.com/Pari00722/Pravha.git',
      liveUrl: null,
      category: 'Machine Learning',
      date: '2024',
      featured: true,
    },
    {
      id: 2,
      title: 'Data Analysis Dashboard',
      description: 'A comprehensive dashboard for analyzing sales data with interactive visualizations and predictive insights using Python, Pandas, and Streamlit.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'NumPy'],
      githubUrl: 'https://github.com/pari/data-dashboard',
      liveUrl: 'https://data-dashboard-demo.vercel.app',
      category: 'Data Science',
      date: '2024',
      featured: true,
    },
    {
      id: 3,
      title: 'Machine Learning Model',
      description: 'A machine learning model for predicting house prices using various algorithms including Linear Regression, Random Forest, and Neural Networks.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter', 'Pandas'],
      githubUrl: 'https://github.com/pari/house-price-prediction',
      liveUrl: null,
      category: 'Machine Learning',
      date: '2024',
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Data Science': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
      'Machine Learning': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
      'Web Development': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
      'Data Visualization': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="card overflow-hidden group hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 overflow-hidden">
                    {project.image && project.image !== '/api/placeholder/400/250' ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`absolute inset-0 flex items-center justify-center ${project.image && project.image !== '/api/placeholder/400/250' ? 'bg-black/20' : ''}`} style={{display: project.image && project.image !== '/api/placeholder/400/250' ? 'none' : 'flex'}}>
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Code className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h4>
                    <div className="mb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {expandedDescriptions[project.id] 
                          ? project.description 
                          : getTruncatedDescription(project.description, 200)
                        }
                      </p>
                      {project.description.length > 200 && (
                        <button
                          onClick={() => toggleDescription(project.id)}
                          className="mt-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors"
                        >
                          {expandedDescriptions[project.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
