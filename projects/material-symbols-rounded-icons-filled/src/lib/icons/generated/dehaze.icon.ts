import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-dehaze-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-680q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160Zm0 480q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h640q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H160Zm0-240q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Z"/>
</svg>`,
})
export class MsrfDehazeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
