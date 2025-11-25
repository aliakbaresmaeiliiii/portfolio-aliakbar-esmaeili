import { Component, inject } from "@angular/core";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-theme-toggle",
  standalone: true,
  template: `
    <button
      (click)="toggleTheme()"
      [attr.aria-label]="themeService.themeLabel()"
      class="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110 group"
      type="button"
    >
      <span
        class="text-lg transition-transform duration-300 group-hover:scale-110"
      >
        {{ themeService.themeIcon() }}
      </span>

      <!-- Tooltip -->
      <div
        class="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <div
          class="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
        >
          {{ themeService.themeLabel() }}
        </div>
        <div
          class="w-2 h-2 bg-gray-900 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"
        ></div>
      </div>
    </button>
  `,
  styles: [],
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
