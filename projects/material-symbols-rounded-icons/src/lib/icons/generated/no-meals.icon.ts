import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-no-meals-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="m760-315-83-83-117-117v-165q0-34 14.5-69.5T612-814q23-29 51-47.5t55-18.5q18 0 30 14t12 33v518Zm88 258q-12 12-28.5 12T791-57l-63-62h32q0 17-11.5 28.5T720-79q-17 0-28.5-11.5T680-119v-48L56-791q-12-12-12-29t12-29q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28ZM480-595l-80-80v-165q0-17 11.5-28.5T440-880q17 0 28.5 11.5T480-840v245ZM360-715l-80-80v-45q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v125ZM240-835l-45-45q19 0 32 13t13 32Zm80 755q-17 0-28.5-11.5T280-120v-326q-51-14-85.5-56T160-600v-201l80 80v121h40v-81l80 80v1h1l90 90q-16 23-39.5 39.5T360-446v326q0 17-11.5 28.5T320-80Z"/>
</svg>`,
})
export class MsrNoMealsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
