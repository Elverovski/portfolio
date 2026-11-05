import { Component } from '@angular/core';
import { ALL_SKILLS, LEARNING_SKILLS, SKILL_CATEGORIES } from '../data/skills';
import { Reveal } from '../shared/reveal.directive';
import { SectionHeader } from '../shared/section-header';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories = SKILL_CATEGORIES;
  /** Learning skills with the area (category) they belong to. */
  protected readonly learning = SKILL_CATEGORIES.flatMap((category) =>
    category.skills
      .filter((skill) => skill.learning)
      .map((skill) => ({ ...skill, area: category.title })),
  );

  protected readonly stats = [
    { value: `${ALL_SKILLS.length}`, label: 'Technologies' },
    { value: `${SKILL_CATEGORIES.length}`, label: 'Categories' },
    { value: `${LEARNING_SKILLS.length}`, label: 'Learning now' },
    { value: '3+', label: 'Years coding' },
  ];
}
