import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-grain-icon',
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
  <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm320 0q-33 0-56.5-23.5T480-240q0-33 23.5-56.5T560-320q33 0 56.5 23.5T640-240q0 33-23.5 56.5T560-160ZM400-320q-33 0-56.5-23.5T320-400q0-33 23.5-56.5T400-480q33 0 56.5 23.5T480-400q0 33-23.5 56.5T400-320Zm320 0q-33 0-56.5-23.5T640-400q0-33 23.5-56.5T720-480q33 0 56.5 23.5T800-400q0 33-23.5 56.5T720-320ZM240-480q-33 0-56.5-23.5T160-560q0-33 23.5-56.5T240-640q33 0 56.5 23.5T320-560q0 33-23.5 56.5T240-480Zm320 0q-33 0-56.5-23.5T480-560q0-33 23.5-56.5T560-640q33 0 56.5 23.5T640-560q0 33-23.5 56.5T560-480ZM400-640q-33 0-56.5-23.5T320-720q0-33 23.5-56.5T400-800q33 0 56.5 23.5T480-720q0 33-23.5 56.5T400-640Zm320 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/>
</svg>`,
})
export class MsrGrainIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
