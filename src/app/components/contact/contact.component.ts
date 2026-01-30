import { Component, inject, signal, computed } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from "../../services/email.service";

interface ContactForm {
  name: FormControl<string>;
  email: FormControl<string>;
  subject: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--text-primary)">
              Get In <span class="gradient-text">Touch</span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
            <p class="mt-4 max-w-2xl mx-auto" style="color: var(--text-secondary)">
              Ready to work together? Let's discuss your next project!
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div class="space-y-8">
              <div
                class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-blue-500/30"
              >
                <h3 class="text-xl font-bold mb-4" style="color: var(--text-primary)">Let's Connect</h3>
                <p class="mb-6" style="color: var(--text-secondary)">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>

                <!-- Contact Methods -->
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <span class="text-2xl">📧</span>
                    <div>
                      <p class="font-semibold" style="color: var(--text-primary)">Email</p>
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
                      <p class="font-semibold" style="color: var(--text-primary)">Phone</p>
                      <a
                        href="tel:+989358200532"
                        class="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        +60-1151224149
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
                      <p class="font-semibold" style="color: var(--text-primary)">Location</p>
                      <p style="color: var(--text-secondary)">Selangor, Malaysia</p>
                    </div>
                  </div>
                </div>

                <!-- Social Links -->
                <div class="mt-8">
                  <h4 class="font-semibold mb-4" style="color: var(--text-primary)">Follow Me</h4>
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
              <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div class="flex items-center space-x-3 mb-4">
                  <div
                    class="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  ></div>
                  <span class="font-semibold" style="color: var(--text-primary)"
                    >Available for Work</span
                  >
                </div>
                <p class="text-sm" style="color: var(--text-secondary)">
                  Currently accepting new projects and opportunities. Response
                  time: Usually within 24 hours.
                </p>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <h3 class="text-xl font-bold mb-6" style="color: var(--text-primary)">Send a Message</h3>

              <!-- Success Message -->
              @if (showSuccessMessage()) {
                <div class="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p class="text-green-400 font-semibold">
                    ✓ Message sent successfully!
                  </p>
                  <p class="text-green-300 text-sm mt-1">
                    I'll get back to you soon.
                  </p>
                </div>
              }

              <!-- Error Message -->
              @if (showErrorMessage()) {
                <div class="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p class="text-red-400 font-semibold">
                    ✗ Failed to send message
                  </p>
                  <p class="text-red-300 text-sm mt-1">
                    Please try again or email me directly.
                  </p>
                </div>
              }

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label for="name" class="block font-semibold mb-3" style="color: var(--text-primary)"
                    >Full Name *</label
                  >
                  <input
                    type="text"
                    id="name"
                    formControlName="name"
                    class="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    style="color: var(--text-primary); background-color: var(--bg-secondary); border-color: var(--text-tertiary);"
                    placeholder="Enter your full name"
                  />
                  @if (contactForm.controls.name.invalid && contactForm.controls.name.touched) {
                    <p class="text-red-400 text-sm mt-2">Please enter your name</p>
                  }
                </div>

                <div>
                  <label for="email" class="block font-semibold mb-3" style="color: var(--text-primary)"
                    >Email Address *</label
                  >
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    class="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    style="color: var(--text-primary); background-color: var(--bg-secondary); border-color: var(--text-tertiary);"
                    placeholder="your.email@example.com"
                  />
                  @if (contactForm.controls.email.invalid && contactForm.controls.email.touched) {
                    <p class="text-red-400 text-sm mt-2">Please enter a valid email address</p>
                  }
                </div>

                <div>
                  <label
                    for="subject"
                    class="block font-semibold mb-3" style="color: var(--text-primary)"
                    >Subject *</label
                  >
                  <input
                    type="text"
                    id="subject"
                    formControlName="subject"
                    class="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    style="color: var(--text-primary); background-color: var(--bg-secondary); border-color: var(--text-tertiary);"
                    placeholder="What would you like to discuss?"
                  />
                  @if (contactForm.controls.subject.invalid && contactForm.controls.subject.touched) {
                    <p class="text-red-400 text-sm mt-2">Please enter a subject</p>
                  }
                </div>

                <div>
                  <label
                    for="message"
                    class="block font-semibold mb-3" style="color: var(--text-primary)"
                    >Message *</label
                  >
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="6"
                    class="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    style="color: var(--text-primary); background-color: var(--bg-secondary); border-color: var(--text-tertiary);"
                    placeholder="Tell me about your project, timeline, budget, or any specific requirements..."
                  ></textarea>
                  @if (contactForm.controls.message.invalid && contactForm.controls.message.touched) {
                    <p class="text-red-400 text-sm mt-2">Please enter your message</p>
                  }
                </div>

                <button
                  type="submit"
                  [disabled]="!contactForm.valid || isSubmitting()"
                  class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg inline-flex items-center justify-center gap-3"
                >
                  @if (!isSubmitting()) {
                    <span>📧 Send Message</span>
                  } @else {
                    <span class="flex items-center gap-2">
                      <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  }
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
  private emailService = inject(EmailService);

  // Signal-based state management
  isSubmitting = signal(false);
  showSuccessMessage = signal(false);
  showErrorMessage = signal(false);

  // Signal form with typed controls
  contactForm = new FormGroup<ContactForm>({
    name: new FormControl('', { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
    email: new FormControl('', { 
      nonNullable: true, 
      validators: [Validators.required, Validators.email] 
    }),
    subject: new FormControl('', { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
    message: new FormControl('', { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
  });

  async onSubmit() {
    if (this.isSubmitting() || this.contactForm.invalid) return;

    this.isSubmitting.set(true);
    this.showSuccessMessage.set(false);
    this.showErrorMessage.set(false);

    try {
      const formValue = this.contactForm.getRawValue();
      const success = await this.emailService.sendEmail(formValue);

      if (success) {
        this.showSuccessMessage.set(true);
        this.contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage.set(false);
        }, 5000);
      } else {
        this.showErrorMessage.set(true);
        setTimeout(() => {
          this.showErrorMessage.set(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      this.showErrorMessage.set(true);
      setTimeout(() => {
        this.showErrorMessage.set(false);
      }, 5000);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
