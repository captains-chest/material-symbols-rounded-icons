import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-map-search-icon',
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
  <path d="M640-240q34 0 56.5-20t23.5-60q1-34-22.5-57T640-400q-34 0-57 23t-23 57q0 34 23 57t57 23Zm0 80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43.5T778-238l74 74q11 11 11 28t-11 28q-11 11-28 11t-28-11l-74-74q-18 11-38.5 16.5T640-160Zm-466 28q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l186-63q13-5 26-5t26 5l214 75 186-72q20-8 37 4.5t17 33.5v270q0 17-16 23t-29-6q-33-28-72.5-42.5T640-560h-17q-9 0-17 2-18 2-32-8.5T560-594v-92l-160-56v481q0 19-10.5 34T362-205l-188 73Z"/>
</svg>`,
})
export class MsrfMapSearchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
