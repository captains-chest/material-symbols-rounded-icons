import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-open-jam-icon',
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
  <path d="M280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h240v-288l36 36q11 11 28 11t28-11q11-11 11-28t-11-28L508-612q-12-12-28-12t-28 12L348-508q-11 11-11 28t11 28q11 11 28 11t28-11l36-36v168H160q-33 0-56.5-23.5T80-400v-360q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H600v120h80q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280Z"/>
</svg>`,
})
export class MsrfOpenJamIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
