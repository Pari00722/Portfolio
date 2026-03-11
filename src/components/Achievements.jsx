import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target, Calendar, ExternalLink, Eye, FileText, X } from 'lucide-react';
import { useState } from 'react';

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [expandedCertificates, setExpandedCertificates] = useState({});

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

  const achievementsData = [
    {
      title: 'Python for Data Science (Elite)',
      description: 'NPTEL certificate in Python for Data Science covering essential libraries and data analysis techniques.',
      year: '2024',
      category: 'Certificate',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      details: [
        'Earned Elite certification for demonstrating proficiency in Python programming',
        'Developed expertise in using Python libraries such as NumPy, Pandas, and Matplotlib',
        'Data manipulation, visualization, and exploratory data analysis skills',
        'Built analytical thinking and coding skills essential for data science applications',
        'Elite Certification Score: 72%',
      ],
      file: '/images/Python for Data Science.jpg',
      preview: '/images/Python for Data Science.jpg',
    },
    {
      title: 'Introduction to Machine Learning',
      description: 'NPTEL certificate in Machine Learning covering fundamental concepts, algorithms, and practical applications.',
      year: '2024',
      category: 'Certificate',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      details: [
        'Gained a strong foundation in the principles and algorithms of Machine Learning',
        'Supervised and unsupervised learning models, classification, regression, clustering',
        'Model evaluation techniques and practical skills in implementing algorithms',
        'Analyzing data-driven outcomes to solve real-world problems',
      ],
      file: '/images/Introduction to Machine Learning_page-0001.jpg',
      preview: '/images/Introduction to Machine Learning_page-0001.jpg',
    },
    {
      title: 'Programming in Java',
      description: 'NPTEL certificate in Java programming covering object-oriented programming, data structures, and algorithms.',
      year: '2024',
      category: 'Certificate',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      details: [
        'Learned core Java programming concepts such as object-oriented design',
        'Data structures, exception handling, inheritance, and multithreading',
        'Strengthened problem-solving and logical reasoning through hands-on coding',
        'Enhanced understanding of Java\'s role in application and software development',
      ],
      file: '/images/Programming in Java_page-0001.jpg',
      preview: '/images/Programming in Java_page-0001.jpg',
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Competition: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      Academic: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      Professional: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      Community: 'bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-300',
      Certificate: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const handleViewCertificate = (filePath, certificateTitle) => {
    console.log('Opening certificate:', filePath);
    console.log('Full URL:', window.location.origin + filePath);
    setSelectedCertificate({ file: filePath, title: certificateTitle });
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const toggleCertificateDetails = (title) => {
    setExpandedCertificates((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-dark-900">
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
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and courses that validate my expertise in various technologies
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl p-8 shadow-2xl border border-indigo-400/20 bg-gradient-to-br from-[#111226] via-black to-[#101827] hover:shadow-[0_24px_70px_rgba(0,0,0,0.5)] transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Achievement Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(achievement.category)}`}>
                        {achievement.category}
                      </span>
                      {achievement.title.includes('Elite') && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          Elite
                        </span>
                      )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {achievement.description}
              </p>

              {/* Certificate Preview */}
              {achievement.file && (
                <div className="mb-6">
                  <div 
                    className="relative bg-white/5 rounded-lg overflow-hidden border border-white/10 cursor-pointer group hover:border-indigo-300/40 transition-all duration-300"
                    onClick={() => handleViewCertificate(achievement.file, achievement.title)}
                  >
                    {/* Certificate Preview */}
                    <div className="relative h-64 bg-black">
                      <img
                        src={achievement.preview}
                        alt={`${achievement.title} Certificate Preview`}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="h-full flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-center p-6">
                          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-black rounded-full flex items-center justify-center">
                            <FileText className="w-12 h-12 text-blue-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            NPTEL Certificate
                          </p>
                          <div className="text-xs text-gray-500">
                            Click to view full certificate
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-5 h-5 text-primary-500" />
                    </div>
                  </div>
                </div>
              )}

              {/* Details */}
              <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Highlights:
                  </h4>
                  {achievement.title.includes('Elite') && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-400/20">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                          Elite Certification Score: 72%
                        </span>
                      </div>
                    </div>
                  )}
                <ul className="space-y-2">
                  {(expandedCertificates[achievement.title]
                    ? achievement.details
                    : achievement.details.slice(0, 3)
                  ).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${achievement.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                {achievement.details.length > 3 && (
                  <button
                    type="button"
                    onClick={() => toggleCertificateDetails(achievement.title)}
                    className="mt-4 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    {expandedCertificates[achievement.title] ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>

              {/* Certificate Action Button */}
              {achievement.file && (
                <div className="mt-6">
                  <motion.button
                    onClick={() => handleViewCertificate(achievement.file, achievement.title)}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white rounded-lg hover:from-indigo-400 hover:to-fuchsia-400 transition-all duration-200 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Full Image</span>
                  </motion.button>
                </div>
              )}

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#090910] rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedCertificate.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <motion.button
                  onClick={() => window.open(selectedCertificate.file, '_blank')}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white rounded-lg hover:from-indigo-400 hover:to-fuchsia-400 transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Certificate in New Tab</span>
                </motion.button>
              </div>

              {/* Certificate Preview */}
              <div className="mb-6">
                <div className="relative bg-black rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={selectedCertificate.file}
                    alt={`${selectedCertificate.title} Certificate`}
                    className="w-full max-h-96 object-contain object-center"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="h-64 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center p-6">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-black rounded-full flex items-center justify-center">
                        <FileText className="w-16 h-16 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedCertificate.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        NPTEL Online Certification
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
