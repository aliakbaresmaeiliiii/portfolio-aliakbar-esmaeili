import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      [class]="isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [@slideDown]="'in'">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer">
            Aliakbar Esmaeili
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              *ngFor="let item of navItems" 
              [href]="item.href"
              class="text-white hover:text-blue-400 transition-colors duration-300 font-medium hover:scale-110 transform">
              {{ item.name }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMenu()"
            class="md:hidden text-white text-xl hover:text-blue-400 transition-colors duration-300">
            {{ isMenuOpen ? '✕' : '☰' }}
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          [class]="isMenuOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0'"
          class="md:hidden overflow-hidden transition-all duration-300">
          <div class="py-4 space-y-4">
            <a 
              *ngFor="let item of navItems" 
              [href]="item.href"
              (click)="closeMenu()"
              class="block text-white hover:text-blue-400 transition-colors duration-300 font-medium">
              {{ item.name }}
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  animations: [
    trigger('slideDown', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          transform: 'translateY(-100px)',
          opacity: 0
        }),
        animate('0.5s ease-out')
      ])
    ])
  ],
  styles: []
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
