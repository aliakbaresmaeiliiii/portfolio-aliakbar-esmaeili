import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  stagger,
  query,
} from "@angular/animations";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section
      id="home"
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
        ></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="max-w-4xl mx-auto" [@fadeInStagger]>
          <!-- Profile Image -->
          <div
            class="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500/30 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <img
              src="assets/IMG_4810.JPG"
              alt="Aliakbar Esmaeili"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Main Heading -->
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm
            <span class="gradient-text">Aliakbar Esmaeili</span>
          </h1>

          <!-- Subtitle -->
          <div class="text-xl md:text-2xl text-gray-300 mb-8">
            <span class="flex items-center justify-center gap-2">
              <span class="text-blue-400">⚡</span>
              Senior Software Engineer
            </span>
            <p class="text-lg text-gray-400 mt-2">
              9+ Years of Experience • Selangor, Malaysia
            </p>
          </div>

          <!-- Description -->
          <p
            class="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Senior Software Engineer with 10+ years of experience building
            scalable Angular applications. Expert in designing reusable
            components, optimizing front-end performance, and delivering
            high-quality software that drives business impact. Passionate about
            modern web technologies and continuously improving team processes.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#contact"
              class="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              class="btn-secondary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              routerLink="/resume"
              class="btn-secondary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              📄 Download CV
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center space-x-6">
            <a
              href="https://github.com/aliakbaresmaeiliiii"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-125 hover:rotate-12 transform"
            >
              🐙
            </a>
            <a
              href="https://linkedin.com/in/aliakbaresmaeili"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-125 hover:rotate-12 transform"
            >
              💼
            </a>
            <a
              href="mailto:Aliakbaresmaeili98@gmail.com"
              class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-125 hover:rotate-12 transform"
            >
              📧
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div
          class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div
            class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"
          ></div>
        </div>
      </div>
    </section>
  `,
  animations: [
    trigger("fadeInStagger", [
      transition("* => *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(20px)" }),
            stagger(200, [
              animate(
                "0.6s ease-out",
                style({ opacity: 1, transform: "translateY(0)" })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
  styles: [],
})
export class HeroComponent {}
