import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-comedy-mask-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M480-280q60 0 104.5-39t53.5-97q2-10-4.5-17t-17.5-7H344q-10 0-17 7t-5 17q9 58 53.5 97T480-280Zm0 200q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440v-360q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v360q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-80q116 0 198-82t82-198v-360H200v360q0 116 82 198t198 82Zm0-320ZM360-680q-27 0-47.5 16T284-624q-3 9 3 16.5t17 7.5h112q10 0 16-7.5t4-16.5q-8-24-28.5-40T360-680Zm240 0q-27 0-47.5 16T524-624q-3 9 3 16.5t17 7.5h112q10 0 16-7.5t4-16.5q-8-24-28.5-40T600-680Z"/>
</svg>`,
})
export class MsrComedyMaskIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
