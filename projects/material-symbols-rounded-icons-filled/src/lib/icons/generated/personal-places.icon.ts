import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-personal-places-icon',
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
  <path d="M240-160v-560q0-33 23.5-56.5T320-800h298q20 0 37 9t28 25l85 120q14 21 14 46t-14 46l-85 120q-11 16-28 25t-37 9H320v240q0 17-11.5 28.5T280-120q-17 0-28.5-11.5T240-160Z"/>
</svg>`,
})
export class MsrfPersonalPlacesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
