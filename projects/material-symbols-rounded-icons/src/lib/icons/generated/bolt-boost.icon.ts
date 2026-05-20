import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-bolt-boost-icon',
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
  <path d="M524.5-117.5Q521-123 522-131l38-269H398q-25 0-36-22t3-42l277-379q5-6 11.5-7.5t12.5.5q6 2 9.5 7.5T678-829l-38 269h162q25 0 36 22t-3 42L558-117q-5 6-11.5 7.5T534-110q-6-2-9.5-7.5ZM160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h262q20 0 30 12.5t10 27.5q0 15-10 27.5T422-240H160Zm-40-200q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h110q20 0 30 12.5t10 27.5q0 15-10 27.5T230-440H120Zm80-200q-17 0-28.5-11.5T160-680q0-17 11.5-28.5T200-720h175q20 0 30 12.5t10 27.5q0 15-10 27.5T375-640H200Z"/>
</svg>`,
})
export class MsrBoltBoostIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
