import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-line-end-arrow-notch-icon',
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
  <path d="M508-243q-14 8-25-2.5t-3-24.5l97-170H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h457l-97-170q-8-14 3-24.5t25-2.5l319 203q19 12 19 34t-19 34L508-243Z"/>
</svg>`,
})
export class MsrLineEndArrowNotchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
