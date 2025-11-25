import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ScrollAnimationDirective } from "../../directives/scroll-animation.directive";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="about" class="py-20">
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
              About <span class="gradient-text">Me</span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- About Content -->
            <div class="space-y-6">
              <div
                class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-blue-500/30"
                appScrollAnimation
                animationType="slide-right"
                [animationDuration]="800"
              >
                <h3 class="text-2xl font-bold mb-4" style="color: var(--text-primary)">
                  Hello! I'm Aliakbar Esmaeili
                </h3>
                <p class="leading-relaxed mb-4" style="color: var(--text-secondary)">
                  Senior Software Engineer with 10+ years of experience building
                  scalable Angular applications. Expert in designing reusable
                  components, optimizing front-end performance, and delivering
                  high-quality software that drives business impact. Passionate
                  about modern web technologies and continuously improving team
                  processes.
                </p>
                <p class="leading-relaxed mb-4" style="color: var(--text-secondary)">
                  I specialize in Angular (up to version 18), Node.js, NestJS,
                  Express.js, and have extensive experience with databases
                  including MySQL, MongoDB, and Firebase. My expertise extends
                  to modern development tools like Git, Jira, Docker, and
                  Prisma. I'm familiar with back-end concepts and motivated to
                  work with JavaScript technologies.
                </p>
                <p class="leading-relaxed" style="color: var(--text-secondary)">
                  I have collaborated on a variety of projects including ERP
                  systems, financial applications, delivery platforms, connected
                  car solutions, automation tools, and QA systems. I believe in
                  writing clean, maintainable code and creating user interfaces
                  that provide exceptional user experiences.
                </p>
              </div>

              <!-- Skills Preview -->
              <div
                class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-purple-500/30"
                appScrollAnimation
                animationType="slide-right"
                [animationDuration]="800"
                [animationDelay]="200"
              >
                <h4 class="text-xl font-semibold mb-4" style="color: var(--text-primary)">What I Do</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span style="color: var(--text-secondary)">Frontend Development</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span style="color: var(--text-secondary)">UI/UX Design</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span style="color: var(--text-secondary)">Backend Integration</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span style="color: var(--text-secondary)">Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div
                *ngFor="let stat of stats; let i = index"
                class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-green-500/30"
                appScrollAnimation
                animationType="zoom-in"
                [animationDuration]="600"
                [animationDelay]="i * 100"
              >
                <div class="text-3xl mb-3">{{ stat.icon }}</div>
                <div class="text-3xl font-bold mb-1" style="color: var(--text-primary)">
                  {{ stat.number }}
                </div>
                <div class="text-sm" style="color: var(--text-secondary)">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger("fadeInUp", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(30px)" }),
        animate(
          "0.6s ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
  ],
  styles: [],
})
export class AboutComponent {
  stats = [
    { icon: "💻", number: "9+", label: "Years Experience" },
    { icon: "🚀", number: "50+", label: "Projects Delivered" },
    { icon: "👥", number: "20+", label: "Happy Designer" },
    { icon: "💡", number: "100+", label: "Ideas Implemented" },
  ];
}
