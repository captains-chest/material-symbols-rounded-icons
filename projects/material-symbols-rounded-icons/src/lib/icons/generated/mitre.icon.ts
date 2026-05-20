import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mitre-icon',
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
  <path d="M520-440v-80q0-33 23.5-56.5T600-600h20v-80h-20q-33 0-56.5-23.5T520-760v-80q0-33 23.5-56.5T600-920h120q33 0 56.5 23.5T800-840v80q0 33-23.5 56.5T720-680h-20v80h20q33 0 56.5 23.5T800-520v80q0 33-23.5 56.5T720-360H600q-33 0-56.5-23.5T520-440Zm80 0h120v-80H600v80Zm0-320h120v-80H600v80ZM160-120v-80q0-33 23.5-56.5T240-280h20v-80h-20q-33 0-56.5-23.5T160-440v-80q0-33 23.5-56.5T240-600h20v-80h-20q-33 0-56.5-23.5T160-760v-80q0-33 23.5-56.5T240-920h120q33 0 56.5 23.5T440-840v80q0 33-23.5 56.5T360-680h-20v80h20q33 0 56.5 23.5T440-520v80q0 33-23.5 56.5T360-360h-20v80h20q33 0 56.5 23.5T440-200v80q0 33-23.5 56.5T360-40H240q-33 0-56.5-23.5T160-120Zm80 0h120v-80H240v80Zm0-320h120v-80H240v80Zm0-320h120v-80H240v80Zm420 280Zm0-320ZM300-160Zm0-320Zm0-320Z"/>
</svg>`,
})
export class MsrMitreIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
