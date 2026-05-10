import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-eraser-size-4-icon',
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
  <path d="M396-160q-98 0-167-69t-69-167q0-46 17-89.5t52-78.5l167-167q35-35 78.5-52t89.5-17q98 0 167 69t69 167q0 46-17 89.5T731-396L564-229q-35 35-78.5 52T396-160Z"/>
</svg>`,
})
export class MsrfEraserSize4IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
