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

@Component({
  selector: 'app-contact',
  imports: [FormsModule, SectionHeader, Reveal, SocialIcon, SocialLinkDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly sent = signal(false);
  protected formData: ContactForm = { name: '', email: '', message: '' };

  /** No backend: opens the visitor's mail client with the message pre-filled. */
  protected onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.formData;
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;

    this.sent.set(true);
    form.resetForm();
  }
}
