import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollAnimationDirective } from "../../directives/scroll-animation.directive";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
templateUrl:'./skills.component.html',
  styles: [],
})
export class SkillsComponent {
frontendSkills = [
  { name: "Angular (v2–v21)", level: 5 },
  { name: "AngularJS", level: 4 },
  { name: "TypeScript", level: 5 },
  { name: "JavaScript (ES6+)", level: 5 },
  { name: "RxJS", level: 5 },
  { name: "NgRx", level: 5 },
  { name: "HTML5", level: 5 },
  { name: "CSS3 / Sass / SCSS", level: 5 },
  { name: "Tailwind CSS", level: 4 },
  { name: "Bootstrap", level: 4 },
  { name: "Angular Material", level: 5 }
];

backendSkills = [
  { name: "Node.js", level: 4 },
  { name: "NestJS", level: 4 },
  { name: "Express.js", level: 4 },
  { name: "REST API Design", level: 4 },
  { name: "Authentication & Authorization", level: 4 },
  { name: "MySQL", level: 4 },
  { name: "Microservices Integration", level: 4 }
];

toolsSkills = [
  { name: "Git", level: 5 },
  { name: "GitHub / Bitbucket", level: 5 },
  { name: "Docker", level: 4 },
  { name: "AWS (EC2, S3, Lambda)", level: 4 },
  { name: "CI/CD Pipelines", level: 4 },
  { name: "TFS", level: 4 },
  { name: "VS Code", level: 5 },
  { name: "Postman", level: 4 }
];

testingSkills = [
  { name: "Unit Testing", level: 4 },
  { name: "Integration Testing", level: 4 },
  { name: "Jest", level: 4 },
  { name: "Karma", level: 4 },
  { name: "Vitest", level: 3 }
];

additionalSkills = [
  "Responsive Design",
  "Cross-Browser Compatibility",
  "Modular Architecture",
  "Lazy Loading",
  "State Management (NgRx)",
  "Bundle Optimization",
  "SOLID Principles",
  "Clean Code & Scalable Patterns",
  "Architecture Design",
  "Code Review & Mentorship",
  "Agile/Scrum Methodologies",
  "Cross-Team Collaboration",
  "Automated Deployments"
];

}
