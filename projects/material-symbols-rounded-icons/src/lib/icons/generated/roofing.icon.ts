import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-roofing-icon',
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
  <path d="M440-160q-33 0-56.5-23.5T360-240v-80q0-33 23.5-56.5T440-400h80q33 0 56.5 23.5T600-320v80q0 33-23.5 56.5T520-160h-80Zm0-80h80v-80h-80v80ZM120-464q-14 10-30 8t-26-16q-10-14-7.5-30T72-528l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l111 85v-22q0-25 17.5-42.5T700-800q25 0 42.5 17.5T760-740v114l129 98q13 10 15 26t-8 30q-10 14-26 16t-30-8L480-739 120-464Zm360 184Z"/>
</svg>`,
})
export class MsrRoofingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
