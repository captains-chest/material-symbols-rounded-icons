import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-format-paragraph-icon',
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
  <path d="M400-160q-17 0-28.5-11.5T360-200v-200q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h320q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720h-40v520q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-520H440v520q0 17-11.5 28.5T400-160Z"/>
</svg>`,
})
export class MsrfFormatParagraphIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
