import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-breakfast-dining-icon',
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
  <path d="M240-120q-33 0-56.5-23.5T160-200v-342q-37-22-58.5-58.5T80-680q0-66 47-113t113-47h480q66 0 113 47t47 113q0 43-21.5 79.5T800-542v342q0 33-23.5 56.5T720-120H240Zm0-80h480v-388l40-24q18-11 29-29t11-39q0-33-23.5-56.5T720-760H240q-33 0-56.5 23.5T160-680q0 22 10.5 40.5T200-610l40 22v388Zm212-92q12 11 28.5 11t27.5-11l120-120q12-12 12-28.5T628-468L508-588q-11-12-27.5-12T452-588L332-468q-11 11-11 27.5t11 28.5l120 120Zm28-84-64-64 64-64 64 64-64 64Zm0-104Z"/>
</svg>`,
})
export class MsrBreakfastDiningIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
