import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-trending-flat-icon',
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
  <path d="M727-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h567l-55-56q-12-12-11.5-28t12.5-28q12-11 28.5-11.5T729-632l123 124q12 12 12 28t-12 28L728-328q-11 11-27.5 11T672-328q-12-12-12-28.5t12-28.5l55-55Z"/>
</svg>`,
})
export class MsrTrendingFlatIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
