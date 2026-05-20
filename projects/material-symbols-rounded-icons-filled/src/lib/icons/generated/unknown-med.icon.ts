import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-unknown-med-icon',
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
  <path d="M140-440q-25 0-42.5-17.5T80-500q0-25 17.5-42.5T140-560h240q25 0 42.5 17.5T440-500q0 25-17.5 42.5T380-440H140Zm440 0q-25 0-42.5-17.5T520-500q0-25 17.5-42.5T580-560h240q25 0 42.5 17.5T880-500q0 25-17.5 42.5T820-440H580Z"/>
</svg>`,
})
export class MsrfUnknownMedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
