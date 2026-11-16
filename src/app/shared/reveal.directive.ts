import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  input,
} from '@angular/core';

/** Fades/slides an element in the first time it scrolls into view. */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal implements OnInit, OnDestroy {
  readonly delay = input(0, { alias: 'revealDelay' });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    if (this.delay()) node.style.transitionDelay = `${this.delay()}ms`;
    // Prerendering: leave the element hidden so it still animates in once the page loads.
    if (!this.isBrowser) return;

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
