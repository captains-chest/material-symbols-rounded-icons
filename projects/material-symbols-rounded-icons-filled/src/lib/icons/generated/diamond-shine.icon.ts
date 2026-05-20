import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-diamond-shine-icon',
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
  <path d="M127-793q12-12 28-12t28 12l29 28q12 12 12 28.5T212-708q-12 12-28.5 12T155-708l-28-29q-12-12-12-28t12-28Zm353-87q17 0 28.5 11.5T520-840v40q0 17-11.5 28.5T480-760q-17 0-28.5-11.5T440-800v-40q0-17 11.5-28.5T480-880Zm352 87q12 12 11.5 28T831-737l-28 29q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l28-28q12-12 28.5-12t28.5 12ZM205-400h550q14 0 19 12t-5 22L536-136q-23 23-56 23t-56-23L191-366q-10-10-5-22t19-12Zm-22-113 113-138q11-14 27.5-21.5T358-680h244q18 0 34.5 7.5T664-651l113 138q8 10 3 21.5T762-480H198q-13 0-18-11.5t3-21.5Z"/>
</svg>`,
})
export class MsrfDiamondShineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
