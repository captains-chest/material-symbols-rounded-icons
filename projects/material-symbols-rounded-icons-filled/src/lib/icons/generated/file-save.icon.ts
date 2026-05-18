import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-file-save-icon',
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
  <path d="M692-148 588-252q-11-11-11-28t11-28q11-11 28-11t28 11l36 36v-127q0-17 11.5-28.5T720-439q17 0 28.5 11.5T760-399v127l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L748-148q-12 12-28 12t-28-12ZM600 0q-17 0-28.5-11.5T560-40q0-17 11.5-28.5T600-80h240q17 0 28.5 11.5T880-40q0 17-11.5 28.5T840 0H600ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h247q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v48q0 17-11.5 28.5T720-519H560q-33 0-56.5 23.5T480-439v239q0 17-11.5 28.5T440-160H240Zm300-440h140L480-800l200 200-200-200v140q0 25 17.5 42.5T540-600Z"/>
</svg>`,
})
export class MsrfFileSaveIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
