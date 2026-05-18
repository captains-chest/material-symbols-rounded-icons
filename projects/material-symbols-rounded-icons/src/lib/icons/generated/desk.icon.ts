import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-desk-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M80-280v-360q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v360q0 17-11.5 28.5T840-240q-17 0-28.5-11.5T800-280v-40H640v40q0 17-11.5 28.5T600-240q-17 0-28.5-11.5T560-280v-360H160v360q0 17-11.5 28.5T120-240q-17 0-28.5-11.5T80-280Zm560-280h160v-80H640v80Zm0 160h160v-80H640v80Z"/>
</svg>`,
})
export class MsrDeskIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
