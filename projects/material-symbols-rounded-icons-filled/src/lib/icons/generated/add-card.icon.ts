import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-add-card-icon',
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
  <path d="M760-200h-80q-17 0-28.5-11.5T640-240q0-17 11.5-28.5T680-280h80v-80q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v80h80q17 0 28.5 11.5T960-240q0 17-11.5 28.5T920-200h-80v80q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120v-80ZM160-480h640v-160H160v160Zm0 320q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480h-80q-83 0-141.5 58.5T560-280v80q0 17-11.5 28.5T520-160H160Z"/>
</svg>`,
})
export class MsrfAddCardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
