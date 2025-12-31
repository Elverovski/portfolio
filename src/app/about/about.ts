import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-black mb-2">About Me</h2>
        <p class="text-gray-500 mb-16">Computer Science Student & Aspiring Developer</p>
        
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- Text column -->
          <div class="space-y-8">
            <div class="space-y-6">
              <p class="text-gray-700 leading-relaxed text-lg">
                I'm a motivated computer science student passionate about software 
                development and building innovative solutions. I focus on writing 
                clean, efficient code and creating applications that solve real-world 
                problems.
              </p>
              
              <p class="text-gray-700 leading-relaxed">
                Currently expanding my expertise across different areas of software 
                development, from application design to database management, while 
                seeking opportunities to apply my knowledge in meaningful projects.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-black mb-3">What I Focus On</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <span class="text-black mr-2">▹</span>
                  <span>Developing robust and scalable applications</span>
                </li>
                <li class="flex items-start">
                  <span class="text-black mr-2">▹</span>
                  <span>Designing efficient database solutions</span>
                </li>
                <li class="flex items-start">
                  <span class="text-black mr-2">▹</span>
                  <span>Following software development best practices</span>
                </li>
                <li class="flex items-start">
                  <span class="text-black mr-2">▹</span>
                  <span>Learning new technologies and methodologies</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-black mb-3">What Drives Me</h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                I'm constantly learning and challenging myself to grow as a developer. 
                Every project is an opportunity to improve my skills and contribute 
                to innovative solutions in the tech industry. I'm eager to work on 
                diverse projects where I can make a real impact while continuing to 
                advance in the field of technology.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Problem Solver</span>
                <span class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Quick Learner</span>
                <span class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Detail-Oriented</span>
                <span class="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Curious</span>
              </div>
            </div>

            <p class="text-sm text-gray-500 italic border-l-4 border-black pl-4">
              "Always eager to take on new challenges and collaborate on projects 
              that push the boundaries of what's possible with code."
            </p>
          </div>
          
          <!-- Image column -->
          <div class="flex justify-center md:justify-end">
            <div class="relative">
              <div class="w-96 h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
                <img 
                  src="assets/personal/profile.jpg" 
                  alt="Profile picture"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-300 rounded-full opacity-30"></div>
              <div class="absolute -top-4 -left-4 w-16 h-16 bg-gray-400 rounded-full opacity-30"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}