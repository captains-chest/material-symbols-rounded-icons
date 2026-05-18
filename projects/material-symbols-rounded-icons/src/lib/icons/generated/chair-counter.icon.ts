import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-chair-counter-icon',
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
  <path d="M394-680h172l14-40h140q0-33-23.5-56.5T640-800H320q-33 0-56.5 23.5T240-720h140l14 40ZM307-80q-11 0-19-8.5t-8-22.5q0-17 14-32t42-28q25-11 51-17.5t53-9.5v-82h-80q-17 0-28.5-11.5T320-320q0-17 11.5-28.5T360-360h80v-240h-60q-20 0-35-11.5T324-640h-84q-32 0-56-21.5T160-715q0-69 46-117t114-48h320q68 0 114 48t46 117q0 32-24 53.5T720-640h-84q-6 17-21 28.5T580-600h-60v240h80q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280h-80v82q27 3 53 9.5t51 17.5q28 13 42 28t14 32q0 14-8 22.5T653-80H307Zm87-600h172-172Z"/>
</svg>`,
})
export class MsrChairCounterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
