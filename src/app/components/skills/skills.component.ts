import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollAnimationDirective } from "../../directives/scroll-animation.directive";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="skills" class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div
            class="text-center mb-16"
            appScrollAnimation
            animationType="fade-in"
            [animationDuration]="800"
          >
            <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--text-primary)">
              My <span class="gradient-text">Skills</span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
            <p class="mt-4 max-w-2xl mx-auto" style="color: var(--text-secondary)">
              Technologies and tools I've mastered over 9+ years of development
              experience
            </p>
          </div>

          <!-- Skills Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend Technologies -->
            <div
              class="skill-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-blue-500/30"
              appScrollAnimation
              animationType="slide-up"
              [animationDuration]="800"
            >
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-2xl">🎨</span>
                </div>
                <h3 class="text-xl font-bold" style="color: var(--text-primary)">Frontend</h3>
              </div>
              <div class="space-y-4">
                <div
                  *ngFor="let skill of frontendSkills"
                  class="flex items-center justify-between"
                >
                  <span style="color: var(--text-secondary)">{{ skill.name }}</span>
                  <div class="flex space-x-1">
                    <div
                      *ngFor="let i of [1, 2, 3, 4, 5]"
                      [class]="
                        i <= skill.level
                          ? 'w-3 h-2 bg-blue-500 rounded-full'
                          : 'w-3 h-2 bg-gray-400/50 rounded-full'
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend Technologies -->
            <div
              class="skill-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-purple-500/30"
              appScrollAnimation
              animationType="slide-up"
              [animationDuration]="800"
              [animationDelay]="100"
            >
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-2xl">⚙️</span>
                </div>
                <h3 class="text-xl font-bold" style="color: var(--text-primary)">Backend</h3>
              </div>
              <div class="space-y-4">
                <div
                  *ngFor="let skill of backendSkills"
                  class="flex items-center justify-between"
                >
                  <span style="color: var(--text-secondary)">{{ skill.name }}</span>
                  <div class="flex space-x-1">
                    <div
                      *ngFor="let i of [1, 2, 3, 4, 5]"
                      [class]="
                        i <= skill.level
                          ? 'w-3 h-2 bg-purple-500 rounded-full'
                          : 'w-3 h-2 bg-gray-400/50 rounded-full'
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools & Others -->
            <div
              class="skill-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-green-500/30"
              appScrollAnimation
              animationType="slide-up"
              [animationDuration]="800"
              [animationDelay]="200"
            >
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-2xl">🛠️</span>
                </div>
                <h3 class="text-xl font-bold" style="color: var(--text-primary)">Tools & Others</h3>
              </div>
              <div class="space-y-4">
                <div
                  *ngFor="let skill of toolsSkills"
                  class="flex items-center justify-between"
                >
                  <span style="color: var(--text-secondary)">{{ skill.name }}</span>
                  <div class="flex space-x-1">
                    <div
                      *ngFor="let i of [1, 2, 3, 4, 5]"
                      [class]="
                        i <= skill.level
                          ? 'w-3 h-2 bg-green-500 rounded-full'
                          : 'w-3 h-2 bg-gray-400/50 rounded-full'
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Skills -->
          <div
            class="mt-16"
            appScrollAnimation
            animationType="fade-in"
            [animationDuration]="800"
            [animationDelay]="300"
          >
            <h3 class="text-2xl font-bold text-center mb-8" style="color: var(--text-primary)">
              Additional Expertise
            </h3>
            <div class="flex flex-wrap justify-center gap-4">
              @for(skill of additionalSkills; track $index){
              <span
                class="bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg"
                style="color: var(--text-secondary)"
              >
                {{ skill }}
              </span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class SkillsComponent {
  frontendSkills = [
    { name: "Angular (20)", level: 5 },
    { name: "TypeScript", level: 5 },
    { name: "JavaScript (ES6+)", level: 5 },
    { name: "HTML5", level: 5 },
    { name: "CSS3/SCSS", level: 5 },
    { name: "Angular Material", level: 5 },
    { name: "RxJS", level: 5 },
    { name: "NgRx", level: 4 },
    { name: "Ionic", level: 4 },
    { name: "PWA", level: 4 },
  ];

  backendSkills = [
    { name: "Node.js", level: 4 },
    { name: "Express.js", level: 4 },
    { name: "NestJS", level: 4 },
    { name: "MySQL", level: 4 },
    { name: "MongoDB", level: 3 },
    { name: "Firebase", level: 4 },
    { name: "Prisma", level: 4 },
    { name: "REST APIs", level: 4 },
    { name: "Swagger", level: 4 },
  ];

  toolsSkills = [
    { name: "Git", level: 5 },
    { name: "Jira", level: 4 },
    { name: "Docker", level: 4 },
    { name: "VS Code", level: 5 },
    { name: "Postman", level: 4 },
    { name: "Webpack", level: 3 },
    { name: "Chrome DevTools", level: 5 },
    { name: "Scrum", level: 4 },
  ];

  additionalSkills = [
    "Responsive Design",
    "Progressive Web Apps (PWA)",
    "ERP Systems Development",
    "Financial Applications",
    "Connected Car Solutions",
    "Automation Tools",
    "QA Systems",
    "Agile/Scrum Methodologies",
    "Code Review & Debugging",
    "State Management (NgRx)",
    "UI/UX Design",
    "Cross-browser Compatibility",
    "Performance Optimization",
    "Dynamic Grid Implementation",
  ];
}
