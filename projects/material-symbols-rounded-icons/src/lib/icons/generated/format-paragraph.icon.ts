import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-format-paragraph-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M400-160q-17 0-28.5-11.5T360-200v-200q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h320q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720h-40v520q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-520H440v520q0 17-11.5 28.5T400-160Z"/>
</svg>`,
})
export class MsrFormatParagraphIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
