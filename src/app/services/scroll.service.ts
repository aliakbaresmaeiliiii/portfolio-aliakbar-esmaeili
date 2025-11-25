import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { BehaviorSubject, fromEvent, Observable } from "rxjs";
import { throttleTime, map } from "rxjs/operators";

export interface ScrollPosition {
  scrollY: number;
  scrollPercentage: number;
  direction: "up" | "down";
}

@Injectable({
  providedIn: "root",
})
export class ScrollService {
  private scrollPosition$ = new BehaviorSubject<ScrollPosition>({
    scrollY: 0,
    scrollPercentage: 0,
    direction: "down",
  });

  private lastScrollY = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.initScrollListener();
    }
  }

  private initScrollListener(): void {
    fromEvent(window, "scroll")
      .pipe(
        throttleTime(16), // ~60fps
        map(() => this.calculateScrollPosition())
      )
      .subscribe((position) => {
        this.scrollPosition$.next(position);
      });
  }

  private calculateScrollPosition(): ScrollPosition {
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
    const direction = scrollY > this.lastScrollY ? "down" : "up";

    this.lastScrollY = scrollY;

    return {
      scrollY,
      scrollPercentage: Math.min(100, Math.max(0, scrollPercentage)),
      direction,
    };
  }

  getScrollPosition(): Observable<ScrollPosition> {
    return this.scrollPosition$.asObservable();
  }

  getCurrentScrollY(): number {
    return this.isBrowser ? window.scrollY || window.pageYOffset : 0;
  }

  getScrollPercentage(): number {
    if (!this.isBrowser) return 0;

    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    return (scrollY / (documentHeight - windowHeight)) * 100;
  }

  scrollToElement(elementId: string, offset: number = 0): void {
    if (!this.isBrowser) return;

    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  scrollToTop(): void {
    if (!this.isBrowser) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
