import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-iron-icon',
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
  <path d="M160-320h440v-120H240q-33 0-56.5 23.5T160-360v40Zm440 0v-120 120Zm240-400q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640t-28.5 11.5Q800-617 800-600v160q0 50-35 85t-85 35v40q0 17-11.5 28.5T640-240H120q-17 0-28.5-11.5T80-280v-80q0-66 47-113t113-47h360v-40q0-17-11.5-28.5T560-600H400q-8 0-15.5 3.5T372-588q-5 5-12.5 8t-15.5 3q-17 0-28.5-11.5T304-617q0-8 3-15.5t8-12.5q17-17 38.5-26t46.5-9h160q50 0 85 35t35 85v160q17 0 28.5-11.5T720-440v-160q0-50 35-85t85-35Z"/>
</svg>`,
})
export class MsrIronIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
