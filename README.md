# 🚀 Pari's Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.22-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A modern, responsive, and feature-rich personal portfolio website showcasing skills, projects, and achievements. Built with cutting-edge technologies for optimal performance and user experience.

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ✨ Features

### 🎨 Design & User Experience
- **Modern UI/UX**: Clean, professional, and visually stunning interface
- **Dark/Light Theme**: Seamless theme toggle with system preference detection
- **Fully Responsive**: Optimized for all devices (Desktop, Tablet, Mobile)
- **Smooth Animations**: Beautiful page transitions and micro-interactions using Framer Motion
- **Scroll Animations**: AOS (Animate On Scroll) library for engaging scroll-triggered animations

### 🚀 Performance & Optimization
- **Fast Loading**: Built with Vite for lightning-fast development and production builds
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Optimized Assets**: Compressed images and lazy loading for better performance

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with profile picture and social links
2. **About Me** - Personal background, career goals, and professional journey
3. **Skills** - Categorized technical skills with professional icons (Lucide React)
4. **Projects** - Showcase of work with detailed descriptions and live links
5. **Experience** - Professional timeline with achievements and technologies
6. **Resume** - Downloadable resume and educational background
7. **Certificates & Achievements** - NPTEL certificates and accomplishments with previews
8. **Contact** - Integrated Formspree contact form with social media links

### 🎯 Interactive Features
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Hover Effects**: Interactive elements with engaging hover states
- **Form Validation**: Real-time form validation and error handling
- **Modal Views**: Certificate previews and detailed project views
- **Social Integration**: Direct links to GitHub, LinkedIn, Twitter, and more

---

## 🛠️ Tech Stack

### Core Technologies
- **Frontend Framework**: [React 19.1.1](https://reactjs.org/) - Latest React with hooks
- **Build Tool**: [Vite 7.1.7](https://vitejs.dev/) - Next-generation frontend tooling
- **Styling**: [TailwindCSS 3.4.0](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion 12.23.22](https://www.framer.com/motion/) - Production-ready motion library
- **Icons**: [Lucide React 0.544.0](https://lucide.dev/) - Beautiful & consistent icon toolkit
- **Scroll Animations**: [AOS 2.3.4](https://michalsnik.github.io/aos/) - Animate On Scroll library

### Development Tools
- **Linting**: ESLint with React plugins
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript Types**: Type definitions for React and React DOM

---

## 📦 Installation & Setup

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pari00722/pari-portfolio.git
   cd pari-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The page will automatically reload when you make changes

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📁 Project Structure

```
pari-portfolio/
├── public/
│   ├── images/          # Profile pictures and assets
│   ├── certificates/    # Certificate PDFs
│   └── resume/          # Resume PDF
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.jsx
│   ├── assets/          # Static assets
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Customization Guide

### Personal Information

Update your personal details in the following components:

#### 1. Hero Section (`src/components/Hero.jsx`)
- Update name, title, and introduction text
- Add your profile picture to `public/images/`
- Update social media links

#### 2. About Section (`src/components/About.jsx`)
- Modify personal background and career goals
- Update profile picture path
- Customize the description

#### 3. Skills Section (`src/components/Skills.jsx`)
```javascript
const skillsData = {
  languages: {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'JavaScript', 'C++', 'Java'],
  },
  // Add more categories...
};
```

#### 4. Projects Section (`src/components/Projects.jsx`)
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project.vercel.app',
    image: '/images/project1.jpg',
  },
];
```

#### 5. Experience Section (`src/components/Experience.jsx`)
```javascript
const experienceData = [
  {
    title: 'Your Position',
    company: 'Company Name',
    duration: 'Start Date - End Date',
    location: 'Location',
    type: 'Full-time / Internship',
    description: 'Job description...',
    achievements: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech 1', 'Tech 2'],
  },
];
```

#### 6. Contact Section (`src/components/Contact.jsx`)
- Update email address
- Update location
- Configure Formspree endpoint:
  ```javascript
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formDataToSend,
  });
  ```

#### 7. Resume Section (`src/components/Resume.jsx`)
- Add your resume PDF to `public/resume/`
- Update education details
- Update resume download/view links

### Styling Customization

#### Theme Colors
Edit `tailwind.config.js` to customize color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        400: '#your-color',
        500: '#your-color',
        600: '#your-color',
      },
    },
  },
}
```

#### Custom CSS Classes
Key utility classes used throughout the project:
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Card component style
- `.gradient-text` - Gradient text effect
- `.section-padding` - Consistent section padding
- `.container-custom` - Custom container width

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` triggers a new deployment
   - Preview deployments for pull requests

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Connect repository** and deploy

### Manual Deployment

```bash
# Build for production
npm run build

# The 'dist' folder contains your production-ready files
# Upload this folder to your hosting provider
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Contact Form (Formspree)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Social Links (Optional)
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_TWITTER_URL=https://twitter.com/yourusername
```

### Formspree Setup

1. **Create a Formspree account** at [formspree.io](https://formspree.io)
2. **Create a new form** and get your form endpoint
3. **Update Contact.jsx** with your form endpoint:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     body: formDataToSend,
   });
   ```

---

## 📱 Responsive Design

The portfolio is fully responsive with the following breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are designed mobile-first and scale beautifully across all devices.

---

## 🌙 Dark Mode

Dark mode is implemented with:
- **System Preference Detection**: Automatically detects user's system theme
- **Manual Toggle**: Theme toggle button in the header
- **Local Storage**: Persists user preference across sessions
- **Smooth Transitions**: Seamless theme switching animations

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Port 5173 is already in use
```bash
# Solution: Vite will automatically try another port
# Or specify a different port:
npm run dev -- --port 3000
```

**Issue**: Dependencies not installing
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Build fails
```bash
# Solution: Check for errors and update dependencies
npm run lint
npm update
```

**Issue**: Images not loading
- Ensure images are in the `public/` directory
- Use paths starting with `/` (e.g., `/images/photo.jpg`)
- Check file names match exactly (case-sensitive)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

Please read the [Contributing Guidelines](CONTRIBUTING.md) for details on the code of conduct.

---

## 📞 Contact & Connect

<div align="center">

**Pari Rakesh**

- 📧 **Email**: [parirakesh284@gmail.com](mailto:parirakesh284@gmail.com)
- 💼 **LinkedIn**: [parirakesh](https://www.linkedin.com/in/parirakesh)
- 🐙 **GitHub**: [@Pari00722](https://github.com/Pari00722)
- 🐦 **Twitter**: [@pari_00722](https://x.com/pari_00722)
- 📍 **Location**: Mumbai, India

</div>

---

## 🙏 Acknowledgments

Special thanks to the creators and maintainers of:

- [React](https://reactjs.org/) - The UI library that powers this project
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- [Lucide](https://lucide.dev/) - Beautiful icon library
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [Formspree](https://formspree.io/) - Form handling service

---

## ⭐ Show Your Support

If you found this project helpful or inspiring, please give it a star! ⭐

---

<div align="center">

**Made with ❤️ by Pari Rakesh**

[⬆ Back to Top](#-paris-portfolio-website)

</div>
