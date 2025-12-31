import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  name: string;
  url: string;
  type: 'github' | 'linkedin' | 'twitter' | 'instagram';
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Header -->
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold text-black mb-6">Let's Connect</h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-16 lg:gap-24">
          <!-- Left Column - Info & Social -->
          <div class="space-y-12">
            <!-- Contact Info Card -->
            <div class="bg-gray-50 p-8 border-l-4 border-black">
              <h3 class="text-2xl font-bold text-black mb-6">Get In Touch</h3>
              <p class="text-gray-700 mb-8 leading-relaxed text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <!-- Email -->
              <div class="flex items-start space-x-4 group">
                <div class="w-14 h-14 bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 mb-1 font-medium">Email</div>
                  <a href="mailto:contact@elverovski.com" 
                     class="text-lg text-gray-700 hover:text-black transition-colors font-medium">
                    contact@elverovski.com
                  </a>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="text-2xl font-bold text-black mb-6">Follow Me</h3>
              <p class="text-gray-600 mb-6">Connect with me on social media</p>
              <div class="flex flex-wrap gap-4">
                <a *ngFor="let social of socialLinks"
                   [href]="social.url"
                   target="_blank"
                   rel="noopener noreferrer"
                   [title]="social.name"
                   class="group relative w-14 h-14 flex items-center justify-center border-2 border-gray-300 hover:border-black transition-all duration-200 overflow-hidden">
                  
                  <!-- Hover background -->
                  <div class="absolute inset-0 bg-black transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                  
                  <!-- GitHub Icon -->
                  <svg *ngIf="social.type === 'github'" 
                       class="w-7 h-7 text-gray-600 group-hover:text-white transition-colors relative z-10" 
                       fill="currentColor" 
                       viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>

                  <!-- LinkedIn Icon -->
                  <svg *ngIf="social.type === 'linkedin'" 
                       class="w-7 h-7 text-gray-600 group-hover:text-white transition-colors relative z-10" 
                       fill="currentColor" 
                       viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>

                  <!-- Twitter Icon -->
                  <svg *ngIf="social.type === 'twitter'" 
                       class="w-7 h-7 text-gray-600 group-hover:text-white transition-colors relative z-10" 
                       fill="currentColor" 
                       viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>

                  <!-- Instagram Icon -->
                  <svg *ngIf="social.type === 'instagram'" 
                       class="w-7 h-7 text-gray-600 group-hover:text-white transition-colors relative z-10" 
                       fill="currentColor" 
                       viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column - Contact Form -->
          <div class="bg-white border-2 border-gray-200 p-8 md:p-10 hover:border-gray-300 transition-colors duration-200">
            <h3 class="text-2xl font-bold text-black mb-6">Send Me a Message</h3>
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  [(ngModel)]="formData.name"
                  name="name"
                  placeholder="Your name" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  [(ngModel)]="formData.email"
                  name="email"
                  placeholder="your.email@example.com" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  [(ngModel)]="formData.message"
                  name="message"
                  placeholder="Tell me about your project..." 
                  rows="6"
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 focus:border-black focus:outline-none transition-colors resize-none text-gray-900 placeholder-gray-400"
                ></textarea>
              </div>
              <button 
                type="submit"
                class="group w-full bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-200 font-medium text-lg flex items-center justify-center gap-2 hover:shadow-xl">
                <span>Send Message</span>
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/elverovski',
      type: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mario-enrique-silva-benavides-b884a0396/',
      type: 'linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/elverovski',
      type: 'twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/elverovsky',
      type: 'instagram'
    },
  ];

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      // TODO: Implement submission logic
      alert('Message sent! (This is a demo)');
      this.resetForm();
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}