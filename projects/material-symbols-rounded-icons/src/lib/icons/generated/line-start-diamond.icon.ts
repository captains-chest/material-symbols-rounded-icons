import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-line-start-diamond-icon',
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
  <path d="m360-313 167-167-167-167-167 167 167 167Zm-28 85L108-452q-12-12-12-28t12-28l224-224q12-12 28-12t28 12l212 212h240q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H600L388-228q-12 12-28 12t-28-12Zm28-252Z"/>
</svg>`,
})
export class MsrLineStartDiamondIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
