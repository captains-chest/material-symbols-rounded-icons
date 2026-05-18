import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-anchor-icon',
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
  <path d="M480-80q-61 0-125-22t-116-60q-52-38-85.5-89T120-360v-80q0-12 11-18t21 2l91 68q14 11 15.5 29.5T247-327l-29 29q29 51 92 88t130 47v-357h-80q-17 0-28.5-11.5T320-560q0-17 11.5-28.5T360-600h80v-47q-35-13-57.5-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T520-647v47h80q17 0 28.5 11.5T640-560q0 17-11.5 28.5T600-520h-80v357q67-10 130-47t92-88l-29-29q-13-13-11.5-31.5T717-388l91-68q10-8 21-2t11 18v80q0 58-33.5 109T721-162q-52 38-116 60T480-80Zm0-640q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
</svg>`,
})
export class MsrAnchorIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
