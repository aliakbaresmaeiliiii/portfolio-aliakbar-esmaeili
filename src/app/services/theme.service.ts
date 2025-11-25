import { Injectable, signal, computed, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  
  // Signal for current theme with localStorage persistence
  private themeSignal = signal<Theme>(this.getInitialTheme());
  
  // Computed signal for theme class
  themeClass = computed(() => this.themeSignal() === 'dark' ? 'dark' : 'light');
  
  // Computed signal for icon
  themeIcon = computed(() => this.themeSignal() === 'dark' ? '🌙' : '☀️');
  
  // Computed signal for label
  themeLabel = computed(() => this.themeSignal() === 'dark' ? 'Dark Mode' : 'Light Mode');

  constructor() {
    // Effect to update document class and localStorage when theme changes
    effect(() => {
      const theme = this.themeSignal();
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem(this.THEME_KEY, theme);
    });
  }

  private getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to dark for this portfolio
    return 'dark';
  }

  toggleTheme(): void {
    this.themeSignal.update(current => current === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
  }

  get currentTheme(): Theme {
    return this.themeSignal();
  }
}