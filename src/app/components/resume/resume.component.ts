import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-12"
    >
      <div class="container mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            My Resume
          </h1>
          <p class="text-gray-300 text-lg">Download my professional resume</p>
        </div>

        <!-- Resume Preview Card -->
        <div
          class="max-w-4xl mx-auto bg-dark-700/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-2xl"
        >
          <!-- Resume Info -->
          <div class="text-center mb-8">
            <div
              class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500/30"
            >
              <img
                src="assets/IMG_4810.JPG"
                alt="Aliakbar Esmaeili"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">
              Aliakbar Esmaeili
            </h2>
            <p class="text-blue-400 mb-4">Senior Software Engineer</p>
            <p class="text-gray-300 text-sm max-w-2xl mx-auto">
              Senior Software Engineer with 10+ years of experience building
              scalable Angular applications. Expert in designing reusable
              components, optimizing front-end performance, and delivering
              high-quality software that drives business impact. Passionate
              about modern web technologies and continuously improving team
              processes.
            </p>
          </div>

          <!-- Download Section -->
          <div class="text-center border-t border-gray-600 pt-8">
            <p class="text-gray-300 mb-6">
              Click the button below to download my resume in PDF format.
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                (click)="downloadResume()"
                class="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg"
              >
                📄 Download Resume
              </button>
              <a
                routerLink="/"
                class="btn-secondary inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="max-w-4xl mx-auto mt-8 text-center text-gray-400 text-sm">
          <p>Last updated: 2024 • PDF Format • File size: ~2MB</p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ResumeComponent implements OnInit {
  ngOnInit() {
    // Auto-download after a short delay to show the page first
    setTimeout(() => {
      this.downloadResume();
    }, 1000);
  }

  downloadResume() {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = "assets/Aliakbar-Esmaeili-Resume2024.pdf";
    link.download = "Aliakbar-Esmaeili-Resume.pdf";
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
