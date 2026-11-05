import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Toast } from './shared/toast';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Skills, Projects, Contact, Footer, Toast],
  template: `
    <app-navbar />
    <main>
      <app-home />
      <app-about />
      <app-skills />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
    <app-toast />
  `
})
export class AppComponent {}