import { motion } from 'framer-motion';
import { Brain, Code2, GraduationCap, Sparkles } from 'lucide-react';

const aboutCards = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE',
    accent: 'from-cyan-400/30 to-blue-500/10',
    iconColor: 'text-cyan-300',
    description: 'Computer Science and Engineering at Haridwar University.',
  },
  {
    icon: GraduationCap,
    title: 'Minor in AI & DS',
    accent: 'from-fuchsia-400/30 to-violet-500/10',
    iconColor: 'text-fuchsia-300',
    description: 'Artificial Intelligence and Data Science at IIT Mandi.',
  },
  {
    icon: Brain,
    title: 'Passion',
    accent: 'from-sky-400/20 to-cyan-400/10',
    iconColor: 'text-sky-300',
    description: 'Using data science and machine learning to solve practical problems.',
  },
  {
    icon: Code2,
    title: 'Learning',
    accent: 'from-emerald-400/20 to-lime-400/10',
    iconColor: 'text-emerald-300',
    description: 'Practicing DSA in Java while building stronger data science fundamentals.',
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 26, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="about-ambient about-ambient-left" />
      <div className="about-ambient about-ambient-right" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom relative z-10"
      >
        <div className="mb-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/45">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Sparkles className="h-4 w-4 text-cyan-300" />
          </span>
          About
        </div>

        <div className="about-shell">
          <motion.div variants={itemVariants} className="about-photo-panel" data-aos="fade-right">
            <div className="about-photo-frame">
              <img
                src="/images/pari-portfolio.jgp.png"
                alt="Pari portrait"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-black text-6xl font-bold text-white"
              >
                P
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="about-copy-panel" data-aos="fade-left">
            <h2 className="mb-4 text-4xl font-bold leading-none text-white md:text-5xl">
              About Me
            </h2>

            <p className="max-w-4xl text-lg leading-relaxed text-white/88 md:text-[1.45rem]">
              Building data to solve real-world problems and create meaningful impact through
              technology.
            </p>

            <div className="mt-6 space-y-5 text-[0.95rem] leading-[1.72] text-white/78 md:text-[0.98rem]">
              <p>
                I&apos;m a dedicated Computer Science Engineering student at Haridwar University with
                a deep passion for <span className="about-highlight-cyan">Data Science</span> and{' '}
                <span className="about-highlight-blue">Machine Learning</span>. My journey in
                technology is driven by curiosity and the desire to create innovative solutions that
                make a difference.
              </p>

              <p>
                Alongside my B.Tech, I am pursuing a <span className="about-highlight-violet">Minor
                in AI &amp; DS from IIT Mandi</span>. I&apos;m strengthening my foundation in{' '}
                <span className="about-highlight-violet">Data Structures and Algorithms</span> while
                simultaneously exploring advanced machine learning concepts and practical project
                work.
              </p>
            </div>

            <motion.div variants={containerVariants} className="mt-6 grid gap-3.5 md:grid-cols-2">
              {aboutCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`about-glass-card bg-gradient-to-br ${card.accent}`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/25">
                    <card.icon className={`h-4 w-4 ${card.iconColor}`} />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-white/65">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
