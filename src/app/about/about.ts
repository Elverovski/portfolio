import { Component } from '@angular/core';
import { Reveal } from '../shared/reveal.directive';
import { SectionHeader } from '../shared/section-header';

@Component({
  selector: 'app-about',
  imports: [SectionHeader, Reveal],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  /** Concrete things a recruiter can check in the Projects section. */
  protected readonly focus = [
    'Building REST APIs with Java & Spring Boot',
    'Python on the backend — Flask, and now FastAPI',
    'Working with SQL and NoSQL databases through my APIs (PostgreSQL, MongoDB)',
    'Documenting and testing what I build (Swagger, JUnit 5)',
    'Writing clean, readable code a team can pick up',
  ];

  /** Other areas, each backed by at least one project. */
  protected readonly alsoBuilt = [
    'Full-stack web',
    'Mobile · React Native',
    'Games · Unity & VR',
    'IoT · Raspberry Pi',
    'Desktop · WPF & JavaFX',
  ];

  protected readonly facts = [
    { label: 'Studying', value: 'Software Engineering' },
    { label: 'Focus', value: 'Backend · APIs & data' },
    { label: 'Experience', value: '4+ years coding' },
    { label: 'Languages', value: 'Spanish · French · English' },
  ];
}
