import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-military-tech-icon',
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
  <path d="m480-174-74 56q-12 9-24 .5t-7-22.5l29-92-73-52q-12-8-7-22t19-14h89l28-92-142-84q-18-11-28-29t-10-41v-234q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v234q0 23-10 41t-28 29l-142 84 28 92h89q14 0 19 14t-7 22l-73 52 29 92q5 14-7 22.5t-24-.5l-74-56Zm-40-626v282l40 24 40-24v-282h-80Z"/>
</svg>`,
})
export class MsrfMilitaryTechIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
