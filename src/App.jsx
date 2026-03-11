import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import './App.css';

const sectionFlow = [
  { label: 'About', Component: About },
  { label: 'Resume', Component: Resume },
  { label: 'Skills', Component: Skills },
  { label: 'Projects', Component: Projects },
  { label: 'Experience', Component: Experience },
  { label: 'Achievements', Component: Achievements },
  { label: 'Contact', Component: Contact },
];

function StoryStage({ index, label, Component }) {
  return (
    <div className="story-stage" style={{ '--stage-index': index }}>
      <div className="story-stage-meta">
        <span className="story-stage-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="story-stage-label">{label}</span>
      </div>
      <div className="story-stage-panel">
        <Component />
      </div>
    </div>
  );
}

function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ThemeProvider>
      <div className="story-app min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        {isBooting && <Preloader onComplete={() => setIsBooting(false)} />}
        <Header />
        <main className="story-main">
          <Hero />
          <div className="story-flow">
            {sectionFlow.map((section, index) => (
              <StoryStage
                key={section.label}
                index={index}
                label={section.label}
                Component={section.Component}
              />
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
