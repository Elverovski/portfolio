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
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
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