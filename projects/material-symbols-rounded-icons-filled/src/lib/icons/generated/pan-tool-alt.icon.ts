import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-pan-tool-alt-icon',
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
  <path d="M398-120q-27 0-51.5-11.5T305-164L46-483l26-25q19-19 45-22t47 12l116 81v-403q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v320h80v-160q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680v160h80v-120q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v120h80v-40q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560v280q0 66-47 113t-113 47H398Z"/>
</svg>`,
})
export class MsrfPanToolAltIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
