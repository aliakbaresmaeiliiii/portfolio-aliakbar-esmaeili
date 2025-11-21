import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-dark-800/50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
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
                class="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <h3 class="text-2xl font-bold text-white mb-4">
                  Hello! I'm Aliakbar Esmaeili
                </h3>
                <p class="text-gray-300 leading-relaxed mb-4">
                  Senior Software Engineer with 10+ years of experience building
              scalable Angular applications. Expert in designing reusable
              components, optimizing front-end performance, and delivering
              high-quality software that drives business impact. Passionate
              about modern web technologies and continuously improving team
              processes.
                </p>
                <p class="text-gray-300 leading-relaxed mb-4">
                  I specialize in Angular (up to version 18), Node.js, NestJS,
                  Express.js, and have extensive experience with databases
                  including MySQL, MongoDB, and Firebase. My expertise extends
                  to modern development tools like Git, Jira, Docker, and
                  Prisma. I'm familiar with back-end concepts and motivated to
                  work with JavaScript technologies.
                </p>
                <p class="text-gray-300 leading-relaxed">
                  I have collaborated on a variety of projects including ERP
                  systems, financial applications, delivery platforms, connected
                  car solutions, automation tools, and QA systems. I believe in
                  writing clean, maintainable code and creating user interfaces
                  that provide exceptional user experiences.
                </p>
              </div>

              <!-- Skills Preview -->
              <div
                class="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <h4 class="text-xl font-semibold text-white mb-4">What I Do</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-300">Frontend Development</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-gray-300">UI/UX Design</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-gray-300">Backend Integration</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span class="text-gray-300">Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div
                *ngFor="let stat of stats; let i = index"
                class="glass-effect p-6 rounded-xl text-center card-hover"
                [style.animation-delay]="i * 0.1 + 's'"
              >
                <div class="text-3xl mb-3">{{ stat.icon }}</div>
                <div class="text-3xl font-bold text-white mb-1">
                  {{ stat.number }}
                </div>
                <div class="text-gray-400 text-sm">{{ stat.label }}</div>
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
