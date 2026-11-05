import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ALL_SKILLS } from '../data/skills';
import { PROFILE } from '../data/profile';
import { scrollToSection } from '../shared/scroll';
import { SocialIcon } from '../shared/social-icon';
import { SocialLinkDirective } from '../shared/social-link.directive';

@Component({
  selector: 'app-home',
  imports: [SocialIcon, SocialLinkDirective],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  /** Duplicated so the CSS marquee can loop seamlessly. */
  protected readonly marquee = [...ALL_SKILLS, ...ALL_SKILLS];

  private readonly words = [
    'Backend Developer',
    'Full Stack Developer',
    'Mobile Developer',
    'Software Developer',
    'Game Developer',
    'Cloud-Focused Developer',
    'Cybersecurity Enthusiast',
    'IT Support Technician',
    'Problem Solver',
    'Continuous Learner',
  ];

  protected readonly displayedText = signal('');

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  private readonly typingSpeed = 85;
  private readonly deletingSpeed = 40;
  private readonly delayBetweenWords = 1600;

  ngOnInit(): void {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.displayedText.set(this.words[0]);
      return;
    }
    this.type();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

  protected go(id: string): void {
    scrollToSection(id);
  }

  private type(): void {
    const word = this.words[this.wordIndex];
    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting) {
      this.charIndex++;
      if (this.charIndex === word.length) {
        this.isDeleting = true;
        delay = this.delayBetweenWords;
      }
    } else {
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        delay = this.typingSpeed * 3;
      }
    }

    this.displayedText.set(word.slice(0, this.charIndex));
    this.timeoutId = setTimeout(() => this.type(), delay);
  }
}
