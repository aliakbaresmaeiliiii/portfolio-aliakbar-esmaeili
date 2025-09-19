import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span class="gradient-text">Skills</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
              Technologies and tools I've mastered over 9+ years of development experience
            </p>
          </div>

          <!-- Skills Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend Technologies -->
            <div class="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div class="flex items-center mb-4">
                <span class="text-2xl mr-3">🎨</span>
                <h3 class="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div class="space-y-3">
                <div *ngFor="let skill of frontendSkills" class="flex items-center justify-between">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <div class="flex space-x-1">
                    <div *ngFor="let i of [1,2,3,4,5]" 
                         [class]="i <= skill.level ? 'w-2 h-2 bg-blue-500 rounded-full' : 'w-2 h-2 bg-gray-600 rounded-full'">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend Technologies -->
            <div class="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div class="flex items-center mb-4">
                <span class="text-2xl mr-3">⚙️</span>
                <h3 class="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div class="space-y-3">
                <div *ngFor="let skill of backendSkills" class="flex items-center justify-between">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <div class="flex space-x-1">
                    <div *ngFor="let i of [1,2,3,4,5]" 
                         [class]="i <= skill.level ? 'w-2 h-2 bg-purple-500 rounded-full' : 'w-2 h-2 bg-gray-600 rounded-full'">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools & Others -->
            <div class="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div class="flex items-center mb-4">
                <span class="text-2xl mr-3">🛠️</span>
                <h3 class="text-xl font-semibold text-white">Tools & Others</h3>
              </div>
              <div class="space-y-3">
                <div *ngFor="let skill of toolsSkills" class="flex items-center justify-between">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <div class="flex space-x-1">
                    <div *ngFor="let i of [1,2,3,4,5]" 
                         [class]="i <= skill.level ? 'w-2 h-2 bg-green-500 rounded-full' : 'w-2 h-2 bg-gray-600 rounded-full'">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Skills -->
          <div class="mt-16">
            <h3 class="text-2xl font-bold text-white text-center mb-8">Additional Expertise</h3>
            <div class="flex flex-wrap justify-center gap-4">
              <span *ngFor="let skill of additionalSkills" 
                    class="glass-effect px-4 py-2 rounded-full text-gray-300 hover:text-white hover:scale-105 transition-all duration-300">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'Angular (20)', level: 5 },
    { name: 'TypeScript', level: 5 },
    { name: 'JavaScript (ES6+)', level: 5 },
    { name: 'HTML5', level: 5 },
    { name: 'CSS3/SCSS', level: 5 },
    { name: 'Angular Material', level: 5 },
    { name: 'RxJS', level: 5 },
    { name: 'NgRx', level: 4 },
    { name: 'Ionic', level: 4 },
    { name: 'PWA', level: 4 },
  ];

  backendSkills = [
    { name: 'Node.js', level: 4 },
    { name: 'Express.js', level: 4 },
    { name: 'NestJS', level: 4 },
    { name: 'MySQL', level: 4 },
    { name: 'MongoDB', level: 3 },
    { name: 'Firebase', level: 4 },
    { name: 'Prisma', level: 4 },
    { name: 'REST APIs', level: 4 },
    { name: 'Swagger', level: 4 },
  ];

  toolsSkills = [
    { name: 'Git', level: 5 },
    { name: 'Jira', level: 4 },
    { name: 'Docker', level: 4 },
    { name: 'VS Code', level: 5 },
    { name: 'Postman', level: 4 },
    { name: 'Webpack', level: 3 },
    { name: 'Chrome DevTools', level: 5 },
    { name: 'Scrum', level: 4 },
  ];

  additionalSkills = [
    'Responsive Design',
    'Progressive Web Apps (PWA)',
    'ERP Systems Development',
    'Financial Applications',
    'Connected Car Solutions',
    'Automation Tools',
    'QA Systems',
    'Agile/Scrum Methodologies',
    'Code Review & Debugging',
    'State Management (NgRx)',
    'UI/UX Design',
    'Cross-browser Compatibility',
    'Performance Optimization',
    'Container Presenter Pattern',
    'Dynamic Grid Implementation',
    'Multi-platform Architecture'
  ];
}
