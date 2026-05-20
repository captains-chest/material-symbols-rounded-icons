import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-tibia-icon',
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
  <path d="m360-592-85-85q-17-17-26-39t-9-45q0-50 34.5-84.5T358-880h244q49 0 83 34.5t34 83.5q0 25-10 47.5T682-675l-82 82v222l84 84q17 17 26.5 39t9.5 46q0 51-35 86t-86 35q-24 0-46-9t-39-26q-7-8-15.5-11.5T480-131q-10 0-18.5 4T446-116q-17 17-39 26t-46 9q-51 0-86-35t-35-86q0-24 9-46t26-39l85-83v-222Z"/>
</svg>`,
})
export class MsrfTibiaIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
