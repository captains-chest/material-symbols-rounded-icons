import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-lists-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M400-160q-33 0-56.5-23.5T320-240q0-33 23.5-56.5T400-320h400q33 0 56.5 23.5T880-240q0 33-23.5 56.5T800-160H400Zm0-240q-33 0-56.5-23.5T320-480q0-33 23.5-56.5T400-560h400q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400H400Zm0-240q-33 0-56.5-23.5T320-720q0-33 23.5-56.5T400-800h400q33 0 56.5 23.5T880-720q0 33-23.5 56.5T800-640H400Zm-240 0q-33 0-56.5-23.5T80-720q0-33 23.5-56.5T160-800q33 0 56.5 23.5T240-720q0 33-23.5 56.5T160-640Zm0 240q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm0 240q-33 0-56.5-23.5T80-240q0-33 23.5-56.5T160-320q33 0 56.5 23.5T240-240q0 33-23.5 56.5T160-160Z"/>
</svg>`,
})
export class MsrListsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
