import { Component } from '@angular/core';
import { LEARNING_SKILLS } from '../data/skills';
import { Reveal } from '../shared/reveal.directive';
import { SectionHeader } from '../shared/section-header';

@Component({
  selector: 'app-about',
  imports: [SectionHeader, Reveal],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  protected readonly focus = [
    'Developing robust and scalable applications',
    'Designing efficient database solutions',
    'Following software development best practices',
    'Learning new technologies and methodologies',
  ];

  protected readonly traits = ['Problem Solver', 'Quick Learner', 'Detail-Oriented', 'Curious'];

  protected readonly facts = [
    { label: 'Studying', value: 'Software Engineering' },
    { label: 'Focus', value: 'Backend' },
    {
      label: 'Learning',
      value: LEARNING_SKILLS.map((s) => s.name).join(', '),
    },
  ];
}
