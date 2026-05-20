import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-flights-and-hotels-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M360-240q-33 0-56.5-23.5T280-320q0-33 23.5-56.5T360-400q33 0 56.5 23.5T440-320q0 33-23.5 56.5T360-240ZM200-40q-17 0-28.5-11.5T160-80v-320q0-17 11.5-28.5T200-440q17 0 28.5 11.5T240-400v200h240v-160q0-17 11.5-28.5T520-400h200q33 0 56.5 23.5T800-320v240q0 17-11.5 28.5T760-40q-17 0-28.5-11.5T720-80v-40H240v40q0 17-11.5 28.5T200-40Zm312-614L406-548l9 58q1 5-.5 9t-5.5 8l-4 4q-8 8-17.5 6T373-474l-34-64-68-37q-8-4-9-12.5t5-14.5l8-8q2-2 14-5l60 8 106-106-188-102q-11-5-12-17t7-20l7-7q5-5 10.5-6.5t11.5.5l251 65 108-108q12-12 29-12t29 12q12 12 12 29t-12 29L600-742l64 250q2 7 .5 13t-6.5 11l-4 4q-9 9-22 7t-19-13L512-654Z"/>
</svg>`,
})
export class MsrfFlightsAndHotelsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
