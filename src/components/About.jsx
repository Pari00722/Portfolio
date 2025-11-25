import { motion } from 'framer-motion';
import { GraduationCap, Target, Lightbulb, Code2 } from 'lucide-react';

const About = () => {
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

  const aboutPoints = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering, focusing on data structures, algorithms, and machine learning fundamentals.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      icon: Target,
      title: 'Career Goal',
      description: 'Aspiring to become a Data Scientist, passionate about extracting meaningful insights from complex datasets and building predictive models.',
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      icon: Lightbulb,
      title: 'Passion',
      description: 'Fascinated by the intersection of technology and data, always eager to learn new tools and techniques in the rapidly evolving field of data science.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    },
    {
      icon: Code2,
      title: 'Skills',
      description: 'Proficient in Python and various data science libraries. Experienced with machine learning frameworks and data visualization tools.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-800">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, aspirations, and what drives my passion for data science
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-16">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6" data-aos="fade-right" data-aos-delay="200">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm Pari, a passionate Computer Science Engineering student with a deep fascination 
                for the world of data science. My journey began with curiosity about how data can tell stories 
                and drive decision-making in our increasingly digital world.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my B.Tech degree, I've been immersing myself in the fundamentals of 
                computer science while developing a strong foundation in mathematics, statistics, and 
                programming. My coursework has given me hands-on experience with various programming 
                languages and tools essential for data analysis and machine learning.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                What excites me most about data science is its potential to solve real-world problems 
                through intelligent analysis and predictive modeling. I'm particularly drawn to machine 
                learning algorithms, data visualization, and the process of transforming raw data into 
                actionable insights.
              </p>
            </div>

            {/* Key Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <motion.div
              className="w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-dark-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/pari-portfolio.jgp.png"
                alt="Pari - Aspiring Data Scientist"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold" style={{display: 'none'}}>
                P
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {aboutPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-6 text-center group"
            >
              <div className={`w-16 h-16 ${point.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <point.icon className={`w-8 h-8 ${point.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
