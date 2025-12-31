import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section
      id="home"
      class="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <!-- Subtle background decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto text-left relative z-10 w-full">
        <!-- Main heading with typewriter -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
          Hello, I'm a<br />
          <span class="text-gray-700 inline-block min-w-[300px] md:min-w-[500px]">
            {{ displayedText }}
            <span class="border-r-4 border-gray-700 ml-1 animate-pulse"></span>
          </span>
        </h1>

        <!-- Description -->
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Building modern applications with clean, scalable code
          and a passion for creating exceptional digital experiences.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            class="group relative bg-black text-white px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span class="relative z-10 font-medium flex items-center gap-2">
              View My Work
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          
          <a
            href="#contact"
            class="border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
          >
            Get In Touch
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

        <!-- Status indicator -->
        <div class="flex items-center gap-6 text-gray-600">
          <div class="flex items-center gap-2">
            <div class="relative">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span class="text-sm font-medium">Available for opportunities</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce-slow">
        <span class="text-xs uppercase tracking-wider">Scroll</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0) translateX(-50%);
      }
      50% {
        transform: translateY(-15px) translateX(-50%);
      }
    }

    .animate-bounce-slow {
      animation: bounce-slow 3s infinite ease-in-out;
    }

    @keyframes ping {
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    .animate-ping {
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  words = [
    'Backend Developer',
    'Frontend Developer',
    'Gamer',
    'Full Stack Developer',
    'Java Enjoyer',
    'Problem Solver'
  ];

  displayedText = '';

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  typingSpeed = 100;
  deletingSpeed = 50;
  delayBetweenWords = 1500;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  private type() {
    const currentWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      // Escribiendo
      this.displayedText = currentWord.slice(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        // Palabra completa, esperar antes de borrar
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), this.delayBetweenWords);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
      }
    } else {
      // Borrando
      this.charIndex--;
      this.displayedText = currentWord.slice(0, this.charIndex);

      if (this.charIndex === 0) {
        // Palabra borrada, cambiar a siguiente
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.deletingSpeed);
      }
    }

    this.cdr.detectChanges();
  }
}