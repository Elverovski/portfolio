import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy {
  words = [
    'Full Stack Developer',
    'Software Developer',
    'Game Developer',
    'IT Support Technician',
    'Cybersecurity Enthusiast',
    'Pentesting Enthusiast',
    'Cloud-Focused Developer',
    'Network & Systems Learner',
    'Problem Solver',
    'Analytical Thinker',
    'Continuous Learner',
    'Gamer',
    'Content Creator'
  ];


  displayedText = '';

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  typingSpeed = 100;
  deletingSpeed = 50;
  delayBetweenWords = 1500;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  private type() {
    const currentWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      this.displayedText = currentWord.slice(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), this.delayBetweenWords);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
      }
    } else {
      this.charIndex--;
      this.displayedText = currentWord.slice(0, this.charIndex);

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
      } else {
        this.timeoutId = setTimeout(() => this.type(), this.deletingSpeed);
      }
    }

    this.cdr.detectChanges();
  }
}