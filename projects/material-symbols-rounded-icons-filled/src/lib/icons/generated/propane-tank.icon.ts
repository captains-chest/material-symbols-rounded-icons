import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-propane-tank-icon',
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
  <path d="M160-440v-120q0-57 34-99t86-56v-85q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v85q52 14 86 56t34 99v120H160ZM320-80q-66 0-113-47t-47-113v-120h640v120q0 66-47 113T640-80H320Zm40-640h80q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720h80v-80H360v80Z"/>
</svg>`,
})
export class MsrfPropaneTankIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
