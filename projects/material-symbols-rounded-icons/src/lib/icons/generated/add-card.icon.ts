import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-add-card-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v200q0 17-11.5 28.5T840-480H160v240h360q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160H160Zm0-480h640v-80H160v80Zm600 440h-80q-17 0-28.5-11.5T640-240q0-17 11.5-28.5T680-280h80v-80q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v80h80q17 0 28.5 11.5T960-240q0 17-11.5 28.5T920-200h-80v80q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120v-80Zm-600-40v-480 480Z"/>
</svg>`,
})
export class MsrAddCardIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
