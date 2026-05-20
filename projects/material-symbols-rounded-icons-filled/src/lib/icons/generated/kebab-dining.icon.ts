import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-kebab-dining-icon',
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
  <path d="M280-40q-13 0-21.5-8.5T250-70v-130h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40h-90q-17 0-28.5-11.5T120-480v-120q0-17 11.5-28.5T160-640h90v-40h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-10q0-13 8.5-21.5T280-920q13 0 21.5 8.5T310-890v10h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v40h90q17 0 28.5 11.5T440-600v120q0 17-11.5 28.5T400-440h-90v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v130q0 13-8.5 21.5T280-40Zm400 0q-13 0-21.5-8.5T650-70v-130h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-40h-90q-17 0-28.5-11.5T520-480v-120q0-17 11.5-28.5T560-640h90v-40h-30q-42 0-71-29t-29-71q0-42 29-71t71-29h30v-10q0-13 8.5-21.5T680-920q13 0 21.5 8.5T710-890v10h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v40h90q17 0 28.5 11.5T840-600v120q0 17-11.5 28.5T800-440h-90v40h30q42 0 71 29t29 71q0 42-29 71t-71 29h-30v130q0 13-8.5 21.5T680-40Z"/>
</svg>`,
})
export class MsrfKebabDiningIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
