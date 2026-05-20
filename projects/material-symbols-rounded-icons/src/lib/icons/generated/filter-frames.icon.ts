import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-filter-frames-icon',
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
  <path d="M160-80q-33 0-56.5-23.5T80-160v-560q0-33 23.5-56.5T160-800h160l132-132q12-12 28-12t28 12l132 132h160q33 0 56.5 23.5T880-720v560q0 33-23.5 56.5T800-80H160Zm0-80h640v-560H160v560Zm80-120v-320q0-17 11.5-28.5T280-640h400q17 0 28.5 11.5T720-600v320q0 17-11.5 28.5T680-240H280q-17 0-28.5-11.5T240-280Zm80-40h320v-240H320v240Zm160-120Z"/>
</svg>`,
})
export class MsrFilterFramesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
