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

  /**
   * Typewriter roles, one per kind of project in the Projects section
   * (API, Web, Mobile, Games, Desktop, IoT). Backend goes first (main focus)
   * and is the one shown with reduced motion.
   */
  protected readonly roles = [
    'Backend Developer', // Trackedias API, Spring Boot back ends
    'Full Stack Developer', // Assetra, Quoi Regarder
    'Mobile Developer', // Crypto Tracker, Blackjack Chromecast
    'Game Developer', // Kings and Pigs, Into The Backrooms (VR)
    'Desktop Developer', // Payment Reminder (WPF), Système Scolaire (JavaFX)
    'IoT Developer', // Raspberry Pi projects
  ];

  protected readonly displayedText = signal('');

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  private readonly typingSpeed = 85;
  private readonly deletingSpeed = 40;
  private readonly delayBetweenWords = 1600;
  /** The first word (Backend) stays on screen a bit longer. */
  private readonly delayFirstWord = 2600;

  ngOnInit(): void {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.displayedText.set(this.roles[0]);
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
    const word = this.roles[this.wordIndex];
    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting) {
      this.charIndex++;
      if (this.charIndex === word.length) {
        this.isDeleting = true;
        delay = this.wordIndex === 0 ? this.delayFirstWord : this.delayBetweenWords;
      }
    } else {
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.roles.length;
        delay = this.typingSpeed * 3;
      }
    }

    this.displayedText.set(word.slice(0, this.charIndex));
    this.timeoutId = setTimeout(() => this.type(), delay);
  }
}
