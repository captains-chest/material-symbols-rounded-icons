import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-attach-file-off-icon',
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
  <path d="M470-80q-104 0-177-73t-73-177v-298L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-95-95q-35 45-86.5 72T470-80ZM300-548v218q-1 71 49 120.5T470-160q45 0 81.5-21t59.5-56l-50-50q-15 22-38.5 34.5T470-240q-46 0-78-32t-32-78v-138l-60-60Zm140 140v58q0 13 8.5 21.5T470-320q12 0 20.5-8t9.5-20l-60-60Zm200-26v-246q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680v326l-80-80ZM500-574v-126q-1-42-29.5-71T400-800q-26 0-47 12t-35 32l-57-57q25-31 61-49t78-18q75 0 127.5 52.5T580-700v206l-80-80ZM369-706q5-7 13.5-10.5T400-720q17 0 28.5 11.5T440-680v46l-71-72Z"/>
</svg>`,
})
export class MsrfAttachFileOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
