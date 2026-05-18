import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-align-horizontal-center-icon',
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
  <path d="M440-120v-160H300q-25 0-42.5-17.5T240-340q0-25 17.5-42.5T300-400h140v-160H180q-25 0-42.5-17.5T120-620q0-25 17.5-42.5T180-680h260v-160q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v160h260q25 0 42.5 17.5T840-620q0 25-17.5 42.5T780-560H520v160h140q25 0 42.5 17.5T720-340q0 25-17.5 42.5T660-280H520v160q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Z"/>
</svg>`,
})
export class MsrfAlignHorizontalCenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
