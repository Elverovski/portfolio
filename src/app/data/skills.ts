export interface Skill {
  name: string;
  icon: string;
  /** Marks a technology you're actively learning right now. */
  learning?: boolean;
  /** Single-colour dark logo: inverted in dark mode so it stays visible. */
  mono?: boolean;
  /** Dark-coloured logo (navy, maroon…): brightened in dark mode so it stays readable. */
  lift?: boolean;
  /** Part of the main stack shown at the top of Skills. */
  core?: boolean;
}

export interface SkillCategory {
  title: string;
  /** One line on what this group is used for. */
  blurb: string;
  /** 24×24 stroke icon path (drawn with currentColor). */
  icon: string;
  skills: Skill[];
}

/** All logos live in public/assets/icons (the SVGs come from devicon v2.16.0, MIT). */
const local = (file: string) => `assets/icons/${file}`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    blurb: 'What I write code in',
    icon: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
    skills: [
      { name: 'Java', icon: local('java.webp'), core: true },
      { name: 'Kotlin', icon: local('kotlin.svg'), learning: true },
      { name: 'TypeScript', icon: local('typescript.webp') },
      { name: 'JavaScript', icon: local('js.webp') },
      { name: 'Python', icon: local('python.webp') },
      { name: 'C#', icon: local('c-sharp.webp') },
      { name: 'SQL', icon: local('sql.webp') },
      { name: 'Bash', icon: local('bash.webp') },
      { name: 'HTML', icon: local('html.webp') },
      { name: 'CSS', icon: local('css-3.webp') },
    ],
  },
  {
    title: 'Frontend',
    blurb: 'Interfaces & web apps',
    icon: 'M3 5h18v14H3zM3 9h18M6.5 7h.01M9 7h.01',
    skills: [
      { name: 'React', icon: local('react.webp') },
      { name: 'Angular', icon: local('angular.svg'), learning: true },
      { name: 'Tailwind CSS', icon: local('tailwind.webp') },
      { name: 'Material UI', icon: local('materialui.webp') },
      { name: 'Bootstrap', icon: local('bootstrap.webp') },
    ],
  },
  {
    title: 'Backend',
    blurb: 'APIs, servers & business logic',
    icon: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
    skills: [
      { name: 'Spring Boot', icon: local('spring-boot.webp'), core: true },
      { name: 'Node.js', icon: local('nodejs.svg') },
      { name: 'FastAPI', icon: local('fastapi.svg'), learning: true },
      { name: 'NestJS', icon: local('nestjs.webp') },
      { name: 'Flask', icon: local('flask.webp'), mono: true },
      { name: '.NET', icon: local('net.webp') },
    ],
  },
  {
    title: 'Mobile',
    blurb: 'Cross-platform apps',
    icon: 'M7 2h10v20H7zM11 18h2',
    skills: [
      { name: 'React Native', icon: local('react.webp') },
      { name: 'Expo', icon: local('expogo.webp'), mono: true },
    ],
  },
  {
    title: 'Databases & BaaS',
    blurb: 'Storing & modelling data',
    icon: 'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zM4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
    skills: [
      { name: 'PostgreSQL', icon: local('postgresql.svg') },
      { name: 'Supabase', icon: local('supabase.svg'), learning: true },
      { name: 'MySQL', icon: local('mysql.webp'), lift: true },
      { name: 'MariaDB', icon: local('mariadb.webp'), lift: true },
      { name: 'MongoDB', icon: local('mongodb.webp') },
      { name: 'H2', icon: local('h2.webp'), lift: true },
    ],
  },
  {
    title: 'Cloud & DevOps',
    blurb: 'Shipping & automating',
    icon: 'M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 0 9.5z',
    skills: [
      { name: 'AWS', icon: local('aws.webp') },
      { name: 'Docker', icon: local('docker.webp') },
      { name: 'Kubernetes', icon: local('kubernetes.webp') },
      { name: 'Terraform', icon: local('terraform.webp') },
      { name: 'GitHub Actions', icon: local('github-actions.webp') },
      { name: 'Jenkins', icon: local('jenkins.webp') },
      { name: 'Makefile', icon: local('makefile.webp') },
    ],
  },
  {
    title: 'Desktop',
    blurb: 'Native desktop apps',
    icon: 'M3 4h18v12H3zM8 20h8M12 16v4',
    skills: [
      { name: 'JavaFX', icon: local('javafx.webp'), lift: true },
      { name: 'WPF', icon: local('wpf.webp') },
      { name: 'Scene Builder', icon: local('scenebuildier.webp') },
    ],
  },
  {
    title: 'Testing & Docs',
    blurb: 'Quality & documentation',
    icon: 'M4 4h16v16H4zM8 12l3 3 5-6',
    skills: [
      { name: 'JUnit 5', icon: local('junit5.webp') },
      { name: 'Selenium', icon: local('selenium.webp') },
      { name: 'JaCoCo', icon: local('jacoco.webp'), lift: true },
      { name: 'Swagger', icon: local('swagger.webp') },
      { name: 'JavaDoc', icon: local('javadoc.webp'), mono: true },
    ],
  },
  {
    title: 'Tools & Productivity',
    blurb: 'Everyday workflow',
    icon: 'M4 5h16v14H4zM7.5 9.5l3 2.5-3 2.5M12.5 15H16',
    skills: [
      { name: 'Git', icon: local('git.webp') },
      { name: 'GitHub', icon: local('github.webp'), mono: true },
      { name: 'Postman', icon: local('postman.webp') },
      { name: 'Figma', icon: local('figma.webp') },
      { name: 'Draw.io', icon: local('drawio.webp') },
      { name: 'Trello', icon: local('trello.webp') },
      { name: 'Microsoft Office', icon: local('office.webp') },
    ],
  },
  {
    title: 'Game Dev & 3D',
    blurb: 'Games, VR & 3D',
    icon: 'M7 8h10a5 5 0 0 1 5 5v1a3 3 0 0 1-5.4 1.8L15 14H9l-1.6 1.8A3 3 0 0 1 2 14v-1a5 5 0 0 1 5-5zM8 10.5v4M6 12.5h4M15.5 12h.01M17.5 14h.01',
    skills: [
      { name: 'Unity', icon: local('unity.webp'), mono: true },
      { name: 'Godot', icon: local('godot.svg'), learning: true },
      { name: 'Blender', icon: local('blender.svg'), learning: true },
    ],
  },
  {
    title: 'Hardware & IoT',
    blurb: 'Sensors & Raspberry Pi',
    icon: 'M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4',
    skills: [{ name: 'Raspberry Pi', icon: local('raspberrypi.webp') }],
  },
];

/** Every skill once (React and React Native share an icon, so dedupe by icon). */
export const ALL_SKILLS: Skill[] = SKILL_CATEGORIES.flatMap((c) => c.skills).filter(
  (skill, i, list) => list.findIndex((s) => s.icon === skill.icon) === i,
);

export const LEARNING_SKILLS: Skill[] = ALL_SKILLS.filter((s) => s.learning);

/** What I use most, in this order. */
const CORE_ORDER = ['Java', 'Spring Boot'];
export const CORE_SKILLS: Skill[] = ALL_SKILLS.filter((s) => s.core).sort(
  (a, b) => CORE_ORDER.indexOf(a.name) - CORE_ORDER.indexOf(b.name),
);

/** Databases I use through those backends (ORMs, drivers), not on their own. */
const DATA_LAYER_NAMES = ['PostgreSQL', 'MongoDB', 'SQL'];
export const DATA_LAYER: Skill[] = DATA_LAYER_NAMES.map(
  (name) => ALL_SKILLS.find((s) => s.name === name)!,
);
