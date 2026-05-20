import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-eco-leaf-icon',
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
  <path d="M172-172q-11-11-11-28t11-28l55-55q-32-41-49.5-91T160-480q0-134 93-227t227-93h240q33 0 56.5 23.5T800-720v240q0 134-93 227t-227 93q-56 0-105.5-17.5T284-227l-56 55q-11 11-28 11t-28-11Zm162-162q11 13 28 12.5t29-12.5l157-157q12-12 12-28.5T548-548q-11-11-28-11t-28 11L334-390q-11 11-11 27.5t11 28.5Z"/>
</svg>`,
})
export class MsrfNestEcoLeafIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
