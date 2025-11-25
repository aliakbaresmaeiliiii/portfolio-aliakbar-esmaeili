import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService, Theme } from "../../services/theme.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-theme-toggle",
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleTheme()"
      class="theme-toggle-btn"
      [attr.aria-label]="
        'Switch to ' + (currentTheme === 'dark' ? 'light' : 'dark') + ' theme'
      "
      [class.light]="currentTheme === 'light'"
    >
      <div class="toggle-container">
        <!-- Sun Icon (Light Theme) -->
        <svg
          class="icon sun-icon"
          [class.active]="currentTheme === 'light'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          />
        </svg>

        <!-- Moon Icon (Dark Theme) -->
        <svg
          class="icon moon-icon"
          [class.active]="currentTheme === 'dark'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>

      <span class="theme-label">{{
        currentTheme === "dark" ? "Dark" : "Light"
      }}</span>
    </button>
  `,
  styles: [
    `
      .theme-toggle-btn {
        position: fixed;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        z-index: 1000;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        padding: 1rem;
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        border: 2px solid var(--glass-border);
        border-radius: 1rem;

        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }

      .theme-toggle-btn:hover {
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        border-color: var(--accent-blue);
      }

      .theme-toggle-btn.light {
        background: rgba(255, 255, 255, 0.9);
        border-color: rgba(0, 0, 0, 0.15);
      }

      .toggle-container {
        position: relative;
        width: 2.5rem;
        height: 2.5rem;
      }

      .icon {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        transform: rotate(180deg) scale(0.5);
      }

      .icon.active {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }

      .sun-icon {
        color: #f59e0b;
      }

      .moon-icon {
        color: #818cf8;
      }

      .theme-label {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-primary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: color 0.3s ease;
      }

      @media (max-width: 768px) {
        .theme-toggle-btn {
          top: auto;
          bottom: 2rem;
          right: 1.5rem;
          transform: none;
          padding: 0.75rem;
        }

        .theme-toggle-btn:hover {
          transform: scale(1.1);
        }

        .toggle-container {
          width: 2rem;
          height: 2rem;
        }

        .theme-label {
          font-size: 0.625rem;
        }
      }

      /* Pulse animation on load */
      @keyframes pulse-glow {
        0%,
        100% {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        50% {
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
        }
      }

      .theme-toggle-btn {
        animation: pulse-glow 2s ease-in-out 3;
      }
    `,
  ],
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentTheme: Theme = "dark";

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService
      .getTheme()
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme) => {
        this.currentTheme = theme;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
