import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser, CommonModule } from "@angular/common";
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
import { Subject, takeUntil } from "rxjs";
import { ScrollService } from "../../services/scroll.service";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section
      id="home"
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
      [style.opacity]="sectionOpacity"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          [style.transform]="'translateY(' + parallaxOffset * 0.3 + 'px)'"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
          [style.transform]="'translateY(' + parallaxOffset * 0.5 + 'px)'"
        ></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="max-w-4xl mx-auto" [@fadeInStagger]>
          <!-- Profile Image with Dynamic Positioning -->
          <div
            class="profile-image-container mb-8"
            [style.transform]="imageTransform"
            [style.transition]="'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'"
          >
            <div
              class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500/30 hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20"
            >
              <img
                src="assets/IMG_4810.JPG"
                alt="Aliakbar Esmaeili"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Main Heading -->
          <h1
            class="text-5xl md:text-7xl font-bold mb-6"
            style="color: var(--text-primary)"
          >
            Hi, I'm
            <span class="gradient-text">Aliakbar Esmaeili</span>
          </h1>

          <!-- Subtitle -->
          <div
            class="text-xl md:text-2xl mb-8"
            style="color: var(--text-secondary)"
          >
            <span class="flex items-center justify-center gap-2">
              <span class="text-blue-400">⚡</span>
              Senior Software Engineer
            </span>
            <p class="text-lg mt-2" style="color: var(--text-tertiary)">
              9+ Years of Experience • Selangor, Malaysia
            </p>
          </div>

          <!-- Description -->
          <p
            class="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style="color: var(--text-secondary)"
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
              class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-3"
            >
              📧 Get In Touch
            </a>
            <a
              href="#projects"
              class="bg-gray-700 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-3"
            >
              💼 View My Work
            </a>
            <a
              routerLink="/resume"
              class="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-3"
            >
              📄 View Resume
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
        [style.opacity]="scrollIndicatorOpacity"
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
export class HeroComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private isBrowser: boolean;

  scrollY = 0;
  imageTransform = "translate(0, 0)";
  parallaxOffset = 0;
  sectionOpacity = 1;
  scrollIndicatorOpacity = 1;

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.scrollService
        .getScrollPosition()
        .pipe(takeUntil(this.destroy$))
        .subscribe((position) => {
          this.updateScrollEffects(position.scrollY);
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener("window:scroll")
  onWindowScroll(): void {
    if (this.isBrowser) {
      this.scrollY = window.scrollY || window.pageYOffset;
      this.updateScrollEffects(this.scrollY);
    }
  }

  private updateScrollEffects(scrollY: number): void {
    const maxScroll = 600; // Maximum scroll distance for effects
    const scrollProgress = Math.min(scrollY / maxScroll, 1);

    // Dynamic image positioning: center -> left as you scroll
    const translateX = scrollProgress * -150; // Move 150px to the left
    const translateY = scrollProgress * -30; // Move 30px up
    this.imageTransform = `translate(${translateX}px, ${translateY}px)`;

    // Parallax effect for background
    this.parallaxOffset = scrollY * 0.5;

    // Fade out section as you scroll
    this.sectionOpacity = Math.max(1 - scrollProgress * 0.5, 0.3);

    // Hide scroll indicator as you scroll
    this.scrollIndicatorOpacity = Math.max(1 - scrollProgress * 2, 0);
  }

  downloadCV(): void {
    const link = document.createElement("a");
    link.href = "assets/Aliakbar-Esmaeili-Resume2025.pdf";
    link.download = "Aliakbar-Esmaeili-Resume2025.pdf";
    link.click();
  }

  downloadCoverLetter(): void {
    const link = document.createElement("a");
    link.href = "assets/Cover_Letter_Aliakbar_Esmaeili.pdf";
    link.download = "Cover_Letter_Aliakbar_Esmaeili.pdf";
    link.click();
  }
}
