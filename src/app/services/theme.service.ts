import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { BehaviorSubject, Observable } from "rxjs";

export type Theme = "dark" | "light";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly THEME_KEY = "portfolio-theme";
  private theme$ = new BehaviorSubject<Theme>("dark");
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (!this.isBrowser) return;

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;

    // Check system preference if no saved theme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    this.setTheme(initialTheme);
  }

  getTheme(): Observable<Theme> {
    return this.theme$.asObservable();
  }

  getCurrentTheme(): Theme {
    return this.theme$.value;
  }

  setTheme(theme: Theme): void {
    if (!this.isBrowser) return;

    this.theme$.next(theme);

    // Update document class
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Save to localStorage
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggleTheme(): void {
    const newTheme = this.theme$.value === "dark" ? "light" : "dark";
    this.setTheme(newTheme);
  }
}
