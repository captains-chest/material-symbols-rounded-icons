import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-developer-mode-icon',
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
  <path d="m274-480 98 98q12 12 11.5 28T372-326q-12 12-28.5 12.5T315-325L188-452q-12-12-12-28t12-28l127-127q12-12 28.5-11.5T372-634q11 12 11.5 28T372-578l-98 98Zm6 440q-33 0-56.5-23.5T200-120v-120q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240h400q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240v120q0 33-23.5 56.5T680-40H280Zm0-880h400q33 0 56.5 23.5T760-840v120q0 17-11.5 28.5T720-680q-17 0-28.5-11.5T680-720H280q0 17-11.5 28.5T240-680q-17 0-28.5-11.5T200-720v-120q0-33 23.5-56.5T280-920Zm406 440-98-98q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T645-635l127 127q12 12 12 28t-12 28L645-325q-12 12-28.5 11.5T588-326q-11-12-11.5-28t11.5-28l98-98Z"/>
</svg>`,
})
export class MsrfDeveloperModeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
