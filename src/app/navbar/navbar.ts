import { Component, OnInit, inject, signal } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../data/profile';
import { scrollToSection } from '../shared/scroll';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Navbar implements OnInit {
  protected readonly links = NAV_LINKS;
  protected readonly profile = PROFILE;
  protected readonly themeService = inject(ThemeService);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly active = signal('home');
  protected readonly progress = signal(0);

  ngOnInit(): void {
    this.onScroll();
  }

  protected onScroll(): void {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrolled.set(y > 8);
    this.progress.set(max > 0 ? Math.min(y / max, 1) : 0);

    let current = this.links[0].id;
    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = link.id;
    }
    if (max > 0 && max - y < 4) current = this.links[this.links.length - 1].id;
    this.active.set(current);
  }

  protected go(id: string): void {
    scrollToSection(id);
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
