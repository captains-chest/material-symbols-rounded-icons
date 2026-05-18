import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-smart-card-reader-off-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M350-449q20 0 35-13t25-28l-90-90v101q0 13 8.5 21.5T350-449ZM120-132q-17 0-28.5-11.5T80-172v-80q0-33 23.5-56.5T160-332h407l-60-60H240q-17 0-28.5-11.5T200-432v-268L56-844q-11-11-11.5-27.5T56-900q11-11 28-11t28 11l736 735q12 12 12 28t-12 28q-12 12-28.5 12T791-109l-24-23H120Zm572-301L587-538q23-8 38-28.5t15-46.5q0-33-23.5-56T560-692q-26 0-46.5 15T485-639L261-864q-19-19-9-43.5t37-24.5h391q33 0 56.5 23.5T760-852v391q0 27-24.5 37t-43.5-9Z"/>
</svg>`,
})
export class MsrfSmartCardReaderOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
