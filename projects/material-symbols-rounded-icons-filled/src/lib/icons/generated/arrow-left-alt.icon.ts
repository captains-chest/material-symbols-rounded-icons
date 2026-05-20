import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-arrow-left-alt-icon',
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
  <path d="m314-440 114 114q12 12 11.5 28T428-270q-12 12-28.5 12.5T371-269L188-452q-12-12-12-28t12-28l183-183q12-12 28.5-11.5T428-690q11 12 11.5 28T428-634L314-520h446q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H314Z"/>
</svg>`,
})
export class MsrfArrowLeftAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
