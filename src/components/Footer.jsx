import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Pari00722',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/parirakesh',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/pari_00722?s=21',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LeetCode',
      icon: Code,
      href: 'https://leetcode.com/u/Pari_007/',
      color: 'hover:text-gray-900 dark:hover:text-white',
      isImage: true,
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:parirakesh284@gmail.com',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
          >
            <span>© {currentYear} Pari. Made using React & TailwindCSS</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.isImage ? (
                  <img 
                    src="/images/leetcode.webp" 
                    alt="LeetCode" 
                    className="w-6 h-6 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <social.icon className="w-6 h-6" />
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
