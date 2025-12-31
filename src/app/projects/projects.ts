import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GitHubRepo {
  url: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  github?: string | GitHubRepo[];
  demo?: string;
}

interface Category {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold text-black mb-6">My Projects</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>
        
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <button 
            *ngFor="let category of categories"
            (click)="selectCategory(category.name)"
            [class.bg-black]="selectedCategory === category.name"
            [class.text-white]="selectedCategory === category.name"
            [class.bg-white]="selectedCategory !== category.name"
            [class.text-gray-700]="selectedCategory !== category.name"
            class="px-6 py-3 border-2 border-gray-200 hover:border-black transition-all duration-200 font-medium flex items-center gap-2 group hover:scale-105">
            <span class="text-lg">{{ category.icon }}</span>
            <span>{{ category.name }}</span>
            <span *ngIf="selectedCategory === category.name" 
                  class="ml-2 w-2 h-2 bg-white rounded-full"></span>
          </button>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of filteredProjects" 
               class="group bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2">
            
            <!-- Project Image -->
            <div class="h-56 bg-gray-100 overflow-hidden relative">
              <img [src]="project.image" 
                   [alt]="project.title"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              
              <!-- Category Badge -->
              <div class="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-medium">
                {{ project.category }}
              </div>
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                {{ project.description }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span *ngFor="let tech of project.technologies" 
                      class="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 font-medium hover:bg-black hover:text-white transition-colors duration-200 cursor-default">
                  {{ tech }}
                </span>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <!-- GitHub Links -->
                <div *ngIf="project.github" class="flex flex-col gap-2">
                  <!-- Single GitHub repo -->
                  <a *ngIf="isString(project.github)"
                     [href]="project.github"
                     target="_blank"
                     class="group/link flex items-center justify-between px-4 py-2.5 border-2 border-gray-300 hover:border-black hover:bg-black transition-all duration-200">
                    <div class="flex items-center gap-2">
                      <svg class="w-5 h-5 text-gray-700 group-hover/link:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span class="text-sm font-medium text-gray-700 group-hover/link:text-white transition-colors">View Code</span>
                    </div>
                    <svg class="w-4 h-4 text-gray-700 group-hover/link:text-white group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>

                  <!-- Multiple GitHub repos -->
                  <div *ngIf="isArray(project.github)" class="flex flex-col gap-2">
                    <a *ngFor="let repo of asRepoArray(project.github)"
                       [href]="repo.url"
                       target="_blank"
                       class="group/link flex items-center justify-between px-4 py-2.5 border-2 border-gray-300 hover:border-black hover:bg-black transition-all duration-200">
                      <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-gray-700 group-hover/link:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span class="text-sm font-medium text-gray-700 group-hover/link:text-white transition-colors">{{ repo.label }}</span>
                      </div>
                      <svg class="w-4 h-4 text-gray-700 group-hover/link:text-white group-hover/link:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <!-- Live Demo -->
                <a *ngIf="project.demo" 
                   [href]="project.demo"
                   target="_blank"
                   class="group/link flex items-center justify-between px-4 py-2.5 bg-black text-white hover:bg-gray-800 transition-all duration-200">
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    <span class="text-sm font-medium">Live Demo</span>
                  </div>
                  <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div *ngIf="filteredProjects.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-2xl font-bold text-black mb-2">No projects found</h3>
          <p class="text-gray-600">Try selecting a different category</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ProjectsComponent {
  categories: Category[] = [
    { name: 'All', icon: '📁' },
    { name: 'Web', icon: '🌐' },
    { name: 'Mobile', icon: '📱' },
    { name: 'Games', icon: '🎮' },
    { name: 'IoT', icon: '🔌' },
    { name: 'Other', icon: '✨' }
  ];

  selectedCategory: string = 'All';

  projects: Project[] = [
    {
      title: 'Assetra',
      description:
        'Assetra is a financial education and investment platform designed for beginners. It helps users better understand finance, simulate investments, calculate taxes, and make informed decisions through a simple and intuitive interface.',
      technologies: ['React', 'Spring Boot', 'MariaDB'],
      image: '/assets/projects/assetra.png',
      category: 'Web',
      github: [
        { url: 'https://github.com/Lysnne/ProjetFullStack-Frontend', label: 'View Frontend Code' },
        { url: 'https://github.com/Lysnne/ProjetFullStack-Backend', label: 'View Backend Code' },
      ]
    },
    {
      title: 'Motion Detection Alarm',
      description: 'A Raspberry Pi-based security alarm system that detects motion using sensors. Built with Python, it provides real-time alerts and monitoring capabilities for home security applications.',
      technologies: ['Python', 'Raspberry Pi', 'GPIO'],
      image: '/assets/projects/alarm.jpg',
      category: 'IoT',
      github: 'https://github.com/Elverovski/ProjetIDO'
    },
    {
      title: 'Box Fight Arena',
      description:
        'An interactive Raspberry Pi project where two characters fight using servo-motor controlled arms. The system synchronizes movements with background music, creating a dynamic and entertaining robotic battle experience.',
      technologies: ['Raspberry Pi', 'Python', 'GPIO'],
      image: '/assets/projects/robot-battle.png',
      category: 'IoT',
      github: 'https://github.com/Elverovski/projet_box'
    },
    {
      title: 'Dancing Robot',
      description:
        'A Raspberry Pi-based robot capable of dancing to music through programmed motor sequences. The project focuses on movement synchronization, motor control, and basic robotics principles.',
      technologies: ['Raspberry Pi', 'Python', 'GPIO'],
      image: '/assets/projects/dancing-robot.png',
      category: 'IoT',
      github: 'https://github.com/Elverovski/DancingRobot'
    },
    {
      title: 'Kings and Pigs',
      description:
        'Kings and Pigs is a 2D platformer game set in a dark medieval dungeon. The player controls a wandering king trapped inside a dungeon who must find the exit door as quickly as possible. To escape, the king must run, jump, and attack while avoiding deadly traps such as saws and pits, and fighting enemy pigs. The game focuses on fast-paced movement, precision, and tense atmosphere.',
      technologies: ['Unity', 'C#', '2D Game Development'],
      image: '/assets/projects/kings-and-pigs.png',
      category: 'Games',
      github: 'https://github.com/Elverovski/KingsAndPigs'
    },
    {
      title: 'Into The Backrooms (VR)',
      description:
        'Into The Backrooms is a virtual reality horror puzzle game inspired by the Backrooms universe. The player must solve puzzles to progress through levels while avoiding or escaping hostile entities. The game emphasizes immersion, tension, and exploration in unsettling environments, challenging players to survive and find a way out.',
      technologies: ['Unity', 'C#', 'VR', 'Oculus'],
      image: '/assets/projects/backrooms.png',
      category: 'Games',
      github: 'https://github.com/Elverovski/IntoTheBackrooms'
    },
    {
      title: 'Blackjack Chromecast',
      description:
        'A single-player Blackjack game designed for mobile devices with Chromecast integration. The player controls the game from a mobile phone while the gameplay is displayed on a TV via Chromecast. The project focuses on game logic, user interaction, and a smooth second-screen experience.',
      technologies: ['JavaScript', 'Chromecast SDK', 'Mobile Web', 'HTML', 'CSS', 'React', 'React Native'],
      image: '/assets/projects/blackjackChromecast.png',
      category: 'Games',
      github: [
        { url: 'https://github.com/420-411-MV/cls411-manette19', label: 'View Control Code' },
        { url: 'https://github.com/420-411-MV/cls411-jeu19', label: 'View Game Code' },
      ] 
    },
    {
      title: 'Crypto Tracker App',
      description:
        'A mobile application that allows users to track cryptocurrencies in real time. Users can browse different cryptocurrencies, view prices and market data, and add coins to a favorites list for quick access. The app focuses on usability, clean UI, and efficient data management.',
      technologies: ['React Native', 'API', 'Mobile App'],
      image: '/assets/projects/crypto-tracker.png',
      category: 'Mobile',
      github: 'https://github.com/Elverovski/CryptoTracker'
    }



  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  asRepoArray(value: any): GitHubRepo[] {
    return value as GitHubRepo[];
  }
}