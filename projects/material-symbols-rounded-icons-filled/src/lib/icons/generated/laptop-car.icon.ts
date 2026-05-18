import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-laptop-car-icon',
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
  <path d="M426-80q-11 0-18.5-7.5T400-106v-223l57-164q5-12 15-19.5t23-7.5h290q13 0 23 7.5t15 19.5l57 164v223q0 11-7.5 18.5T854-80h-28q-11 0-18.5-7.5T800-106v-34H480v34q0 11-7.5 18.5T454-80h-28Zm48-280h332l-35-100H509l-35 100Zm66 150q17 0 28.5-11.5T580-250q0-17-11.5-28.5T540-290q-17 0-28.5 11.5T500-250q0 17 11.5 28.5T540-210Zm200 0q17 0 28.5-11.5T780-250q0-17-11.5-28.5T740-290q-17 0-28.5 11.5T700-250q0 17 11.5 28.5T740-210Zm-640 50q-25 0-42.5-17.5T40-220q0-25 17.5-42.5T100-280h20v-440q0-33 23.5-56.5T200-800h520q33 0 56.5 23.5T800-720v80q0 17-11.5 28.5T760-600H494q-37 0-68.5 19.5T382-526l-62 178v148q0 17-11.5 28.5T280-160H100Z"/>
</svg>`,
})
export class MsrfLaptopCarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
