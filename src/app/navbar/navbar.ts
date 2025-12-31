import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a (click)="scrollTo('home')" 
             class="text-2xl font-bold text-black cursor-pointer hover:opacity-70 transition-opacity duration-200">
            Mario Silva
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a (click)="scrollTo('home')" 
               class="relative text-gray-700 hover:text-black cursor-pointer transition-colors duration-200 font-medium group">
              Home
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-200"></span>
            </a>
            <a (click)="scrollTo('about')" 
               class="relative text-gray-700 hover:text-black cursor-pointer transition-colors duration-200 font-medium group">
              About
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-200"></span>
            </a>
            <a (click)="scrollTo('skills')" 
               class="relative text-gray-700 hover:text-black cursor-pointer transition-colors duration-200 font-medium group">
              Skills
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-200"></span>
            </a>
            <a (click)="scrollTo('projects')" 
               class="relative text-gray-700 hover:text-black cursor-pointer transition-colors duration-200 font-medium group">
              Projects
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-200"></span>
            </a>
            <a (click)="scrollTo('contact')" 
               class="relative text-gray-700 hover:text-black cursor-pointer transition-colors duration-200 font-medium group">
              Contact
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-200"></span>
            </a>
            
            <!-- Download CV Button -->
            <a href="/assets/cv.pdf" 
               download="Mario_Silva_CV.pdf"
               class="ml-4 bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:shadow-lg flex items-center gap-2 group">
              <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download CV
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMenu()" 
                  class="md:hidden text-black hover:bg-gray-100 p-2 rounded transition-colors duration-200">
            <svg *ngIf="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg *ngIf="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="isMenuOpen" 
             class="md:hidden py-4 border-t border-gray-200 animate-fade-in">
          <a (click)="scrollTo('home')" 
             class="block py-3 text-gray-700 hover:text-black hover:bg-gray-50 px-2 cursor-pointer transition-all duration-200 font-medium">
            Home
          </a>
          <a (click)="scrollTo('about')" 
             class="block py-3 text-gray-700 hover:text-black hover:bg-gray-50 px-2 cursor-pointer transition-all duration-200 font-medium">
            About
          </a>
          <a (click)="scrollTo('skills')" 
             class="block py-3 text-gray-700 hover:text-black hover:bg-gray-50 px-2 cursor-pointer transition-all duration-200 font-medium">
            Skills
          </a>
          <a (click)="scrollTo('projects')" 
             class="block py-3 text-gray-700 hover:text-black hover:bg-gray-50 px-2 cursor-pointer transition-all duration-200 font-medium">
            Projects
          </a>
          <a (click)="scrollTo('contact')" 
             class="block py-3 text-gray-700 hover:text-black hover:bg-gray-50 px-2 cursor-pointer transition-all duration-200 font-medium">
            Contact
          </a>
          
          <!-- Mobile Download CV Button -->
          <a href="/assets/cv.pdf" 
             download="Mario_Silva_CV.pdf"
             class="flex items-center justify-center gap-2 mt-4 bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 w-full">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.2s ease-out;
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    this.isMenuOpen = false;
  }
}