import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/** Light/dark theme. The initial value is applied in index.html before Angular boots (no flash). */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(
    document.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light',
  );

  /** @param origin the clicked button: the new theme grows in a circle from its centre. */
  toggle(origin?: HTMLElement): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    const rect = origin?.getBoundingClientRect();
    const root = document.documentElement.style;
    root.setProperty('--vt-x', `${rect ? rect.left + rect.width / 2 : window.innerWidth}px`);
    root.setProperty('--vt-y', `${rect ? rect.top + rect.height / 2 : 0}px`);

    const apply = () => {
      document.documentElement.dataset['theme'] = next;
      this.theme.set(next);
    };

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !reduceMotion) doc.startViewTransition(apply);
    else apply();

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: theme just won't persist */
    }
  }
}
