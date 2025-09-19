# Aliakbar Esmaeili - Senior Frontend Developer Portfolio

A modern, responsive portfolio website built with Angular 17, showcasing 9+ years of frontend development experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Angular animations
- **Fast**: Optimized for performance with lazy loading and efficient rendering
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## 🛠️ Technologies Used

### Frontend
- **Angular 20** - Latest version of Angular framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Angular Animations** - Smooth transitions and animations
- **SCSS** - Enhanced CSS with variables and mixins

### Development Tools
- **Angular CLI** - Command line interface for Angular
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (version 9 or higher)
- **Angular CLI** (version 17 or higher)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aliakbar/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
ng serve
```

The application will be available at `http://localhost:4200`

### 4. Build for Production

```bash
ng build --configuration production
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Hero section
│   │   ├── about/           # About section
│   │   ├── skills/          # Skills showcase
│   │   ├── experience/      # Work experience
│   │   ├── projects/        # Featured projects
│   │   ├── contact/         # Contact form
│   │   └── footer/          # Footer
│   └── app.component.ts     # Main app component
├── styles.scss              # Global styles
└── index.html               # Main HTML file
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content
Update the content in each component file:
- Personal information in `hero.component.ts`
- Skills in `skills.component.ts`
- Experience in `experience.component.ts`
- Projects in `projects.component.ts`
- Contact information in `contact.component.ts`

### Styling
Global styles can be modified in `src/styles.scss`. Component-specific styles are defined in each component's `styles` array.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify
1. Build the project: `ng build --configuration production`
2. Deploy the `dist/` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install angular-cli-ghpages: `npm install -g angular-cli-ghpages`
2. Build and deploy: `ng build --configuration production --base-href "https://username.github.io/repository-name/"`
3. Deploy: `ngh --dir=dist/aliakbar-portfolio`

## 🔧 Available Scripts

- `ng serve` - Start development server
- `ng build` - Build the project
- `ng test` - Run unit tests
- `ng lint` - Run linting
- `ng generate component <name>` - Generate new component

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Aliakbar Esmaeili**
- Email: aliakbar@example.com
- LinkedIn: [linkedin.com/in/aliakbar](https://linkedin.com/in/aliakbar)
- GitHub: [github.com/aliakbar](https://github.com/aliakbar)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various icon libraries
- Fonts from Google Fonts (Inter & JetBrains Mono)

---

Built with ❤️ using Angular 17
