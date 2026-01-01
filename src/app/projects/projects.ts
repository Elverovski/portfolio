// ============ projects.ts ============
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
  expanded?: boolean;
}

interface Category {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  categories: Category[] = [
    { name: 'All', icon: '' },
    { name: 'Web', icon: '' },
    { name: 'Mobile', icon: '' },
    { name: 'Desktop', icon: '' },
    { name: 'Games', icon: '' },
    { name: 'IoT', icon: '' },
    { name: 'API', icon: '' }
  ];

  selectedCategory: string = 'All';

  projects: Project[] = [
    // Web Apps
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
      ],
      expanded: false
    },

    // IoT
    {
      title: 'Motion Detection Alarm',
      description: 'A Raspberry Pi-based security alarm system that detects motion using sensors. Built with Python, it provides real-time alerts and monitoring capabilities for home security applications.',
      technologies: ['Python', 'Raspberry Pi', 'GPIO'],
      image: '/assets/projects/alarm.jpg',
      category: 'IoT',
      github: 'https://github.com/Elverovski/ProjetIDO',
      expanded: false
    },
    {
      title: 'Box Fight Arena',
      description:
        'An interactive Raspberry Pi project where two characters fight using servo-motor controlled arms. The system synchronizes movements with background music, creating a dynamic and entertaining robotic battle experience.',
      technologies: ['Raspberry Pi', 'Python', 'GPIO'],
      image: '/assets/projects/robot-battle.png',
      category: 'IoT',
      github: 'https://github.com/Elverovski/projet_box',
      expanded: false
    },
    {
      title: 'Dancing Robot',
      description:
        'A Raspberry Pi-based robot capable of dancing to music through programmed motor sequences. The project focuses on movement synchronization, motor control, and basic robotics principles.',
      technologies: ['Raspberry Pi', 'Python', 'GPIO'],
      image: '/assets/projects/dancing-robot.png',
      category: 'IoT',
      github: 'https://github.com/Elverovski/DancingRobot',
      expanded: false
    },

    // Video Games
    {
      title: 'Kings and Pigs',
      description:
        'Kings and Pigs is a 2D platformer game set in a dark medieval dungeon. The player controls a wandering king trapped inside a dungeon who must find the exit door as quickly as possible. To escape, the king must run, jump, and attack while avoiding deadly traps such as saws and pits, and fighting enemy pigs. The game focuses on fast-paced movement, precision, and tense atmosphere.',
      technologies: ['Unity', 'C#', '2D Game Development'],
      image: '/assets/projects/kings-and-pigs.png',
      category: 'Games',
      github: 'https://github.com/Elverovski/KingsAndPigs',
      expanded: false
    },
    {
      title: 'Into The Backrooms (VR)',
      description:
        'Into The Backrooms is a virtual reality horror puzzle game inspired by the Backrooms universe. The player must solve puzzles to progress through levels while avoiding or escaping hostile entities. The game emphasizes immersion, tension, and exploration in unsettling environments, challenging players to survive and find a way out.',
      technologies: ['Unity', 'C#', 'VR', 'Oculus'],
      image: '/assets/projects/backrooms.png',
      category: 'Games',
      github: 'https://github.com/Elverovski/IntoTheBackrooms',
      expanded: false
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
      ],
      expanded: false
    },

    // Mobile Apps
    {
      title: 'Crypto Tracker App',
      description:
        'A mobile application that allows users to track cryptocurrencies in real time. Users can browse different cryptocurrencies, view prices and market data, and add coins to a favorites list for quick access. The app focuses on usability, clean UI, and efficient data management.',
      technologies: ['React Native', 'API', 'Mobile App'],
      image: '/assets/projects/crypto-tracker.png',
      category: 'Mobile',
      github: 'https://github.com/Elverovski/CryptoTracker',
      expanded: false
    },
    // API
    {
      title: 'Trackedias API',
      description:
        'Trackedias is a REST API that allows users to track movies and TV series they are currently watching. Users can manage their watchlist, mark content as watched or in progress, add favorites, and organize their viewing history. The project focuses on clean API design, scalability, and user-centered data management.',
      technologies: ['Node.js', 'REST API', 'Swagger', 'MongoDB'],
      image: '/assets/projects/trackedias.png',
      category: 'API',
      github: 'https://github.com/Elverovski/420-514-MV_Trackedias_Mario-Silva.git',
      expanded: false
    },

    // Desktop Apps
    {
      title: 'Payment Reminder Alert Manager',
      description:
        'A desktop application designed to help college students manage payment alerts and deadlines. The application allows users to create and issue invoices, organize them in a reminder list, and receive notifications to avoid missing payment due dates. It features an intuitive and dynamic user interface, along with an integrated calendar to track upcoming payments efficiently.',
      technologies: ['C#', '.NET', 'WPF', 'Desktop Application'],
      image: '/assets/projects/payment-alerts.png',
      category: 'Desktop',
      github: 'https://github.com/Mathis1187/TheClassMain',
      expanded: false
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

  toggleDescription(project: Project): void {
    project.expanded = !project.expanded;
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