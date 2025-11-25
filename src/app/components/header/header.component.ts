import { Component, HostListener, signal } from "@angular/core";
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
          <!-- Logo with Profile Image -->
          <div class="flex items-center space-x-3">
            <!-- Profile Image -->
            <div 
              class="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/30 transition-all duration-300 hover:border-blue-500 hover:scale-105 group"
              [class]="isScrolled() ? 'w-8 h-8' : 'w-10 h-10'"
            >
              <img 
                src="assets/IMG_4810.JPG" 
                alt="Aliakbar Esmaeili"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <!-- Image glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <!-- Name -->
            <div
              class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer hover:from-blue-600 hover:to-purple-700"
              [class]="isScrolled() ? 'text-xl' : 'text-2xl'"
            >
              Aliakbar Esmaeili
            </div>
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
            
            <!-- Theme Toggle -->
            <div class="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <app-theme-toggle />
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
            
            <!-- Theme Toggle for Mobile -->
            <div class="flex items-center justify-center pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
              <app-theme-toggle />
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

  // Signal for navigation items
  navItems = signal([
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]);

  @HostListener("window:scroll")
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
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
}
