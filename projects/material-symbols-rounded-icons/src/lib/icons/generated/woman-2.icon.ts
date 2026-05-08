import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-woman-2-icon',
  standalone: true,
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
  <path d="M420-120v-200h-81q-21 0-33-17.5t-4-37.5l100-253q10-24 31-38t47-14q26 0 47 14t31 38l100 253q8 20-4 37.5T621-320h-81v200q0 17-11.5 28.5T500-80h-40q-17 0-28.5-11.5T420-120Zm60-600q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
</svg>`,
})
export class MsrWoman2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
