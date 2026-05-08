import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-view-headline-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M199-360q-17 0-28-11.5T160-400q0-17 11.5-28.5T200-440h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-360H199Zm0 160q-17 0-28-11.5T160-240q0-17 11.5-28.5T200-280h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-200H199Zm0-320q-17 0-28-11.5T160-560q0-17 11.5-28.5T200-600h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-520H199Zm0-160q-17 0-28-11.5T160-720q0-17 11.5-28.5T200-760h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-680H199Z"/>
</svg>`,
})
export class MsrViewHeadlineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
