import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-subject-icon',
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
  <path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h320q17 0 28.5 11.5T560-240q0 17-11.5 28.5T520-200H200Zm0-160q-17 0-28.5-11.5T160-400q0-17 11.5-28.5T200-440h560q17 0 28.5 11.5T800-400q0 17-11.5 28.5T760-360H200Zm0-160q-17 0-28.5-11.5T160-560q0-17 11.5-28.5T200-600h560q17 0 28.5 11.5T800-560q0 17-11.5 28.5T760-520H200Zm0-160q-17 0-28.5-11.5T160-720q0-17 11.5-28.5T200-760h560q17 0 28.5 11.5T800-720q0 17-11.5 28.5T760-680H200Z"/>
</svg>`,
})
export class MsrSubjectIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
