import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
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

  const cardVariants = {
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

  const experienceData = [
    {
      title: 'Data Science Intern',
      company: 'ARDENT COMPUTECH PVT LTD',
      duration: 'May 2024 - Jul 2024 · 3 mos',
      location: 'Kolkata, West Bengal, India · Remote',
      type: 'Internship',
      description: 'Worked as a Data Science Intern, contributing to data-driven projects and developing analytical solutions using machine learning and data analytics techniques.',
      achievements: [
        'Developed and implemented data analysis solutions for business intelligence and decision-making.',
        'Applied machine learning algorithms to extract insights from complex datasets.',
        'Collaborated with the team to deliver data-driven solutions and reports.',
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analytics', 'Data Visualization', 'Statistical Analysis'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container-custom"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experiences that have shaped my journey in technology and data science
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line positioned at 1/3 from left */}
          <div className="hidden md:block absolute left-1/3 w-1 h-full bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 w-0.5 h-full bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500"></div>
          
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative mb-16 flex items-start pl-20 md:pl-0 md:flex-row-reverse"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Timeline Icon */}
              <div className="absolute md:relative top-8 md:top-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg z-10 md:ml-8 left-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              {/* Experience Content */}
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-dark-700 relative flex-1 md:ml-16">
                {/* Arrow pointing to timeline - Hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-0 border-r-8 border-r-white dark:border-r-dark-800 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400 space-y-1 sm:space-y-0 mb-3">
                        <div className="flex items-center space-x-1">
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-semibold">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      {/* Type Badge */}
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Experience;
