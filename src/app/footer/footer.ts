import { Component } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../data/profile';
import { scrollToSection } from '../shared/scroll';
import { Reveal } from '../shared/reveal.directive';
import { SocialIcon } from '../shared/social-icon';
import { SocialLinkDirective } from '../shared/social-link.directive';

@Component({
  selector: 'app-footer',
  imports: [Reveal, SocialIcon, SocialLinkDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();

  protected readonly interests = [
    'Backend Development',
    'Web Development',
    'Mobile Development',
    'Game Development',
    'Desktop Applications',
    'Software Architecture',
    'Cloud & DevOps',
    'Cybersecurity',
  ];

  protected go(id: string): void {
    scrollToSection(id);
  }
}
