import { Component, signal } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <section id="projects" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16 md:mb-20 animate-fade-in-up">
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p class="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that blend innovation with exceptional user interfaces
            </p>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            @for (project of projects(); track project.title; let i = $index) {
              <div 
                class="group bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 border border-slate-200 dark:border-slate-700 overflow-hidden"
                [@staggerFadeIn]
                [style.animation-delay]="(i * 100) + 'ms'"
              >
                <!-- Project Image -->
                <div class="h-48 md:h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-6xl md:text-8xl text-white opacity-90 drop-shadow-lg">{{ project.icon }}</span>
                  </div>
                  <div class="absolute top-3 right-3 md:top-4 md:right-4">
                    <div class="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <span class="text-white text-xs md:text-sm font-semibold">New</span>
                    </div>
                  </div>
                </div>

                <!-- Project Content -->
                <div class="p-6 md:p-8">
                  <h3 class="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3 md:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                  <p class="text-slate-600 dark:text-slate-300 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                    {{ project.description }}
                  </p>

                  <!-- Technologies -->
                  <div class="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                    @for (tech of project.technologies; track tech) {
                      <span class="px-3 py-1 md:px-4 md:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-medium border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-800/50">
                        {{ tech }}
                      </span>
                    }
                  </div>

                  <!-- Project Links -->
                  <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
                    @if (project.liveUrl) {
                      <a
                        [href]="project.liveUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                      >
                        Live Demo
                      </a>
                    }
                    @if (project.githubUrl) {
                      <a
                        [href]="project.githubUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl text-center transition-all duration-300 hover:scale-105 text-sm md:text-base"
                      >
                        GitHub
                      </a>
                    }
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- View More Projects -->
          <div class="text-center mt-12 md:mt-16">
            <a
              href="https://github.com/aliakbaresmaeiliiii"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 md:gap-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span>Explore More Projects</span>
              <svg class="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent {
  projects = signal([
    {
      title: "Gahvareh",
      description:
        "A full-stack e-commerce solution with Angular frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["Angular", "Node.js", "MongoDB", "Stripe", "JWT"],
      icon: "🛒",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/aliakbaresmaeiliiii/Gahvareh",
    },
    {
      title: "clinicall",
      description:
        "A collaborative task management application built with React and Express.js. Includes real-time updates, team collaboration features, and project tracking.",
      technologies: ["React", "Express.js", "Socket.io", "MySQL", "Redis"],
      icon: "📋",
      liveUrl: "https://clinicall-demo.com",
      githubUrl: "https://github.com/aliakbaresmaeiliiii/clinicall_ali",
    },
    {
      title: "ali-shopeee",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with modern web technologies.",
      technologies: [
        "Angular",
        "TypeScript",
        "OpenWeather API",
        "Chart.js",
        "PWA",
      ],
      icon: "🌤️",
      liveUrl: "https://weather-dashboard.com",
      githubUrl: "https://github.com/aliakbaresmaeiliiii/ali-shopeee",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my work and skills. Built with Angular and Tailwind CSS, featuring smooth animations and dark theme.",
      technologies: ["Angular", "Tailwind CSS", "TypeScript", "GSAP", "PWA"],
      icon: "💼",
      liveUrl: "https://aliakbar-portfolio.com",
      githubUrl: "https://github.com/aliakbaresmaeiliiii/portfolio",
    },
    {
      title: "visited-place-app",
      description:
        "Real-time chat application with multiple rooms, file sharing, and user presence indicators. Built with NestJS and Socket.io for real-time communication.",
      technologies: ["NestJS", "Socket.io", "MongoDB", "JWT", "Multer"],
      icon: "💬",
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/aliakbaresmaeiliiii/visited-place-app",
    },
    {
      title: "Blog CMS",
      description:
        "A content management system for blogs with rich text editor, SEO optimization, and multi-author support. Features include draft management and analytics.",
      technologies: ["React", "Node.js", "Prisma", "PostgreSQL", "Cloudinary"],
      icon: "📝",
      liveUrl: "https://blog-cms-demo.com",
      githubUrl: "https://github.com/aliakbaresmaeiliiii/3d-effect",
    },
  ]);
}
