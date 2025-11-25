import { Component, HostListener, signal, effect } from "@angular/core";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ThemeToggleComponent],
  template: `
    <header
      [class]="isScrolled() ? 'glass-effect shadow-2xl' : 'bg-transparent'"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md"
      [@slideDown]="'in'"
    >
      <nav class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div
            class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer hover:from-blue-600 hover:to-purple-700"
          >
            Aliakbar Esmaeili
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-1">
            @for (item of navItems(); track item.name; let i = $index) {
              <a
                [href]="item.href"
                (click)="setActiveItem(i)"
                class="relative px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group"
                [class.active]="activeItem() === i"
              >
                <span class="relative z-10">{{ item.name }}</span>
                
                <!-- Animated underline -->
                <div 
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"
                  [class.w-full]="activeItem() === i"
                ></div>
                
                <!-- Hover background effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            }
            
            <!-- Toggle Buttons Container -->
            <div class="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <!-- Theme Toggle -->
              <app-theme-toggle />
              
              <!-- Language Toggle -->
              <button
                (click)="toggleLanguage()"
                [attr.aria-label]="isEnglish() ? 'Switch to Persian' : 'Switch to English'"
                class="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110 group"
                type="button"
              >
                <span
                  class="text-lg transition-transform duration-300 group-hover:scale-110"
                >
                  {{ isEnglish() ? 'EN' : 'FA' }}
                </span>

                <!-- Tooltip -->
                <div
                  class="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                  <div
                    class="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    {{ isEnglish() ? 'Switch to Persian' : 'Switch to English' }}
                  </div>
                  <div
                    class="w-2 h-2 bg-gray-900 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"
                  ></div>
                </div>
              </button>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMenu()"
            class="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center group"
            [attr.aria-label]="isMenuOpen() ? 'Close menu' : 'Open menu'"
          >
            <span 
              class="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300"
              [class]="isMenuOpen() ? 'rotate-45 translate-y-1.5' : ''"
            ></span>
            <span 
              class="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 mt-1.5"
              [class]="isMenuOpen() ? 'opacity-0' : ''"
            ></span>
            <span 
              class="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 mt-1.5"
              [class]="isMenuOpen() ? '-rotate-45 -translate-y-1.5' : ''"
            ></span>
            
            <!-- Button background effect -->
            <div class="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          [@mobileMenu]="isMenuOpen() ? 'open' : 'closed'"
          class="lg:hidden overflow-hidden"
        >
          <div class="py-4 space-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-lg mt-2 p-4">
            @for (item of navItems(); track item.name; let i = $index) {
              <a
                [href]="item.href"
                (click)="closeMenu(); setActiveItem(i)"
                class="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group relative"
                [class.active]="activeItem() === i"
              >
                <span class="relative z-10">{{ item.name }}</span>
                
                <!-- Active indicator for mobile -->
                <div 
                  class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r opacity-0 transition-opacity duration-300"
                  [class.opacity-100]="activeItem() === i"
                ></div>
              </a>
            }
            
            <!-- Toggle Buttons for Mobile -->
            <div class="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
              <app-theme-toggle />
              
              <button
                (click)="toggleLanguage()"
                class="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110 group"
                type="button"
              >
                <span class="text-lg">{{ isEnglish() ? 'EN' : 'FA' }}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `,
  animations: [
    trigger("slideDown", [
      state(
        "in",
        style({
          transform: "translateY(0)",
          opacity: 1,
        })
      ),
      transition("void => *", [
        style({
          transform: "translateY(-100px)",
          opacity: 0,
        }),
        animate("0.5s ease-out"),
      ]),
    ]),
    trigger("mobileMenu", [
      state(
        "closed",
        style({
          height: "0",
          opacity: 0,
          transform: "scale(0.95)",
        })
      ),
      state(
        "open",
        style({
          height: "*",
          opacity: 1,
          transform: "scale(1)",
        })
      ),
      transition("closed <=> open", [
        animate("0.3s cubic-bezier(0.4, 0, 0.2, 1)"),
      ]),
    ]),
  ],
  styles: [],
})
export class HeaderComponent {
  // Signal-based state management
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  activeItem = signal(0);
  isEnglish = signal(true);

  // Signal for navigation items
  navItems = signal([
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]);

  constructor() {
    // Track scroll position for header effects
    effect(() => {
      if (this.isScrolled()) {
        document.body.style.setProperty('--header-height', '70px');
      } else {
        document.body.style.setProperty('--header-height', '80px');
      }
    });
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
    
    // Update active item based on scroll position
    this.updateActiveItemOnScroll();
  }

  toggleMenu() {
    this.isMenuOpen.update(current => !current);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  setActiveItem(index: number) {
    this.activeItem.set(index);
  }

  toggleLanguage() {
    this.isEnglish.update(current => !current);
    // Here you would typically implement language switching logic
    console.log('Language toggled to:', this.isEnglish() ? 'English' : 'Persian');
  }

  private updateActiveItemOnScroll() {
    // Simple implementation - you can enhance this with Intersection Observer
    const sections = document.querySelectorAll('section[id]');
    let currentActive = 0;
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentActive = index;
      }
    });
    
    this.activeItem.set(currentActive);
  }
}
