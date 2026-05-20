import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-strikethrough-icon',
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
  <path d="M120-400q-17 0-28.5-11.5T80-440q0-17 11.5-28.5T120-480h720q17 0 28.5 11.5T880-440q0 17-11.5 28.5T840-400H120Zm300-160v-120H260q-25 0-42.5-17.5T200-740q0-25 17.5-42.5T260-800h440q25 0 42.5 17.5T760-740q0 25-17.5 42.5T700-680H540v120H420Zm0 240h120v100q0 25-17.5 42.5T480-160q-25 0-42.5-17.5T420-220v-100Z"/>
</svg>`,
})
export class MsrfFormatStrikethroughIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
