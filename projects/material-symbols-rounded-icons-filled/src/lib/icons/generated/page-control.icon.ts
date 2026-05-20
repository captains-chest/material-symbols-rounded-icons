import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-page-control-icon',
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
  <path d="M160-400q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm0-54q11 0 18.5-7.5T186-480q0-11-7.5-18.5T160-506q-11 0-18.5 7.5T134-480q0 11 7.5 18.5T160-454Zm214 54q-33 0-56.5-23.5T294-480q0-33 23.5-56.5T374-560q33 0 56.5 23.5T454-480q0 33-23.5 56.5T374-400Zm0-54q11 0 18.5-7.5T400-480q0-11-7.5-18.5T374-506q-11 0-18.5 7.5T348-480q0 11 7.5 18.5T374-454Zm212 54q-33 0-56.5-23.5T506-480q0-33 23.5-56.5T586-560q33 0 56.5 23.5T666-480q0 33-23.5 56.5T586-400Zm0-54q11 0 18.5-7.5T612-480q0-11-7.5-18.5T586-506q-11 0-18.5 7.5T560-480q0 11 7.5 18.5T586-454Zm214 54q-33 0-56.5-23.5T720-480q0-33 23.5-56.5T800-560q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400Z"/>
</svg>`,
})
export class MsrfPageControlIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
