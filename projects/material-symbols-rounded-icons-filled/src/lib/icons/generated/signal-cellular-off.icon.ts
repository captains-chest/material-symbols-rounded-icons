import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signal-cellular-off-icon',
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
  <path d="M177-80q-27 0-37.5-24.5T148-148l276-276-300-299q-12-11-11.5-27.5T124-779q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T859-44q-12 11-28 11.5T803-44l-36-36H177Zm703-703v494q0 18-12 29.5T840-248q-8 0-15-3t-13-9L564-508q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l248-248q19-19 43.5-8.5T880-783Z"/>
</svg>`,
})
export class MsrfSignalCellularOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
