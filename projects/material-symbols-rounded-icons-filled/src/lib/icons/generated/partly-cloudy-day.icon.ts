import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-partly-cloudy-day-icon',
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
  <path d="m734-169-56-57q-11-12-11-28.5t11-27.5q11-11 27.5-11t28.5 11l57 56q12 12 12 28.5T791-169q-12 12-28.5 12T734-169Zm-494 9q-66 0-113-47T80-320q0-66 47-113t113-47q48 0 88.5 26t58.5 71l10 23h24q42 0 70.5 29t28.5 71q0 42-29 71t-71 29H240Zm359-112q-4-63-45.5-109T449-438q-31-54-83.5-85.5T250-560q26-73 89-116.5T480-720q100 0 170 70t70 170q0 65-32 120.5T599-272Zm201-168q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM226-678l-57-57q-11-11-11-28t11-28q12-12 28.5-12t28.5 12l56 57q11 12 11 28.5T282-678q-11 11-28 11t-28-11Zm452 0q-11-11-11-27.5t11-28.5l56-57q12-12 28.5-12t28.5 12q11 11 11 28t-11 28l-57 57q-11 11-28 11t-28-11Zm-198-82q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Z"/>
</svg>`,
})
export class MsrfPartlyCloudyDayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
