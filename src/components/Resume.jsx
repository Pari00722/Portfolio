import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

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
            Download my resume or view it online to learn more about my projects, experience, and achievements
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

      </motion.div>
    </section>
  );
};

export default Resume;
