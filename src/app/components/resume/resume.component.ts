import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="min-h-screen py-12"
      [style.background]="'var(--bg-gradient)'"
    >
      <div class="container mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Resume
          </h1>
          <p class="text-xl" style="color: var(--text-secondary)">Download my professional documents</p>
        </div>

        <!-- Resume Preview Card -->
        <div
          class="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <!-- Resume Info -->
          <div class="text-center mb-8">
            <div
              class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-xl"
            >
              <img
                src="assets/IMG_4810.JPG"
                alt="Aliakbar Esmaeili"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h2 class="text-3xl font-bold mb-3" style="color: var(--text-primary)">
              Aliakbar Esmaeili
            </h2>
            <p class="text-blue-400 text-xl font-semibold mb-4">Senior Software Engineer</p>
            <p class="text-lg max-w-2xl mx-auto leading-relaxed" style="color: var(--text-secondary)">
              Senior Software Engineer with 10+ years of experience building
              scalable Angular applications. Expert in designing reusable
              components, optimizing front-end performance, and delivering
              high-quality software that drives business impact.
            </p>
          </div>

          <!-- Download Section -->
          <div class="text-center border-t border-white/20 pt-8">
            <h3 class="text-2xl font-bold mb-6" style="color: var(--text-primary)">Download Documents</h3>
            <p class="mb-8 text-lg" style="color: var(--text-secondary)">
              Choose which document you'd like to download
            </p>
            <div
              class="flex flex-col lg:flex-row gap-6 justify-center items-center"
            >
              <!-- Cover Letter Button -->
              <button
                (click)="downloadCoverLetter()"
                class="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-3"
              >
                📝 Download Cover Letter
              </button>

              <!-- Resume Button -->
              <button
                (click)="downloadResume()"
                class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-3"
              >
                📄 Download Resume
              </button>

              <!-- Back to Home -->
              <a
                routerLink="/"
                class="bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-3"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="max-w-4xl mx-auto mt-12 text-center text-base" style="color: var(--text-tertiary)">
          <p>Last updated: 2024 • PDF Format • Professional Documents</p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ResumeComponent {
  downloadResume() {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = "assets/Aliakbar-Esmaeili-Resume2025.pdf";
    link.download = "Aliakbar-Esmaeili-Resume2025.pdf";
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadCoverLetter() {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = "assets/Cover_Letter_Aliakbar_Esmaeili.pdf";
    link.download = "Cover_Letter_Aliakbar_Esmaeili.pdf";
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
