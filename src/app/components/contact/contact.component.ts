import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EmailService } from "../../services/email.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-dark-800/50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span class="gradient-text">Touch</span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
            <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
              Ready to work together? Let's discuss your next project!
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div class="space-y-8">
              <div
                class="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <h3 class="text-xl font-bold text-white mb-4">Let's Connect</h3>
                <p class="text-gray-300 mb-6">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>

                <!-- Contact Methods -->
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <span class="text-2xl">📧</span>
                    <div>
                      <p class="text-white font-semibold">Email</p>
                      <a
                        href="mailto:Aliakbaresmaeili98@gmail.com"
                        class="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        Aliakbaresmaeili98&#64;gmail.com
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <span class="text-2xl">📱</span>
                    <div>
                      <p class="text-white font-semibold">Phone</p>
                      <a
                        href="tel:+989358200532"
                        class="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        +98-9358200532
                      </a>
                      <br />
                      <a
                        href="tel:+601151224149"
                        class="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        +60-1151224149
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <span class="text-2xl">📍</span>
                    <div>
                      <p class="text-white font-semibold">Location</p>
                      <p class="text-gray-300">Selangor, Malaysia</p>
                    </div>
                  </div>
                </div>

                <!-- Social Links -->
                <div class="mt-8">
                  <h4 class="text-white font-semibold mb-4">Follow Me</h4>
                  <div class="flex space-x-4">
                    <a
                      href="https://github.com/aliakbaresmaeiliiii"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-125 transform"
                    >
                      🐙
                    </a>
                    <a
                      href="https://linkedin.com/in/aliakbaresmaeili"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-125 transform"
                    >
                      💼
                    </a>
                    <a
                      href="mailto:Aliakbaresmaeili98@gmail.com"
                      class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-125 transform"
                    >
                      📧
                    </a>
                  </div>
                </div>
              </div>

              <!-- Availability Status -->
              <div class="glass-effect p-6 rounded-xl">
                <div class="flex items-center space-x-3 mb-4">
                  <div
                    class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  ></div>
                  <span class="text-white font-semibold"
                    >Available for Work</span
                  >
                </div>
                <p class="text-gray-300 text-sm">
                  Currently accepting new projects and opportunities. Response
                  time: Usually within 24 hours.
                </p>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="glass-effect p-8 rounded-xl">
              <h3 class="text-xl font-bold text-white mb-6">Send a Message</h3>

              <!-- Success Message -->
              <div
                *ngIf="showSuccessMessage"
                class="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
              >
                <p class="text-green-400 font-semibold">
                  ✓ Message sent successfully!
                </p>
                <p class="text-green-300 text-sm mt-1">
                  I'll get back to you soon.
                </p>
              </div>

              <!-- Error Message -->
              <div
                *ngIf="showErrorMessage"
                class="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
              >
                <p class="text-red-400 font-semibold">
                  ✗ Failed to send message
                </p>
                <p class="text-red-300 text-sm mt-1">
                  Please try again or email me directly.
                </p>
              </div>

              <form
                (ngSubmit)="onSubmit()"
                #contactForm="ngForm"
                class="space-y-6"
              >
                <div>
                  <label for="name" class="block text-white font-semibold mb-2"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label for="email" class="block text-white font-semibold mb-2"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-white font-semibold mb-2"
                    >Subject</label
                  >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    [(ngModel)]="formData.subject"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-white font-semibold mb-2"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    [(ngModel)]="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  [disabled]="!contactForm.form.valid || isSubmitting"
                  class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-300"
                >
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent {
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;

    try {
      const success = await this.emailService.sendEmail(this.formData);

      if (success) {
        this.showSuccessMessage = true;
        // Reset form
        this.formData = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      } else {
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
