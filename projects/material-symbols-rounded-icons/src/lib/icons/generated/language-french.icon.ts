import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-language-french-icon',
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
  <path d="M200-280q-17 0-28.5-11.5T160-320v-320q0-17 11.5-28.5T200-680h200q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H240v80h120q17 0 28.5 11.5T400-480q0 17-11.5 28.5T360-440H240v120q0 17-11.5 28.5T200-280Zm360 0q-17 0-28.5-11.5T520-320v-320q0-17 11.5-28.5T560-680h160q33 0 56.5 23.5T800-600v80q0 32-22 54.5T726-440l49 106q9 19-2.5 36.5T740-280q-11 0-20-6t-14-16l-65-138h-41v120q0 17-11.5 28.5T560-280Zm40-240h120v-80H600v80Z"/>
</svg>`,
})
export class MsrLanguageFrenchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
