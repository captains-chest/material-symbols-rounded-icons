import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-line-start-arrow-icon',
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
  <path d="M459-239 133-446q-19-12-19-34t19-34l326-207q20-13 40.5-1.5T520-687v167h320q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H520v167q0 24-20.5 35.5T459-239Zm-19-107v-268L229-480l211 134Zm0-134Z"/>
</svg>`,
})
export class MsrLineStartArrowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
