import { Component, HostListener, signal } from "@angular/core";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [ThemeToggleComponent],
  templateUrl:'./header.component.html',
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  activeItem = signal(0);
  mounted = signal(false);

  navItems = signal([
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]);

  ngOnInit() {
    requestAnimationFrame(() => this.mounted.set(true));
  }

  @HostListener("window:scroll")
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  setActiveItem(i: number) {
    this.activeItem.set(i);
  }
}
