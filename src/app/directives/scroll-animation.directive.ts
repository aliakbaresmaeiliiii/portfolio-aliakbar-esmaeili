import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
} from "@angular/core";

export type AnimationType =
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out";

@Directive({
  selector: "[appScrollAnimation]",
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: AnimationType = "fade-in";
  @Input() animationDelay: number = 0;
  @Input() animationDuration: number = 600;
  @Input() threshold: number = 0.1;

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Set initial state
    this.setInitialState();

    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animate();
            this.hasAnimated = true;
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setInitialState(): void {
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, "opacity", "0");
    this.renderer.setStyle(
      element,
      "transition",
      `all ${this.animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
    );

    switch (this.animationType) {
      case "fade-in":
        // Already set opacity to 0
        break;
      case "slide-up":
        this.renderer.setStyle(element, "transform", "translateY(40px)");
        break;
      case "slide-down":
        this.renderer.setStyle(element, "transform", "translateY(-40px)");
        break;
      case "slide-left":
        this.renderer.setStyle(element, "transform", "translateX(40px)");
        break;
      case "slide-right":
        this.renderer.setStyle(element, "transform", "translateX(-40px)");
        break;
      case "zoom-in":
        this.renderer.setStyle(element, "transform", "scale(0.8)");
        break;
      case "zoom-out":
        this.renderer.setStyle(element, "transform", "scale(1.2)");
        break;
    }
  }

  private animate(): void {
    setTimeout(() => {
      const element = this.el.nativeElement;
      this.renderer.setStyle(element, "opacity", "1");
      this.renderer.setStyle(element, "transform", "translate(0, 0) scale(1)");
    }, this.animationDelay);
  }
}
