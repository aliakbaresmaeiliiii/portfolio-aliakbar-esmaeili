import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollAnimationDirective } from "../../directives/scroll-animation.directive";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="experience" class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div
            class="text-center mb-16"
            appScrollAnimation
            animationType="fade-in"
            [animationDuration]="800"
          >
            <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--text-primary)">
              Work <span class="gradient-text">Experience</span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
            <p class="mt-4" style="color: var(--text-secondary)">
              9+ years of professional development experience
            </p>
          </div>

          <!-- Experience Timeline -->
          <div class="relative">
            <!-- Timeline Line -->
            <div
              class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"
            ></div>

            <!-- Experience Items -->
            <div
              *ngFor="let exp of experiences; let i = index"
              class="relative mb-12 pl-20 hover:scale-105 transition-transform duration-300"
              appScrollAnimation
              [animationType]="i % 2 === 0 ? 'slide-right' : 'slide-left'"
              [animationDuration]="800"
              [animationDelay]="i * 100"
            >
              <!-- Timeline Dot -->
              <div
                class="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4"
                style="border-color: var(--bg-primary)"
              ></div>

              <!-- Experience Card -->
              <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                >
                  <div>
                    <h3 class="text-xl font-bold mb-1" style="color: var(--text-primary)">
                      {{ exp.position }}
                    </h3>
                    <p class="text-blue-400 font-semibold">{{ exp.company }}</p>
                    <p class="text-sm" style="color: var(--text-tertiary)">{{ exp.location }}</p>
                  </div>
                  <span class="text-sm mt-2 md:mt-0" style="color: var(--text-secondary)">{{
                    exp.duration
                  }}</span>
                </div>

                <p class="mb-4" style="color: var(--text-secondary)">{{ exp.description }}</p>

                <!-- Technologies Used -->
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let tech of exp.technologies"
                    class="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Key Achievements -->
                <div class="mt-4">
                  <h4 class="font-semibold mb-2" style="color: var(--text-primary)">
                    Key Achievements:
                  </h4>
                  <ul class="list-disc list-inside space-y-1">
                    <li
                      *ngFor="let achievement of exp.achievements"
                      class="text-sm"
                      style="color: var(--text-secondary)"
                    >
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div
            class="mt-20"
            appScrollAnimation
            animationType="zoom-in"
            [animationDuration]="800"
          >
            <h3 class="text-2xl font-bold text-center mb-8" style="color: var(--text-primary)">
              Education
            </h3>
            <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <h4 class="text-xl font-semibold mb-2" style="color: var(--text-primary)">
                {{ education.degree }}
              </h4>
              <p class="text-blue-400 font-semibold mb-2">
                {{ education.institution }}
              </p>
              <p style="color: var(--text-secondary)">{{ education.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ExperienceComponent {
  experiences = [
    {
      position: "Senior Software Engineer",
      company: "Beed Education Adventures",
      location: "Kuala Lumpur, Malaysia",
      duration: "06/2023 – Present",
      description:
        "Upgraded Angular and Node.js projects to latest versions, improving maintainability and performance.",
      technologies: [
        "Angular 20",
        "Angular Material",
        "Node.js",
        "Express.js",
        "NestJS",
        "Prisma",
        "TypeScript",
        "RxJS",
        "Jest",
        "Cypress",
      ],
      achievements: [
        "Engineered reusable web components and optimized front-end for cross-platform performance",
        "Debugged and resolved complex application issues, reducing client-reported bugs by 30%",
        "Collaborated with clients and team members to design modular, scalable solutions",
      ],
    },
    {
      position: "Senior Front-End Developer",
      company: "Guest Services",
      location: "Istanbul, Turkey",
      duration: "02/2023 – 06/2023",
      description:
        "Developed an innovative online school platform using Agile (Scrum) methodologies.",
      technologies: [
        "Angular 14",
        "Angular Material",
        ".NET",
        "Git",
        "Ngrx",
        "RxJS",
        "Scrum",
        "Jira",
        "Ionic",
      ],
      achievements: [
        "Implemented reusable Angular components and maintained code quality across modules",
        "Debugged and tested new features, improving application reliability",
        "Mentored team members to adopt best practices in front-end development",
      ],
    },
    {
      position: "Senior Front-End Developer",
      company: "Padidar Wellness & Fitness Services",
      location: "Tehran, Iran",
      duration: "01/2022 – 02/2023",
      description:
        "Designed and implemented new features for existing Angular applications.",
      technologies: [
        "Angular 10",
        "Angular Material",
        ".NET",
        "Azure",
        "Ngrx",
        "RxJS",
        "Scrum",
        "Git",
      ],
      achievements: [
        "Provided technical support and conducted code reviews to ensure high-quality standards",
        "Used ag-grid for complex data visualization components",
      ],
    },
    {
      position: "Front-End Developer",
      company: "Winfiniti",
      location: "Istanbul, Turkey",
      duration: "07/2019 – 01/2022",
      description:
        "Architected ERP systems using OOP and Container-Presenter patterns.",
      technologies: [
        "Angular 8",
        "Angular Material",
        "PrimeNG",
        "Kendo UI",
        ".NET Core",
        "Swagger",
      ],
      achievements: [
        "Managed state using RxJS and Angular services, improving maintainability",
        "Developed interactive data grids with ag-grid",
      ],
    },
    {
      position: "Front-End Developer",
      company: "Navaco Information Technology",
      location: "Tehran, Iran",
      duration: "05/2018 – 06/2019",
      description:
        "Developed Angular admin panel for multi-application management using Material Design.",
      technologies: [
        "Angular 7",
        "Angular Material",
        "iOS",
        "Android",
        "PWA",
        "Node.js",
        "Swagger",
      ],
      achievements: [
        "Implemented custom components according to the UI/UX team designs",
        "Integrated web applications with native apps using WebView for seamless data exchange",
      ],
    },
    {
      position: "Front-End Developer",
      company: "Rayan Bahman Pardaz",
      location: "Tehran, Iran",
      duration: "04/2016 – 04/2018",
      description:
        "Built ERP infrastructure and reusable Angular components for a large organization.",
      technologies: [
        "Angular 4",
        "Angular Material",
        "Java Spring",
        "DevExtreme",
        "Bootstrap",
        "Nebular",
      ],
      achievements: [
        "Collaborated with back-end teams on data models and APIs",
        "Refactored large front-end codebase for modularity and reusability",
        "Worked with UI libraries: DevExtreme, Material, Nebular, Bootstrap",
      ],
    },
  ];

  education = {
    degree: "Bachelor of Computer Engineering",
    institution: "Islamic Azad University",
    year: "2019 – 2023",
  };
}
