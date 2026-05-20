import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-villa-icon',
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
  <path d="M120-200v-385q0-25 14-45.5t37-29.5l415-159q20-8 37 4t17 33v302h40q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v280q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200Zm80 0h160v-200q0-33 23.5-56.5T440-480h120v-244L200-585v385Zm240 0h120v-80q0-17 11.5-28.5T600-320q17 0 28.5 11.5T640-280v80h120v-200H440v200Zm-60-262Zm220 162Zm0 0Z"/>
</svg>`,
})
export class MsrVillaIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
