import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ThemeToggleComponent,
  ],
  template: `
    <div
      class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
    >
      <app-theme-toggle></app-theme-toggle>
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "aliakbar-portfolio";
}
