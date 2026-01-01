import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  name: string;
  url: string;
  type: 'github' | 'linkedin' | 'twitter' | 'instagram';
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/elverovski',
      type: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mario-enrique-silva-benavides-b884a0396/',
      type: 'linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/elverovski',
      type: 'twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/elverovsky',
      type: 'instagram'
    },
  ];

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      // TODO: Implement submission logic
      alert('Message sent! (This is a demo)');
      this.resetForm();
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}