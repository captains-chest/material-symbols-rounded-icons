import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-biotech-icon',
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
  <path d="M400-200v-80q-83 0-141.5-58.5T200-480q0-61 33.5-111t90.5-73q8-34 35.5-55t62.5-21l-9-25q-5-16 1.5-30.5T437-816h1q-6-15 1-29.5t24-20.5q15-5 29.5 1.5T512-842q16-6 31 1t21 23l82 225q6 16-.5 30.5T623-542h-1q6 16-1 31t-24 21q-15 5-29.5-1.5T548-514q-16 6-31-1t-21-23l-10-28q-15 14-34.5 21t-39.5 5q-22-2-41-13.5T338-582q-27 16-42.5 43T280-480q0 50 35 85t85 35h280q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280H520v80h200q17 0 28.5 11.5T760-160q0 17-11.5 28.5T720-120H240q-17 0-28.5-11.5T200-160q0-17 11.5-28.5T240-200h160Zm146-378 36-14-68-188-38 14 70 188Zm-126-22q17 0 28.5-11.5T460-640q0-17-11.5-28.5T420-680q-17 0-28.5 11.5T380-640q0 17 11.5 28.5T420-600Zm126 22Zm-126-62Zm0 0Z"/>
</svg>`,
})
export class MsrBiotechIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
