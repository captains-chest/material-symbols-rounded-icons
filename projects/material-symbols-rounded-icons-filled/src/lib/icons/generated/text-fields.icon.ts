import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-text-fields-icon',
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
  <path d="M340-160q-25 0-42.5-17.5T280-220v-460H140q-25 0-42.5-17.5T80-740q0-25 17.5-42.5T140-800h400q25 0 42.5 17.5T600-740q0 25-17.5 42.5T540-680H400v460q0 25-17.5 42.5T340-160Zm360 0q-25 0-42.5-17.5T640-220v-260h-60q-25 0-42.5-17.5T520-540q0-25 17.5-42.5T580-600h240q25 0 42.5 17.5T880-540q0 25-17.5 42.5T820-480h-60v260q0 25-17.5 42.5T700-160Z"/>
</svg>`,
})
export class MsrfTextFieldsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
