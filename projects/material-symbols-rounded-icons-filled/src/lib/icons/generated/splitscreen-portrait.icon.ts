import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-splitscreen-portrait-icon',
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
  <path d="M360-240h240q17 0 28.5-11.5T640-280v-120q0-17-11.5-28.5T600-440H360q-17 0-28.5 11.5T320-400v120q0 17 11.5 28.5T360-240Zm0-280h240q17 0 28.5-11.5T640-560v-120q0-17-11.5-28.5T600-720H360q-17 0-28.5 11.5T320-680v120q0 17 11.5 28.5T360-520Zm440 360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z"/>
</svg>`,
})
export class MsrfSplitscreenPortraitIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
