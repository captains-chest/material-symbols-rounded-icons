import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-24fps-select-icon',
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
  <path d="M720-400q-17 0-28.5-11.5T680-440v-80H560q-17 0-28.5-11.5T520-560v-200q0-17 11.5-28.5T560-800q17 0 28.5 11.5T600-760v160h80v-160q0-17 11.5-28.5T720-800q17 0 28.5 11.5T760-760v160h40q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520h-40v80q0 17-11.5 28.5T720-400Zm-480 0q-17 0-28.5-11.5T200-440v-120q0-33 23.5-56.5T280-640h80v-80H240q-17 0-28.5-11.5T200-760q0-17 11.5-28.5T240-800h120q33 0 56.5 23.5T440-720v80q0 33-23.5 56.5T360-560h-80v80h120q17 0 28.5 11.5T440-440q0 17-11.5 28.5T400-400H240ZM160-80q-17 0-28.5-11.5T120-120v-120q0-17 11.5-28.5T160-280q17 0 28.5 11.5T200-240v120q0 17-11.5 28.5T160-80Zm160 0q-17 0-28.5-11.5T280-120v-120q0-17 11.5-28.5T320-280q17 0 28.5 11.5T360-240v120q0 17-11.5 28.5T320-80Zm160 0q-17 0-28.5-11.5T440-120v-120q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v120q0 17-11.5 28.5T480-80Zm160 0q-17 0-28.5-11.5T600-120v-120q0-17 11.5-28.5T640-280h160q17 0 28.5 11.5T840-240v120q0 17-11.5 28.5T800-80H640Z"/>
</svg>`,
})
export class Msrf24fpsSelectIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
