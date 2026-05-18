import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-fax-icon',
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
  <path d="M320-160v-560q0-33 23.5-56.5T400-800h240q33 0 56.5 23.5T720-720v120h40q50 0 85 35t35 85v240q0 33-23.5 56.5T800-160H320Zm-140 40q42 0 71-29t29-71v-320q0-42-29-71t-71-29q-42 0-71 29t-29 71v320q0 42 29 71t71 29Zm220-480h240v-120H400v120Zm240 200q17 0 28.5-11.5T680-440q0-17-11.5-28.5T640-480q-17 0-28.5 11.5T600-440q0 17 11.5 28.5T640-400Zm120 0q17 0 28.5-11.5T800-440q0-17-11.5-28.5T760-480q-17 0-28.5 11.5T720-440q0 17 11.5 28.5T760-400ZM640-280q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360q-17 0-28.5 11.5T600-320q0 17 11.5 28.5T640-280Zm120 0q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280Zm-320 0h80q17 0 28.5-11.5T560-320v-120q0-17-11.5-28.5T520-480h-80q-17 0-28.5 11.5T400-440v120q0 17 11.5 28.5T440-280Z"/>
</svg>`,
})
export class MsrfFaxIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
