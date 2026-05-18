import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-screenshot-frame-icon',
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
  <path d="M240-680q-17 0-28.5-11.5T200-720v-80q0-33 23.5-56.5T280-880h80q17 0 28.5 11.5T400-840q0 17-11.5 28.5T360-800h-80v80q0 17-11.5 28.5T240-680Zm40 600q-33 0-56.5-23.5T200-160v-80q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240v80h80q17 0 28.5 11.5T400-120q0 17-11.5 28.5T360-80h-80Zm440-600q-17 0-28.5-11.5T680-720v-80h-80q-17 0-28.5-11.5T560-840q0-17 11.5-28.5T600-880h80q33 0 56.5 23.5T760-800v80q0 17-11.5 28.5T720-680ZM600-80q-17 0-28.5-11.5T560-120q0-17 11.5-28.5T600-160h80v-80q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240v80q0 33-23.5 56.5T680-80h-80Z"/>
</svg>`,
})
export class MsrfScreenshotFrameIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
