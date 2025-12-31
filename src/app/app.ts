import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div class="min-h-screen bg-white">
      <app-navbar />
      <app-home />
      <app-about />
      <app-skills />
      <app-projects />
      <app-contact />
      
      <footer class="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto text-center">
          <p class="text-gray-400">© 2024 Mario Silva. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {}