import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-docs-add-on-icon',
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
  <path d="M680-121q-17 0-28.5-11.5T640-161v-80h-80q-17 0-28.5-11.5T520-281q0-17 11.5-28.5T560-321h80v-80q0-17 11.5-28.5T680-441q17 0 28.5 11.5T720-401v80h80q17 0 28.5 11.5T840-281q0 17-11.5 28.5T800-241h-80v80q0 17-11.5 28.5T680-121ZM200-240q-17 0-28.5-11.5T160-280q0-17 11.5-28.5T200-320h243q-3 21-2.5 40t3.5 40H200Zm0-160q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h346q-23 16-41.5 36T472-400H200Zm0-160q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h520q17 0 28.5 11.5T760-600q0 17-11.5 28.5T720-560H200Zm0-160q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h520q17 0 28.5 11.5T760-760q0 17-11.5 28.5T720-720H200Z"/>
</svg>`,
})
export class MsrfDocsAddOnIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
