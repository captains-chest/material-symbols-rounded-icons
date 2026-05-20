import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-closed-caption-disabled-icon',
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
  <path d="m361-600 60 60H300v120h80q0-9 6-15t15-6h18q9 0 15 6t6 15v20q0 17-11.5 28.5T400-360H280q-17 0-28.5-11.5T240-400v-160q0-17 11.5-28.5T280-600h81Zm479-120v400q0 20-13 30.5T799-279q-15 0-27-10.5T760-320v-400H359q-20 0-30-12.5T319-760q0-15 10-27.5t30-12.5h401q33 0 56.5 23.5T840-720ZM720-400q0 9-3.5 17.5T706-369l-51-51h5q0-9 6-15t15-6h18q9 0 15 6t6 15v20Zm-40-200q17 0 28.5 11.5T720-560v20q0 9-6 15t-15 6h-18q-9 0-15-6t-6-15h-80v45l-60-60v-5q0-17 11.5-28.5T560-600h120Zm-122 82Zm-154 74ZM200-160q-33 0-56.5-23.5T120-240v-480q0-25 13.5-44.5T168-793l73 73h-41v480h407L55-791q-12-12-12-28.5T55-848q12-12 28.5-12t28.5 12l735 735q12 12 12 28.5T847-56q-12 12-28.5 12T790-56L687-160H200Z"/>
</svg>`,
})
export class MsrClosedCaptionDisabledIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
