import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-villa-icon',
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
  <path d="M360-120v-280q0-33 23.5-56.5T440-480h240q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v360H640v-160q0-17-11.5-28.5T600-320q-17 0-28.5 11.5T560-280v160H360Zm-240 0v-465q0-25 14-45.5t37-29.5l415-159q20-8 37 4t17 33v222H400q-50 0-85 35t-35 85v320H120Z"/>
</svg>`,
})
export class MsrfVillaIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
