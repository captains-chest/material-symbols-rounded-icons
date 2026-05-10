import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-array-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M120-260v-440q0-25 17.5-42.5T180-760q25 0 42.5 17.5T240-700v440q0 25-17.5 42.5T180-200q-25 0-42.5-17.5T120-260Zm220 60q-25 0-42.5-17.5T280-260v-440q0-25 17.5-42.5T340-760h280q25 0 42.5 17.5T680-700v440q0 25-17.5 42.5T620-200H340Zm380-60v-440q0-25 17.5-42.5T780-760q25 0 42.5 17.5T840-700v440q0 25-17.5 42.5T780-200q-25 0-42.5-17.5T720-260Z"/>
</svg>`,
})
export class MsrfViewArrayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
