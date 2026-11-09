import { Component, ElementRef, afterNextRender, signal, viewChild } from '@angular/core';
import { animate, inView } from 'motion';
import { CORE_SKILLS, DATA_LAYER, LEARNING_SKILLS, SKILL_CATEGORIES } from '../data/skills';
import { Reveal } from '../shared/reveal.directive';
import { SectionHeader } from '../shared/section-header';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  caption: string;
  /** 24x24 stroke icon path. */
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories = SKILL_CATEGORIES;
  protected readonly core = CORE_SKILLS;
  protected readonly dataLayer = DATA_LAYER;
  /** One-line role shown under each core skill. */
  protected readonly coreRole: Record<string, string> = {
    Java: 'Main language',
    'Spring Boot': 'REST APIs & backends',
  };
  /** Learning skills with the area (category) they belong to. */
  protected readonly learning = SKILL_CATEGORIES.flatMap((category) =>
    category.skills
      .filter((skill) => skill.learning)
      .map((skill) => ({ ...skill, area: category.title })),
  );

  /** Keep "Projects" and "Areas" in sync with the Projects section when you add one. */
  protected readonly stats: Stat[] = [
    {
      value: 12,
      label: 'Projects',
      caption: 'School, team & personal',
      icon: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
    },
    {
      value: 6,
      label: 'Areas',
      caption: 'Web, API, mobile, games, IoT & desktop',
      icon: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',
    },
    {
      value: 4,
      suffix: '+',
      label: 'Years coding',
      caption: 'And still learning every week',
      icon: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    },
    {
      value: LEARNING_SKILLS.length,
      label: 'Learning now',
      caption: 'Kotlin, Angular, FastAPI…',
      icon: 'M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2zM22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z',
    },
  ];

  /** Numbers shown on screen: they count up from 0 the first time the band is visible. */
  protected readonly shown = this.stats.map(() => signal(0));

  private readonly band = viewChild.required<ElementRef<HTMLElement>>('band');

  constructor() {
    afterNextRender(() => {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const showFinal = () => this.stats.forEach((s, i) => this.shown[i].set(s.value));
      if (reduceMotion) return showFinal();

      inView(
        this.band().nativeElement,
        () => {
          this.stats.forEach((s, i) =>
            animate(0, s.value, {
              duration: 1.1,
              delay: i * 0.08,
              ease: [0.2, 0.7, 0.2, 1],
              onUpdate: (v) => this.shown[i].set(Math.round(v)),
            }),
          );
        },
        { amount: 0.4 },
      );
    });
  }
}
