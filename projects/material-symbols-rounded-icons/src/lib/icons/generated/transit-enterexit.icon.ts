import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-transit-enterexit-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M446-360h134q25 0 42.5 17.5T640-300q0 25-17.5 42.5T580-240H280q-17 0-28.5-11.5T240-280v-300q0-25 17.5-42.5T300-640q25 0 42.5 17.5T360-580v130l228-228q18-18 44-18t44 18q18 18 18 44t-18 44L446-360Z"/>
</svg>`,
})
export class MsrTransitEnterexitIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
