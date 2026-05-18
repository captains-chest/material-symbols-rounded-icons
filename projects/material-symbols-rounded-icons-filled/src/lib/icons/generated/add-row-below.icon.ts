import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-add-row-below-icon',
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
  <path d="M480-80q-17 0-28.5-11.5T440-120v-40h-40q-17 0-28.5-11.5T360-200q0-17 11.5-28.5T400-240h40v-40q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v40h40q17 0 28.5 11.5T600-200q0 17-11.5 28.5T560-160h-40v40q0 17-11.5 28.5T480-80ZM120-560v-240q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v240H120Zm80 400q-33 0-56.5-23.5T120-240v-240h720v240q0 33-23.5 56.5T760-160h-44q-16 0-26.5-12t-9.5-28q0-83-58-141.5T480-400q-84 0-142 58.5T280-200q0 16-10 28t-26 12h-44Z"/>
</svg>`,
})
export class MsrfAddRowBelowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
