import { motion } from 'framer-motion';
import { Code, Wrench, BarChart3, Globe, Database, Star } from 'lucide-react';

const Skills = () => {
        const skillsData = {
          languages: {
            title: 'Programming Languages',
            icon: Code,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'from-blue-500/10 to-blue-600/10',
            borderColor: 'border-blue-500/20',
            hoverColor: 'hover:border-blue-400/40',
            skills: [
              { name: 'Python', proficiency: 90, level: 'Expert' },
              { name: 'Java', proficiency: 85, level: 'Advanced' },
              { name: 'C', proficiency: 80, level: 'Advanced' },
              { name: 'JavaScript', proficiency: 88, level: 'Expert' },
              { name: 'HTML', proficiency: 95, level: 'Expert' },
              { name: 'CSS', proficiency: 90, level: 'Expert' },
              { name: 'SQL', proficiency: 85, level: 'Advanced' },
            ],
          },
          tools: {
            title: 'Tools & Platforms',
            icon: Wrench,
            color: 'from-green-500 to-green-600',
            bgColor: 'from-green-500/10 to-green-600/10',
            borderColor: 'border-green-500/20',
            hoverColor: 'hover:border-green-400/40',
            skills: [
              { name: 'Jupyter Notebook', proficiency: 95, level: 'Expert' },
              { name: 'GitHub', proficiency: 90, level: 'Expert' },
              { name: 'VS Code', proficiency: 92, level: 'Expert' },
              { name: 'Anaconda', proficiency: 85, level: 'Advanced' },
              { name: 'Streamlit', proficiency: 80, level: 'Advanced' },
              { name: 'Vercel', proficiency: 75, level: 'Intermediate' },
            ],
          },
          libraries: {
            title: 'Data Science Libraries',
            icon: BarChart3,
            color: 'from-purple-500 to-purple-600',
            bgColor: 'from-purple-500/10 to-purple-600/10',
            borderColor: 'border-purple-500/20',
            hoverColor: 'hover:border-purple-400/40',
            skills: [
              { name: 'NumPy', proficiency: 90, level: 'Expert' },
              { name: 'Pandas', proficiency: 92, level: 'Expert' },
              { name: 'TensorFlow', proficiency: 75, level: 'Intermediate' },
              { name: 'Matplotlib', proficiency: 88, level: 'Advanced' },
              { name: 'Seaborn', proficiency: 85, level: 'Advanced' },
              { name: 'Scikit-learn', proficiency: 80, level: 'Advanced' },
              { name: 'PyTorch', proficiency: 70, level: 'Intermediate' },
              { name: 'Plotly', proficiency: 78, level: 'Intermediate' },
            ],
          },
          web: {
            title: 'Web Technologies',
            icon: Globe,
            color: 'from-orange-500 to-orange-600',
            bgColor: 'from-orange-500/10 to-orange-600/10',
            borderColor: 'border-orange-500/20',
            hoverColor: 'hover:border-orange-400/40',
            skills: [
              { name: 'ReactJS', proficiency: 85, level: 'Advanced' },
              { name: 'NodeJS', proficiency: 75, level: 'Intermediate' },
              { name: 'Bootstrap', proficiency: 90, level: 'Expert' },
              { name: 'TailwindCSS', proficiency: 88, level: 'Advanced' },
            ],
          },
          databases: {
            title: 'Databases',
            icon: Database,
            color: 'from-red-500 to-red-600',
            bgColor: 'from-red-500/10 to-red-600/10',
            borderColor: 'border-red-500/20',
            hoverColor: 'hover:border-red-400/40',
            skills: [
              { name: 'MongoDB', proficiency: 80, level: 'Advanced' },
              { name: 'MySQL', proficiency: 85, level: 'Advanced' },
            ],
          },
        };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skillsData).map(([categoryKey, categoryData], categoryIndex) => (
            <motion.div
              key={categoryKey}
              variants={skillVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative rounded-2xl p-6 group shadow-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden backdrop-blur-sm`}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-500 dark:from-white to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-500 dark:from-white to-transparent rounded-full blur-2xl"></div>
              </div>

              {/* Category Header */}
              <div className="relative flex items-center space-x-3 mb-6">
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-br ${categoryData.color} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <categoryData.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">
                    {categoryData.title}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {categoryData.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-3 bg-gray-100 dark:bg-dark-700/50 rounded-lg text-gray-800 dark:text-white text-sm font-medium transition-all duration-300 hover:bg-gray-200 dark:hover:bg-dark-600/50 border border-gray-200 dark:border-dark-600/50 hover:border-gray-300 dark:hover:border-gray-500/50 hover:shadow-lg backdrop-blur-sm"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Hover Effects */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${categoryData.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
              
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${categoryData.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-10 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700 rounded-3xl shadow-2xl border border-gray-200 dark:border-dark-600"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-wide">
            Always Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            I'm constantly exploring new technologies and frameworks to stay up-to-date with the latest 
            trends in data science and web development. My learning journey includes online courses, 
            hands-on projects, and contributing to open-source communities.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
