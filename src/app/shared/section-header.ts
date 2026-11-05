import { Component, input } from '@angular/core';
import { Reveal } from './reveal.directive';

@Component({
  selector: 'app-section-header',
  imports: [Reveal],
  template: `
    <div appReveal class="mb-12 sm:mb-16">
      <div
        class="flex items-center gap-3 mb-4 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500"
      >
        <span class="font-semibold text-black">{{ index() }}</span>
        <span class="h-px w-10 bg-gray-300"></span>
        <span>{{ label() }}</span>
      </div>
      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeader {
  readonly index = input.required<string>();
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}
