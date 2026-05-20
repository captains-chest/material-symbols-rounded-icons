import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-speed-2-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M536-343q26-26 24-60.5T530-459q-60-47-122-87t-125-80q-14-9-26 3t-3 26q40 63 80 125.5T418-347q20 29 56 29.5t62-25.5ZM205-160q-22 0-40.5-9.5T135-198q-28-48-42-100.5T79-406q0-35 7-69t21-66q6-15 22-20.5t30 2.5q14 8 19.5 23.5T178-504q-9 24-14 49t-5 51q0 44 11.5 85.5T205-240h551q21-36 32.5-76.5T800-400q0-133-93.5-226.5T480-720q-27 0-53 5t-51 14q-16 5-31-.5T322-722q-8-15-2-30.5t21-21.5q33-13 68-19.5t71-6.5q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-400q0 54-14 105t-40 97q-11 19-30 28.5t-40 9.5H205Zm274-238Z"/>
</svg>`,
})
export class MsrSpeed2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
