import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string; 
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Header -->
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold text-black mb-6">Skills & Technologies</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div class="space-y-20">
          <div *ngFor="let category of categories; let i = index" 
               class="animate-fade-in"
               [style.animation-delay.ms]="i * 100">
            
            <!-- Category Header -->
            <div class="flex items-center gap-4 mb-8">
              <div class="flex-grow">
                <h3 class="text-3xl font-bold text-black">
                  {{ category.title }}
                </h3>
              </div>
              <div class="flex-shrink-0 h-1 w-16 bg-black"></div>
              <div class="flex-shrink-0 text-sm font-medium text-gray-400">
                {{ category.skills.length }} {{ category.skills.length === 1 ? 'skill' : 'skills' }}
              </div>
            </div>

            <!-- Skills Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                *ngFor="let skill of category.skills"
                class="group relative flex flex-col items-center justify-center p-6 bg-white
                       border-2 border-gray-200 hover:border-black
                       transition-all duration-300 cursor-pointer
                       hover:shadow-xl hover:-translate-y-1"
              >
                <!-- Icon Container -->
                <div class="relative mb-4">
                  <div class="absolute inset-0 bg-black rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img
                    [src]="skill.icon"
                    [alt]="skill.name"
                    class="w-14 h-14 relative z-10
                           group-hover:scale-125 transition-transform duration-300"
                  />
                </div>

                <!-- Skill Name -->
                <span class="text-sm font-semibold text-gray-700 text-center group-hover:text-black transition-colors duration-200">
                  {{ skill.name }}
                </span>

                <!-- Hover indicator -->
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Section (Optional) -->
        <div class="mt-24 pt-16 border-t-2 border-gray-200">
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="p-6">
              <div class="text-5xl font-bold text-black mb-2">{{ getTotalSkills() }}</div>
              <div class="text-gray-600 font-medium">Total Skills</div>
            </div>
            <div class="p-6">
              <div class="text-5xl font-bold text-black mb-2">{{ categories.length }}</div>
              <div class="text-gray-600 font-medium">Categories</div>
            </div>
            <div class="p-6">
              <div class="text-5xl font-bold text-black mb-2">3+</div>
              <div class="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.6s ease-out forwards;
      opacity: 0;
    }
  `]
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: 'assets/icons/java.png' },
        { name: 'C#', icon: 'assets/icons/c-sharp.png' },
        { name: 'Python', icon: 'assets/icons/python.png' },
        { name: 'JavaScript', icon: 'assets/icons/js.png' },
        { name: 'TypeScript', icon: 'assets/icons/typescript.png' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'React', icon: 'assets/icons/react.png' },
        { name: 'Spring Boot', icon: 'assets/icons/spring-boot.png' },
        { name: 'Node.js', icon: 'assets/icons/nodejs.png' },
        { name: 'NestJS', icon: 'assets/icons/nestjs.png' },
        { name: 'React Native', icon: 'assets/icons/react.png' },
        { name: 'Expo Go', icon: '/assets/icons/expogo.png' },
        { name: 'Flask', icon: 'assets/icons/flask.png' },
        { name: '.NET', icon: 'assets/icons/net.png' },
        { name: 'WPF', icon: 'assets/icons/wpf.png' },
        { name: 'Bootstrap', icon: 'assets/icons/bootstrap.png' },
        { name: 'Tailwind CSS', icon: 'assets/icons/tailwind.png' },
        { name: 'Material UI', icon: 'assets/icons/materialui.png' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'assets/icons/mysql.png' },
        { name: 'MariaDB', icon: 'assets/icons/mariadb.png' },
        { name: 'H2', icon: 'assets/icons/h2.png' },
        { name: 'MongoDB', icon: 'assets/icons/mongodb.png' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Docker', icon: 'assets/icons/docker.png' },
        { name: 'Jenkins', icon: 'assets/icons/jenkins.png' },
        { name: 'AWS', icon: 'assets/icons/aws.png' },
        { name: 'Kubernetes', icon: 'assets/icons/kubernetes.png' },
      ],
    },
    {
      title: 'Tools & Productivity',
      skills: [
        { name: 'Figma', icon: 'assets/icons/figma.png' },
        { name: 'Git', icon: 'assets/icons/git.png' },
        { name: 'GitHub', icon: 'assets/icons/github.png' },
        { name: 'Postman', icon: 'assets/icons/postman.png' },
        { name: 'Trello', icon: 'assets/icons/trello.png' },
        { name: 'Draw.io', icon: 'assets/icons/drawio.png' },
        { name: 'Microsoft Office', icon: 'assets/icons/office.png' },
      ],
    },
    {
      title: 'Testing & QA',
      skills: [
        { name: 'JUnit', icon: 'assets/icons/junit5.png' },
        { name: 'Selenium', icon: 'assets/icons/selenium.png' },
      ],
    },
    {
      title: 'Documentation',
      skills: [
        { name: 'Swagger', icon: 'assets/icons/swagger.png' },
      ],
    },
    {
      title: 'Hardware & IoT',
      skills: [
        { name: 'Raspberry Pi', icon: 'assets/icons/raspberrypi.png' },
      ],
    }
  ];

  getTotalSkills(): number {
    return this.categories.reduce((total, category) => total + category.skills.length, 0);
  }
}