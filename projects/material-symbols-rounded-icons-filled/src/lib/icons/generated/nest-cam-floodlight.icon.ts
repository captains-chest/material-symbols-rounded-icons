import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-cam-floodlight-icon',
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
  <path d="M480-200h80v120h-80v-120Zm180-76 84 84-56 56-84-84 56-56ZM0-960h80q33 0 56.5 23.5T160-880v68q32-50 85-79t116-29h199q33 0 56.5 23.5T640-840v171l-63-62q-42-42-98-65.5T363-820q-57 0-110.5 22T160-741v92q27-45 83-78t120-33q48 0 93 19t79 53l141 141q23 23 23 57t-23 57L446-204q-23 23-57 23t-57-23L191-345q-9-9-16.5-18T160-383v63q0 33-23.5 56.5T80-240H0v-720Zm680 560h120v80H680v-80Z"/>
</svg>`,
})
export class MsrfNestCamFloodlightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
