import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mobile-hand-icon',
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
  <path d="M240-160v-640 640ZM637-40q-26 0-49-10.5T548-80L369-294q-10-12-9-27.5t12-26.5l19-20q18-18 44-22.5t49 7.5l116 58v-355h80q66 0 113 47t47 113v320q0 66-47 113T680-40h-43ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360q33 0 56.5 23.5T680-800v120h-80v-120H240v640h241l67 80H240Zm180-600q17 0 28.5-11.5T460-720q0-17-11.5-28.5T420-760q-17 0-28.5 11.5T380-720q0 17 11.5 28.5T420-680Zm217 560h43q33 0 56.5-23t23.5-57v-320q0-33-23.5-56.5T680-600v340q0 23-19 34.5t-39 1.5l-155-77 139 167q6 7 14 10.5t17 3.5Z"/>
</svg>`,
})
export class MsrMobileHandIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
