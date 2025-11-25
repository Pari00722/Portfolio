import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, GraduationCap, Users, Eye } from 'lucide-react';

const Resume = () => {
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

  const resumeData = {
    education: [
      {
        degree: 'Minor Program',
        field: 'Artificial Intelligence and Data Science',
        institution: 'Indian Institute of Technology Mandi',
        year: 'August 2025 - June 2026',
        description: 'Specialized program focusing on advanced AI concepts, machine learning algorithms, and data science methodologies.',
        gpa: null,
      },
      {
        degree: 'Bachelor of Technology (B.Tech)',
        field: 'Computer Science and Engineering',
        institution: 'Haridwar University',
        year: 'September 2023 - June 2027',
        description: 'Currently pursuing with focus on data structures, algorithms, machine learning, and software engineering.',
        gpa: '8.5/10',
      },
      {
        degree: 'Class XII',
        field: 'Higher Secondary Education',
        institution: 'Sam International School',
        year: '2022 - 2023',
        description: 'Completed higher secondary education with focus on science and mathematics.',
        gpa: '74.5%',
      },
      {
        degree: 'Class X',
        field: 'Secondary Education',
        institution: 'Sam International School',
        year: '2020 - 2021',
        description: 'Completed secondary education with excellent academic performance.',
        gpa: '92%',
      },
    ],
    experience: [
      {
        title: 'Data Science Projects',
        company: 'Personal Projects',
        duration: '2023 - Present',
        description: 'Developed various data science projects including machine learning models, data analysis, and visualization projects.',
        achievements: [
          'Built predictive models using Python and scikit-learn',
          'Created interactive dashboards using Streamlit and Plotly',
          'Analyzed large datasets using Pandas, NumPy, and Matplotlib',
          'Implemented data preprocessing and feature engineering techniques',
        ],
      },
      {
        title: 'Web Development Projects',
        company: 'Personal Portfolio',
        duration: '2023 - Present',
        description: 'Developed responsive web applications using modern technologies and frameworks.',
        achievements: [
          'Built responsive web applications using React and JavaScript',
          'Implemented modern UI/UX designs with TailwindCSS',
          'Created interactive components with Framer Motion animations',
          'Deployed projects using Vercel and GitHub Pages',
        ],
      },
    ],
    achievements: [
      {
        title: 'GitHub Activity',
        description: 'Active contributor with multiple repositories showcasing data science and web development projects',
        year: '2023-Present',
      },
      {
        title: 'Academic Excellence',
        description: 'Consistently maintaining strong academic performance in Computer Science Engineering',
        year: '2022-Present',
      },
      {
        title: 'Technical Skills',
        description: 'Proficient in Python, JavaScript, React, and various data science libraries',
        year: 'Ongoing',
      },
    ],
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/resume/ResumePari (1).pdf';
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Pari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResumeOnline = () => {
    const resumeUrl = '/resume/ResumePari (1).pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-dark-900">
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
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my resume or view it online to learn more about my education, experience, and achievements
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={handleDownloadResume}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6" />
              <span>Download Resume</span>
            </motion.button>
            
            <motion.button
              onClick={handleViewResumeOnline}
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-6 h-6" />
              <span>View Online</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Resume Preview Cards */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div variants={cardVariants} className="card p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-200 dark:border-blue-700 pl-4 pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{edu.degree}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.field}</p>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{edu.year}</p>
                      {edu.gpa && (
                        <p className="text-green-600 dark:text-green-400 text-sm font-medium mt-1">
                          {edu.gpa.includes('%') ? `Score: ${edu.gpa}` : `GPA: ${edu.gpa}`}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to work together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's connect and see how we can collaborate!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              onClick={handleDownloadResume}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
