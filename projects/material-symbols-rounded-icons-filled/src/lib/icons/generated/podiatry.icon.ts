import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-podiatry-icon',
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
  <path d="m684-389 179-179 29 29q12 12 12 28t-12 28L769-360q-12 12-28.5 11.5T712-361l-28-28ZM40-266q0-24 13.5-44T90-339q21-8 40-19t38-25l58 58q5 7 13.5 6.5T254-325q5-5 5-13.5t-5-15.5l-55-55 15.5-15.5Q222-432 230-441l54 55q5 7 13.5 7t15.5-7q5-5 5-13.5t-5-15.5l-55-54q5-10 10.5-20.5T278-512l65 65q5 7 13.5 7t15.5-7q5-5 5-13t-5-15l-77-77 35-97q3-8 8-16t11-14l146-145q23-23 56.5-22.5T608-823l226 226-390 412q-11 12-26 18.5t-32 6.5H120q-33 0-56.5-23.5T40-240v-26Z"/>
</svg>`,
})
export class MsrfPodiatryIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
