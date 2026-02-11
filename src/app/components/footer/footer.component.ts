import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark-900 border-t border-white/10 py-12">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <!-- About Section -->
            <div>
              <h3 class="text-xl font-bold gradient-text mb-4">Aliakbar Esmaeili</h3>
              <p class="text-gray-400 mb-4">
                Senior Frontend Developer passionate about creating exceptional digital experiences 
                with modern web technologies.
              </p>
              <div class="flex space-x-4">
                <a href="https://github.com/aliakbaresmaeiliiii" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl hover:scale-125 transform">
                  🐙
                </a>
                <a href="https://linkedin.com/in/aliakbaresmaeili" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl hover:scale-125 transform">
                  💼
                </a>
                <a href="mailto:Aliakbaresmaeili98@gmail.com" 
                   class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl hover:scale-125 transform">
                  📧
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-white font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</a></li>
                <li><a href="#about" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a></li>
                <li><a href="#skills" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Skills</a></li>
                <li><a href="#experience" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Experience</a></li>
                <li><a href="#projects" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Projects</a></li>
                <li><a href="#contact" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div>
              <h4 class="text-white font-semibold mb-4">Contact Info</h4>
              <div class="space-y-2">
                <p class="text-gray-400 flex items-center">
                  <span class="mr-2">📧</span>
                  <a href="mailto:Aliakbaresmaeili98@gmail.com" class="hover:text-blue-400 transition-colors duration-300">
                    Aliakbaresmaeili98&#64;gmail.com
                  </a>
                </p>
                <p class="text-gray-400 flex items-center">
                  <span class="mr-2">📱</span>
                  <a href="tel:+601151224149" class="hover:text-blue-400 transition-colors duration-300">
                    +60-11-5122-4149
                  </a>
                </p>
                <p class="text-gray-400 flex items-center">
                  <span class="mr-2">📍</span>
                  Selangor, Malaysia
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="border-t border-white/10 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-gray-400 text-sm mb-4 md:mb-0">
                © {{ currentYear }} Aliakbar Esmaeili. All rights reserved.
              </p>
              <div class="flex items-center space-x-6">
                <span class="text-gray-400 text-sm">Built with</span>
                <span class="text-red-500">❤️</span>
                <span class="text-gray-400 text-sm">using Angular 20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
