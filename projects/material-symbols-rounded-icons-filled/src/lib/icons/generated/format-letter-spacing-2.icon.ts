import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-letter-spacing-2-icon',
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
  <path d="M268-108q-12 12-28 12t-28-12L108-212q-12-12-12-28t12-28l104-104q12-12 28-12t28 12q12 12 12 28.5T268-315l-35 35h494l-35-35q-11-12-11.5-28.5T692-372q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L748-108q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l35-35H233l35 35q11 12 11.5 28.5T268-108Zm26-380 137-368q4-11 13.5-17.5T466-880h28q12 0 21.5 6.5T529-856l137 369q6 17-4 32t-28 15q-11 0-20.5-6.5T600-464l-30-88H392l-32 89q-4 11-13 17t-20 6q-19 0-29.5-15.5T294-488Zm120-128h132l-64-182h-4l-64 182Z"/>
</svg>`,
})
export class MsrfFormatLetterSpacing2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
