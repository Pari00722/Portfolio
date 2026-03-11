import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  'booting portfolio shell',
  'loading profile modules',
  'mounting projects workspace',
  'warming up data science toolkit',
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.floor(Math.random() * 18) + 8, 100);

        if (next === 100) {
          window.clearInterval(interval);
          window.setTimeout(() => onComplete?.(), 450);
        }

        return next;
      });
    }, 180);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  const visibleLines = Math.max(1, Math.ceil(progress / 25));

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        className="preloader-shell"
      >
        <div className="preloader-noise" />
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="preloader-terminal"
        >
          <div className="preloader-toolbar">
            <div className="preloader-lights" aria-hidden="true">
              <span className="preloader-light preloader-light-close" />
              <span className="preloader-light preloader-light-minimize" />
              <span className="preloader-light preloader-light-zoom" />
            </div>
            <div className="preloader-title">pari@portfolio ~ zsh</div>
          </div>

          <div className="preloader-screen">
            <p className="preloader-line">
              <span className="preloader-prompt">Last login:</span> portfolio session initialized
            </p>

            {bootLines.slice(0, visibleLines).map((line) => (
              <p key={line} className="preloader-line">
                <span className="preloader-prompt">pari@portfolio %</span> {line}
              </p>
            ))}

            <p className="preloader-line preloader-line-active">
              <span className="preloader-prompt">status</span> rendering interface
              <span className="preloader-cursor" />
            </p>

            <div className="preloader-progress-block">
              <div className="preloader-progress-meta">
                <span>compiling visuals</span>
                <span>{progress}%</span>
              </div>
              <div className="preloader-progress-track">
                <motion.div
                  className="preloader-progress-fill"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
