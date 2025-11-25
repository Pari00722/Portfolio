# Pari's Portfolio Website

A modern, responsive personal portfolio website built with React, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Built with Vite for optimal loading speeds

## 📱 Sections

1. **Hero Section** - Introduction with call-to-action buttons
2. **About Me** - Personal background and career goals
3. **Skills** - Categorized technical skills with progress indicators
4. **Projects** - Showcase of work with links and descriptions
5. **Resume** - Downloadable resume and experience overview
6. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel / GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pari-portfolio.git
cd pari-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Contact Information**: `src/components/Contact.jsx`
- **Social Links**: `src/components/Footer.jsx`

### Projects

Add your projects in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project.vercel.app',
    category: 'Web Development',
    date: '2024',
    featured: true,
  },
  // Add more projects...
];
```

### Skills

Update skills in `src/components/Skills.jsx`:

```javascript
const skillsData = {
  languages: {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, color: 'bg-yellow-500' },
      // Add more skills...
    ],
  },
  // Add more categories...
};
```

### Resume

1. Add your resume PDF to the `public/resume/` directory
2. Update the resume data in `src/components/Resume.jsx`
3. Update the download link in the `handleDownloadResume` function

## 🎨 Styling

The project uses TailwindCSS for styling. Key custom classes:

- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Card component style
- `.gradient-text` - Gradient text effect
- `.section-padding` - Consistent section padding

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. The GitHub Actions workflow will automatically deploy on push to main branch

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using:

- CSS custom properties
- TailwindCSS dark mode classes
- Local storage for persistence
- System preference detection

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any environment-specific variables:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

### Contact Form

The contact form currently uses a placeholder submission. To make it functional:

1. Set up a form service (Formspree, EmailJS, or your backend)
2. Update the `handleSubmit` function in `src/components/Contact.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/pari-portfolio/issues).

## 📞 Contact

- **Email**: pari@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

---

⭐ If you found this project helpful, please give it a star!