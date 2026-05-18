import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-code-xml-icon',
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
  <path d="m153-480 115 115q11 12 11.5 28.5T268-308q-12 12-28 12t-28-12L68-452q-12-12-12-28t12-28l144-144q12-12 28-12t28 12q12 12 12 28.5T268-595L153-480Zm203.5 300.5Q349-194 354-210l176-564q5-16 19.5-23.5T580-800q16 5 23.5 19.5T606-750L430-186q-5 16-19.5 23.5T380-160q-16-5-23.5-19.5ZM807-480 692-595q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l144 144q12 12 12 28t-12 28L748-308q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l115-115Z"/>
</svg>`,
})
export class MsrfCodeXmlIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
