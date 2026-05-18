import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sports-gymnastics-icon',
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
  <path d="m478-118-18-362-140-40H80q-17 0-28.5-11.5T40-560q0-17 11.5-28.5T80-600h200l250-179q13-9 28-7t26 14q11 14 9 30.5T577-714l-131 94h114l286-165q11-7 24.5-4t24.5 16q11 12 9 27.5T889-720L580-480l-18 362q-1 16-13 27t-31 11q-16 0-27.5-11T478-118ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Z"/>
</svg>`,
})
export class MsrSportsGymnasticsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
