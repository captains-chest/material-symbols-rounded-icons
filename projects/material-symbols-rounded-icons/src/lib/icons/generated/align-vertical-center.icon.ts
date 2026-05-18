import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-align-vertical-center-icon',
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
  <path d="M340-120q-25 0-42.5-17.5T280-180v-260H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h160v-260q0-25 17.5-42.5T340-840q25 0 42.5 17.5T400-780v260h160v-140q0-25 17.5-42.5T620-720q25 0 42.5 17.5T680-660v140h160q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H680v140q0 25-17.5 42.5T620-240q-25 0-42.5-17.5T560-300v-140H400v260q0 25-17.5 42.5T340-120Z"/>
</svg>`,
})
export class MsrAlignVerticalCenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
