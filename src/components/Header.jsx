import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-5"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 sm:px-6 ${
          isScrolled
            ? 'border-white/15 bg-black/42 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
            : 'border-white/10 bg-black/18 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            Pari
          </motion.div>
        </div>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-2 py-1">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-200 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        <motion.button
          className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-black/65 p-3 backdrop-blur-2xl md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 text-left text-sm font-semibold text-gray-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
