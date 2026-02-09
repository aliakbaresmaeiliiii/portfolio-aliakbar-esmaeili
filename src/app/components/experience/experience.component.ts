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
      "Led front-end architecture for a large-scale online education platform serving over 50,000 daily active users, balancing rapid delivery with long-term maintainability.",
    technologies: [
      "Angular 20",
      "Angular Material",
      "Node.js",
      "NestJS",
      "Prisma",
      "TypeScript",
      "RxJS",
      "Jest",
      "Cypress",
      "React",
      "Next.js",
      "CI/CD",
    ],
    achievements: [
      "Modernized three legacy Angular applications from v7 to v20, reducing bundle size by up to 45% and improving load times by 35%",
      "Co-developed an internal video editor using React and Next.js, eliminating approximately $20,000 per year in third-party licensing costs",
      "Implemented structured Git workflows and CI/CD pipelines, reducing deployment failures by 60%",
      "Refactored UI text handling to support Angular i18n, preventing LTR/RTL regressions and reducing localization effort",
      "Collaborated with backend teams on microservices-based systems to ensure clean API boundaries and scalable integrations",
    ],
  },
  {
    position: "Senior Front-End Developer",
    company: "Padidar Wellness & Fitness Services",
    location: "Tehran, Iran",
    duration: "05/2019 – 06/2023",
    description:
      "Delivered enterprise-scale Angular solutions, focusing on maintainable architecture and performance improvements for internal platforms.",
    technologies: [
      "Angular",
      "Angular Material",
      "RxJS",
      "NgRx",
      ".NET",
      "Azure",
      "Git",
      "Scrum",
    ],
    achievements: [
      "Delivered Angular features that improved internal workflows and reduced task completion time by 25%",
      "Mentored junior engineers, led code reviews, and enforced maintainable architectural standards",
      "Introduced reusable component libraries and consistent design patterns across applications",
      "Implemented Angular i18n to reduce future localization effort and prevent UI regressions",
    ],
  },
  {
    position: "Front-End Developer",
    company: "Navaco Information Technology",
    location: "Tehran, Iran",
    duration: "05/2016 – 06/2019",
    description:
      "Developed enterprise-scale Angular admin panels for a banking ERP system, supporting complex workflows and cross-platform integration.",
    technologies: [
      "Angular",
      "Angular Material",
      "Node.js",
      "Swagger",
      "PWA",
      "iOS",
      "Android",
      "Git",
    ],
    achievements: [
      "Developed Angular admin panels that reduced manual workload by 30% across banking operations",
      "Designed and maintained shared Angular libraries and wrapper modules",
      "Built custom, reusable UI components in collaboration with UI/UX designers to enforce a consistent design system",
      "Integrated Angular applications with native iOS and Android apps via WebView",
      "Contributed to PWA development, improving offline access and resilience in low-connectivity environments",
    ],
  },
];

 education = {
  degree: "Bachelor of Computer Science",
  institution: "University of Tehran",
  year: "June 2016",
};

 languages = [
  { language: "English", level: "Fluent" },
  { language: "Turkish", level: "Fluent" },
];



}
