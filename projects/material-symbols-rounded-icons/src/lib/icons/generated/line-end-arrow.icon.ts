import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-line-end-arrow-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M501-239q-20 13-40.5 1.5T440-273v-167H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-167q0-24 20.5-35.5T501-721l326 207q19 12 19 34t-19 34L501-239Zm19-107 211-134-211-134v268Zm0-134Z"/>
</svg>`,
})
export class MsrLineEndArrowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
