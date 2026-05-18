import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stylus-note-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M120-349q0 29 20 45t66 21q16 2 25.5 14.5T240-240q-1 17-12 28t-27 9q-81-10-121-46.5T40-349q0-65 53.5-105.5T242-503q39-3 58.5-12.5T320-542q0-22-21-34.5T230-596q-16-2-25.5-15t-7.5-29q2-17 14-27.5t28-8.5q83 12 122 44.5t39 89.5q0 53-38.5 83T248-423q-64 5-96 23.5T120-349Zm435 119L390-395l345-345q20-20 47.5-20t47.5 20l70 70q20 20 20 47.5T900-575L555-230Zm-196 70q-17 4-30-9t-9-30l31-151 158 158-150 32Z"/>
</svg>`,
})
export class MsrfStylusNoteIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
