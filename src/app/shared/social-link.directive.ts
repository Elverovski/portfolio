import { Directive, inject, input } from '@angular/core';
import { SocialLink } from '../data/profile';
import { ToastService } from './toast';

/**
 * Put on an <a> for a social profile.
 * - With `url`: a normal external link (new tab).
 * - Without `url` but with `copy` (e.g. Discord, which has no public username links):
 *   behaves like a button that copies the username and shows a toast.
 */
@Directive({
  selector: 'a[appSocialLink]',
  host: {
    '[attr.href]': 'link().url ?? null',
    '[attr.target]': "link().url ? '_blank' : null",
    '[attr.rel]': "link().url ? 'noopener noreferrer' : null",
    '[attr.role]': "link().url ? null : 'button'",
    '[attr.tabindex]': 'link().url ? null : 0',
    '[class.cursor-pointer]': '!link().url',
    '(click)': 'activate($event)',
    '(keydown.enter)': 'activate($event)',
    '(keydown.space)': 'activate($event)',
  },
})
export class SocialLinkDirective {
  readonly link = input.required<SocialLink>({ alias: 'appSocialLink' });
  private readonly toast = inject(ToastService);

  protected async activate(event: Event): Promise<void> {
    const { url, copy, name } = this.link();
    if (url || !copy) return;
    event.preventDefault();
    const copied = await copyToClipboard(copy);
    this.toast.show(copied ? `${name} username “${copy}” copied` : `${name}: ${copy}`);
  }
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers/contexts without the async clipboard API.
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}
