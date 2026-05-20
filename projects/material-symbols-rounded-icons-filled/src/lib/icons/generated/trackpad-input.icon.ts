import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-trackpad-input-icon',
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
  <path d="M593-80q-24 0-46-9t-39-26L332-292q-11-11-11.5-27.5T331-348l6-6q14-14 34-19t40 0l69 20v-287q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v240h40v-120q0-17 11.5-28.5T640-560q17 0 28.5 11.5T680-520v120h40v-80q0-17 11.5-28.5T760-520q17 0 28.5 11.5T800-480v80h40q0-17 11.5-28.5T880-440q17 0 28.5 11.5T920-400v160q0 66-47 113T760-80H593ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h600q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-120H160v480h72q17 0 28.5 11.5T272-240q0 17-11.5 28.5T232-200h-72Z"/>
</svg>`,
})
export class MsrfTrackpadInputIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
