import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-smb-share-icon',
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
  <path d="M485-440h163q26 0 44-18t18-44q0-26-18-44.5T648-565h-2q-5-32-29-53.5T560-640q-26 0-47 13.5T481-590q-30 2-50.5 23.5T410-515q0 30 21.5 52.5T485-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-17 11.5-28.5T80-720q17 0 28.5 11.5T120-680v480h640q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h167q16 0 30.5 6t25.5 17l57 57h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Z"/>
</svg>`,
})
export class MsrfSmbShareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
