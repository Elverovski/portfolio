import { Component, Injectable, inject, signal } from '@angular/core';

/** Tiny global notification (e.g. "username copied"). */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly message = signal<string | null>(null);
  private timer?: ReturnType<typeof setTimeout>;

  show(message: string, durationMs = 2600): void {
    this.message.set(message);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.message.set(null), durationMs);
  }
}

@Component({
  selector: 'app-toast',
  template: `
    <div
      role="status"
      aria-live="polite"
      class="fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4 pointer-events-none"
    >
      @if (toast.message(); as message) {
        <div
          class="toast-in flex items-center gap-2.5 bg-black text-white px-5 py-3 text-sm font-medium shadow-lg"
        >
          <svg
            class="w-4 h-4 text-green-400 shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {{ message }}
        </div>
      }
    </div>
  `,
})
export class Toast {
  protected readonly toast = inject(ToastService);
}
