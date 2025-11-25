import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollAnimationDirective } from "../../directives/scroll-animation.directive";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="projects" class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div
            class="text-center mb-16"
            appScrollAnimation
            animationType="fade-in"
            [animationDuration]="800"
          >
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span class="gradient-text">Projects</span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
            <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <!-- Projects Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              *ngFor="let project of projects; let i = index"
              class="glass-effect rounded-xl overflow-hidden card-hover group"
              appScrollAnimation
              animationType="slide-up"
              [animationDuration]="800"
              [animationDelay]="i * 100"
            >
              <!-- Project Image -->
              <div
                class="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center"
              >
                <span class="text-6xl">{{ project.icon }}</span>
              </div>

              <!-- Project Content -->
              <div class="p-6">
                <h3
                  class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>
                <p class="text-gray-300 mb-4 text-sm leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    *ngFor="let tech of project.technologies"
                    class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Project Links -->
                <div class="flex space-x-4">
                  <a
                    *ngIf="project.liveUrl"
                    [href]="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary text-sm px-4 py-2 hover:scale-105 transition-transform duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    *ngIf="project.githubUrl"
                    [href]="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-secondary text-sm px-4 py-2 hover:scale-105 transition-transform duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- View More Projects -->
          <div class="text-center mt-12">
            <a
              href="https://github.com/aliakbaresmaeiliiii"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              View More on GitHub
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent {
  projects = [
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
  ];
}
