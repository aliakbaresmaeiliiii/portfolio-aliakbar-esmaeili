import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 bg-dark-800/50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span class="gradient-text">Experience</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p class="text-gray-400 mt-4">
              9+ years of professional development experience
            </p>
          </div>

          <!-- Experience Timeline -->
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <!-- Experience Items -->
            <div *ngFor="let exp of experiences; let i = index" 
                 class="relative mb-12 pl-20 hover:scale-105 transition-transform duration-300">
              <!-- Timeline Dot -->
              <div class="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-dark-800"></div>

              <!-- Experience Card -->
              <div class="glass-effect p-6 rounded-xl">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-white mb-1">{{ exp.position }}</h3>
                    <p class="text-blue-400 font-semibold">{{ exp.company }}</p>
                    <p class="text-gray-500 text-sm">{{ exp.location }}</p>
                  </div>
                  <span class="text-gray-400 text-sm mt-2 md:mt-0">{{ exp.duration }}</span>
                </div>
                
                <p class="text-gray-300 mb-4">{{ exp.description }}</p>
                
                <!-- Technologies Used -->
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of exp.technologies" 
                        class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {{ tech }}
                  </span>
                </div>

                <!-- Key Achievements -->
                <div class="mt-4">
                  <h4 class="text-white font-semibold mb-2">Key Achievements:</h4>
                  <ul class="list-disc list-inside space-y-1">
                    <li *ngFor="let achievement of exp.achievements" class="text-gray-300 text-sm">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="mt-20">
            <h3 class="text-2xl font-bold text-white text-center mb-8">Education</h3>
            <div class="glass-effect p-6 rounded-xl text-center">
              <h4 class="text-xl font-semibold text-white mb-2">{{ education.degree }}</h4>
              <p class="text-blue-400 font-semibold mb-2">{{ education.institution }}</p>
              <p class="text-gray-400">{{ education.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceComponent {
  experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Beed Education Adventures',
      location: 'Kuala Lumpur, Malaysia',
      duration: '06/2023 – Present',
      description: 'Developing and updating projects to latest version of Angular and Node.js. Understanding design patterns and writing reusable, modular code.',
      technologies: ['Angular 18', 'Node.js', 'Express.js (TypeScript)', 'Git', 'Scrum', 'MySQL', 'Docker', 'Firebase'],
      achievements: [
        'Engineered web solutions for optimal performance across diverse platforms',
        'Applied design patterns and maintained codebase for reusability and modularity',
        'Conducted thorough debugging sessions to rectify existing application errors',
        'Effectively communicated complex technical issues and solutions to clients'
      ]
    },
    {
      position: 'Senior Front-End Developer',
      company: 'Guest Services',
      location: 'Istanbul, Turkey',
      duration: '02/2023 – 06/2023',
      description: 'Focused on the development of an innovative online school platform. Adhering to Agile methodologies, particularly Scrum.',
      technologies: ['Angular 14', '.NET', 'Git', 'NgRx', 'RxJS', 'Scrum', 'Jira', 'Ionic'],
      achievements: [
        'Developed innovative online school platform features',
        'Adhered to Agile methodologies fostering transparency',
        'Understood design patterns and wrote reusable, modular code',
        'Demonstrated strong commitment to personal learning and development'
      ]
    },
    {
      position: 'Senior Front-End Developer',
      company: 'Padidar Wellness and Fitness Services',
      location: 'Tehran, Iran',
      duration: '01/2022 - 02/2023',
      description: 'Designing and developing new features and functionality for existing systems. Providing technical support for applications and infrastructure.',
      technologies: ['Angular', '.NET', 'Azure', 'NgRx', 'RxJS', 'Scrum', 'Git', 'ag-grid'],
      achievements: [
        'Designed and developed new features for existing systems',
        'Provided technical support for applications and infrastructure',
        'Conducted code reviews to ensure best practices',
        'Used ag-grid for advanced data grid functionality'
      ]
    },
    {
      position: 'Front-End Developer',
      company: 'Winfiniti',
      location: 'Istanbul, Turkey',
      duration: '07/2019 - 01/2022',
      description: 'Architecture of ERP systems using OOP. Implemented Container Presenter pattern and used RXJS and Angular services for managing states.',
      technologies: ['Angular Material', 'PrimeNG', 'Kendo UI', '.NET Core', 'Swagger'],
      achievements: [
        'Architected ERP systems using Object-Oriented Programming',
        'Implemented Container Presenter pattern for better code organization',
        'Used RXJS and Angular services for state management',
        'Created full dynamic editable grid functionality'
      ]
    },
    {
      position: 'Front-End Developer',
      company: 'Navaco Information Technology',
      location: 'Tehran, Iran',
      duration: '05/2018 - 06/2019',
      description: 'Designed multi applications architecture. Implemented custom components according to UI/UX team designs. Created Angular admin panel application.',
      technologies: ['Angular', 'iOS', 'Android', 'PWA', 'Material', 'NodeJS', 'Swagger'],
      achievements: [
        'Designed multi applications architecture',
        'Implemented custom components according to UI/UX designs',
        'Created Angular admin panel application based on Material design',
        'Constructed progressive web application with mobile camera features',
        'Collaborated with native teams for web view integration'
      ]
    },
    {
      position: 'Front-End Developer',
      company: 'Rayan Bahman Pardaz',
      location: 'Tehran, Iran',
      duration: '04/2016 - 04/2018',
      description: 'Worked in core team to construct Infrastructure for a large organization ERP system. Constructed Angular and web components for other teams.',
      technologies: ['Angular', 'Java Spring', 'DevExtreme', 'Material', 'Nebular', 'Bootstrap'],
      achievements: [
        'Worked in core team to construct ERP system infrastructure',
        'Constructed Angular and web components for other teams',
        'Participated with back-end and business teams for API design',
        'Refactored large front-end application for modularity',
        'Involved with various UI kits (DevExtreme, Bootstrap, Material, Nebular)'
      ]
    }
  ];

  education = {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Islamic Azad University',
    year: '2019 – 2023'
  };
}
