import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-text-format-icon',
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
  <path d="M240-200q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280h480q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200H240Zm54-208 137-368q4-11 13.5-17.5T466-800h28q12 0 21.5 6.5T529-776l137 369q6 17-4 32t-28 15q-11 0-20.5-6.5T600-384l-30-88H392l-32 89q-4 11-13 17t-20 6q-19 0-29.5-15.5T294-408Zm120-128h132l-64-182h-4l-64 182Z"/>
</svg>`,
})
export class MsrfTextFormatIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
