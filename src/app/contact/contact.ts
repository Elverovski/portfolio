import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PROFILE } from '../data/profile';
import { Reveal } from '../shared/reveal.directive';
import { SectionHeader } from '../shared/section-header';
import { SocialIcon } from '../shared/social-icon';
import { SocialLinkDirective } from '../shared/social-link.directive';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type SendStatus = 'idle' | 'sending' | 'sent' | 'opened-mail-app' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, SectionHeader, Reveal, SocialIcon, SocialLinkDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly status = signal<SendStatus>('idle');
  protected formData: ContactForm = { name: '', email: '', message: '' };
  /** Hidden anti-spam field (see template). */
  protected botcheck = false;

  /**
   * With a Web3Forms key the message is delivered by email directly (works for every
   * visitor). Without one it falls back to opening the visitor's email app.
   */
  protected async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.focusFirstInvalid();
      return;
    }

    const { name, email, message } = this.formData;
    const subject = `Portfolio contact — ${name}`;

    // Honeypot: real people never see this field; bots that fill every input do.
    // Pretend it worked and send nothing.
    if (this.botcheck) {
      this.status.set('sent');
      form.resetForm();
      return;
    }

    if (!this.profile.web3formsKey) {
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${this.profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      this.status.set('opened-mail-app');
      form.resetForm();
      return;
    }

    this.status.set('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.profile.web3formsKey,
          subject,
          from_name: 'Elverovski portfolio',
          name,
          email,
          message,
          botcheck: false,
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (!res.ok || !data.success) throw new Error('Web3Forms rejected the message');
      this.status.set('sent');
      form.resetForm();
    } catch {
      this.status.set('error');
    }
  }

  private focusFirstInvalid(): void {
    queueMicrotask(() =>
      document.querySelector<HTMLElement>('#contact form .ng-invalid:not(form)')?.focus(),
    );
  }
}
