import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-data-array-icon',
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
  <path d="M640-160q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h80v-480h-80q-17 0-28.5-11.5T600-760q0-17 11.5-28.5T640-800h80q33 0 56.5 23.5T800-720v480q0 33-23.5 56.5T720-160h-80Zm-400 0q-33 0-56.5-23.5T160-240v-480q0-33 23.5-56.5T240-800h80q17 0 28.5 11.5T360-760q0 17-11.5 28.5T320-720h-80v480h80q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160h-80Z"/>
</svg>`,
})
export class MsrfDataArrayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
