import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollAnimationDirective } from "../../directives/scroll-animation.directive";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `

  `,
  styles: [],
})
export class ExperienceComponent {
  experiences = [
    {
      position: "Senior Software Engineer",
      company: "Beed Education Adventures",
      location: "Kuala Lumpur, Malaysia",
      duration: "06/2023 – Present",
      description:
        "Upgraded Angular and Node.js projects to latest versions, improving maintainability and performance.",
      technologies: [
        "Angular 20",
        "Angular Material",
        "Node.js",
        "Express.js",
        "NestJS",
        "Prisma",
        "TypeScript",
        "RxJS",
        "Jest",
        "Cypress",
      ],
      achievements: [
        "Engineered reusable web components and optimized front-end for cross-platform performance",
        "Debugged and resolved complex application issues, reducing client-reported bugs by 30%",
        "Collaborated with clients and team members to design modular, scalable solutions",
      ],
    },
    {
      position: "Senior Front-End Developer",
      company: "Guest Services",
      location: "Istanbul, Turkey",
      duration: "02/2023 – 06/2023",
      description:
        "Developed an innovative online school platform using Agile (Scrum) methodologies.",
      technologies: [
        "Angular 14",
        "Angular Material",
        ".NET",
        "Git",
        "Ngrx",
        "RxJS",
        "Scrum",
        "Jira",
        "Ionic",
      ],
      achievements: [
        "Implemented reusable Angular components and maintained code quality across modules",
        "Debugged and tested new features, improving application reliability",
        "Mentored team members to adopt best practices in front-end development",
      ],
    },
    {
      position: "Senior Front-End Developer",
      company: "Padidar Wellness & Fitness Services",
      location: "Tehran, Iran",
      duration: "01/2022 – 02/2023",
      description:
        "Designed and implemented new features for existing Angular applications.",
      technologies: [
        "Angular 10",
        "Angular Material",
        ".NET",
        "Azure",
        "Ngrx",
        "RxJS",
        "Scrum",
        "Git",
      ],
      achievements: [
        "Provided technical support and conducted code reviews to ensure high-quality standards",
        "Used ag-grid for complex data visualization components",
      ],
    },
    {
      position: "Front-End Developer",
      company: "Winfiniti",
      location: "Istanbul, Turkey",
      duration: "07/2019 – 01/2022",
      description:
        "Architected ERP systems using OOP and Container-Presenter patterns.",
      technologies: [
        "Angular 8",
        "Angular Material",
        "PrimeNG",
        "Kendo UI",
        ".NET Core",
        "Swagger",
      ],
      achievements: [
        "Managed state using RxJS and Angular services, improving maintainability",
        "Developed interactive data grids with ag-grid",
      ],
    },
    {
      position: "Front-End Developer",
      company: "Navaco Information Technology",
      location: "Tehran, Iran",
      duration: "05/2018 – 06/2019",
      description:
        "Developed Angular admin panel for multi-application management using Material Design.",
      technologies: [
        "Angular 7",
        "Angular Material",
        "iOS",
        "Android",
        "PWA",
        "Node.js",
        "Swagger",
      ],
      achievements: [
        "Implemented custom components according to the UI/UX team designs",
        "Integrated web applications with native apps using WebView for seamless data exchange",
      ],
    },
    {
      position: "Front-End Developer",
      company: "Rayan Bahman Pardaz",
      location: "Tehran, Iran",
      duration: "04/2016 – 04/2018",
      description:
        "Built ERP infrastructure and reusable Angular components for a large organization.",
      technologies: [
        "Angular 4",
        "Angular Material",
        "Java Spring",
        "DevExtreme",
        "Bootstrap",
        "Nebular",
      ],
      achievements: [
        "Collaborated with back-end teams on data models and APIs",
        "Refactored large front-end codebase for modularity and reusability",
        "Worked with UI libraries: DevExtreme, Material, Nebular, Bootstrap",
      ],
    },
  ];

  education = {
    degree: "Bachelor of Computer Engineering",
    institution: "Islamic Azad University",
    year: "2019 – 2023",
  };
}
