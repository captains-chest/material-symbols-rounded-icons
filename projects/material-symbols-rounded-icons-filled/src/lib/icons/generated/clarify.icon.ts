import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-clarify-icon',
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
  <path d="M280-280h200q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm400-400q-17 0-28.5 11.5T640-640v320q0 17 11.5 28.5T680-280q17 0 28.5-11.5T720-320v-320q0-17-11.5-28.5T680-680ZM280-440h200q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm0-160h200q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Z"/>
</svg>`,
})
export class MsrfClarifyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
