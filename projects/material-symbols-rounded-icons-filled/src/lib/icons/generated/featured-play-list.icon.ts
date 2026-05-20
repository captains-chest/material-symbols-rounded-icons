import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-featured-play-list-icon',
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
  <path d="M280-440h280q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm0-120h280q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640H280q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
</svg>`,
})
export class MsrfFeaturedPlayListIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
