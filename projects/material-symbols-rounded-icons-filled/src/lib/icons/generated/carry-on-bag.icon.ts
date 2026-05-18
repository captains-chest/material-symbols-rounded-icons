import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-carry-on-bag-icon',
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
  <path d="M640-100q-25 0-42.5-17.5T580-160q0-25 17.5-42.5T640-220q25 0 42.5 17.5T700-160q0 25-17.5 42.5T640-100Zm-320-20q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h40v560h-40Zm100 0v-560h140v-120h-40q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h80q17 0 28.5 11.5T640-840v560q-50 0-85 35t-35 85q0 11 1.5 20.5T527-120H420Z"/>
</svg>`,
})
export class MsrfCarryOnBagIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
