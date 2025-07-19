# William Simonelli - Portfolio Website

A modern, responsive portfolio website built with React.js and Material-UI, showcasing my professional experience, skills, and projects.

## 🌟 Features

- **Modern Design**: Clean, professional design inspired by contemporary portfolio websites
- **Responsive**: Fully responsive design that works on all devices
- **Single Page Application**: Smooth scrolling navigation between sections
- **Timeline Layout**: Interactive timeline showcasing professional experience
- **GitHub Integration**: Dynamically displays projects from GitHub
- **Material-UI**: Consistent design system with beautiful animations
- **Dark Theme**: Modern dark theme with gradient accents
- **SEO Optimized**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript
- **UI Framework**: Material-UI (MUI)
- **Build Tool**: Vite
- **Styling**: CSS3, Material-UI theming
- **Fonts**: Poppins (Google Fonts)
- **Icons**: Material-UI Icons
- **Timeline**: MUI Lab Timeline components

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WilliamSimonelli/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Sections

- **Hero**: Introduction with profile picture and key skills
- **Experience**: Professional timeline with work history and education
- **Skills**: Technical skills organized by categories with progress bars
- **Projects**: Featured projects with GitHub integration
- **Contact**: Contact form and social media links

## 🎨 Customization

### Theme

The theme can be customized in `src/theme.js`. The current theme features:
- Primary color: Cyan (#00D4FF)
- Secondary color: Orange (#FF6B35)
- Dark background with gradient accents
- Poppins font family

### Content

Update personal information in the respective component files:
- `src/components/Hero.jsx` - Personal introduction
- `src/components/Timeline.jsx` - Work experience and education
- `src/components/Skills.jsx` - Technical skills
- `src/components/Projects.jsx` - Featured projects
- `src/components/Contact.jsx` - Contact information

## 📧 Contact

- **Email**: williamsimonelli10@gmail.com
- **GitHub**: [@WilliamSimonelli](https://github.com/WilliamSimonelli)
- **LinkedIn**: [william-simonelli](https://linkedin.com/in/william-simonelli)
- **Location**: São Paulo, Brazil

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by William Simonelli+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
