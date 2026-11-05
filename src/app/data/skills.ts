export interface Skill {
  name: string;
  icon: string;
  /** Marks a technology you're actively learning right now. */
  learning?: boolean;
  /** Single-colour dark logo: inverted in dark mode so it stays visible. */
  mono?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const local = (file: string) => `assets/icons/${file}`;
const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}.svg`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: local('java.png') },
      { name: 'Kotlin', icon: devicon('kotlin/kotlin-original'), learning: true },
      { name: 'TypeScript', icon: local('typescript.png') },
      { name: 'JavaScript', icon: local('js.png') },
      { name: 'Python', icon: local('python.png') },
      { name: 'C#', icon: local('c-sharp.png') },
      { name: 'SQL', icon: local('sql.png') },
      { name: 'Bash', icon: local('bash.png') },
      { name: 'HTML', icon: local('html.png') },
      { name: 'CSS', icon: local('css-3.png') },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: local('react.png') },
      { name: 'Angular', icon: devicon('angular/angular-original'), learning: true },
      { name: 'Tailwind CSS', icon: local('tailwind.png') },
      { name: 'Material UI', icon: local('materialui.png') },
      { name: 'Bootstrap', icon: local('bootstrap.png') },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: local('spring-boot.png') },
      { name: 'Node.js', icon: local('nodejs.png') },
      { name: 'NestJS', icon: local('nestjs.png') },
      { name: 'Flask', icon: local('flask.png'), mono: true },
      { name: '.NET', icon: local('net.png') },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: local('react.png') },
      { name: 'Expo', icon: local('expogo.png'), mono: true },
    ],
  },
  {
    title: 'Databases & BaaS',
    skills: [
      { name: 'PostgreSQL', icon: devicon('postgresql/postgresql-original') },
      { name: 'Supabase', icon: devicon('supabase/supabase-original'), learning: true },
      { name: 'MySQL', icon: local('mysql.png') },
      { name: 'MariaDB', icon: local('mariadb.png') },
      { name: 'MongoDB', icon: local('mongodb.png') },
      { name: 'H2', icon: local('h2.png') },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: local('aws.png') },
      { name: 'Docker', icon: local('docker.png') },
      { name: 'Kubernetes', icon: local('kubernetes.png') },
      { name: 'Terraform', icon: local('terraform.png') },
      { name: 'GitHub Actions', icon: local('github-actions.png') },
      { name: 'Jenkins', icon: local('jenkins.png') },
      { name: 'Makefile', icon: local('makefile.png') },
    ],
  },
  {
    title: 'Desktop',
    skills: [
      { name: 'JavaFX', icon: local('javafx.png') },
      { name: 'WPF', icon: local('wpf.png') },
      { name: 'Scene Builder', icon: local('scenebuildier.png') },
    ],
  },
  {
    title: 'Testing & Docs',
    skills: [
      { name: 'JUnit 5', icon: local('junit5.png') },
      { name: 'Selenium', icon: local('selenium.png') },
      { name: 'JaCoCo', icon: local('jacoco.png') },
      { name: 'Swagger', icon: local('swagger.png') },
      { name: 'JavaDoc', icon: local('javadoc.png'), mono: true },
    ],
  },
  {
    title: 'Tools & Productivity',
    skills: [
      { name: 'Git', icon: local('git.png') },
      { name: 'GitHub', icon: local('github.png'), mono: true },
      { name: 'Postman', icon: local('postman.png') },
      { name: 'Figma', icon: local('figma.png') },
      { name: 'Draw.io', icon: local('drawio.png') },
      { name: 'Trello', icon: local('trello.png') },
      { name: 'Microsoft Office', icon: local('office.png') },
    ],
  },
  {
    title: 'Game Dev & 3D',
    skills: [
      { name: 'Unity', icon: local('unity.png'), mono: true },
      { name: 'Godot', icon: devicon('godot/godot-original'), learning: true },
      { name: 'Blender', icon: devicon('blender/blender-original'), learning: true },
    ],
  },
  {
    title: 'Hardware & IoT',
    skills: [{ name: 'Raspberry Pi', icon: local('raspberrypi.png') }],
  },
];

/** Every skill once (React and React Native share an icon, so dedupe by icon). */
export const ALL_SKILLS: Skill[] = SKILL_CATEGORIES.flatMap((c) => c.skills).filter(
  (skill, i, list) => list.findIndex((s) => s.icon === skill.icon) === i,
);

export const LEARNING_SKILLS: Skill[] = ALL_SKILLS.filter((s) => s.learning);
