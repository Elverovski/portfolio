import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Navbar, Home, About, Skills, Projects, Contact, Footer],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar />
      <app-home />
      <app-about />
      <app-skills />
      <app-projects />
      <app-contact />
      <app-footer />
    </div>
  `
})
export class AppComponent {}