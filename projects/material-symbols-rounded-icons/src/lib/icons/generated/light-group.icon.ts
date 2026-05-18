import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-light-group-icon',
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
  <path d="M160-80q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h240q17 0 28.5 11.5T440-120q0 17-11.5 28.5T400-80H160Zm520-40q-33 0-56.5-23.5T600-200H480q-17 0-28.5-11T440-239q-2-90 56-156.5T640-476v-364q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v364q87 14 144.5 80.5T920-239q0 17-11.5 28T880-200H760q0 33-23 56.5T680-120Zm-400-80q-17 0-28.5-11.5T240-240v-280H80q-20 0-32-15.5T41-570l75-280q4-13 14.5-21.5T155-880h250q14 0 24.5 8.5T444-850l75 280q5 19-7 34.5T480-520H320v280q0 17-11.5 28.5T280-200Zm244-80h312q-12-54-56-87t-100-33q-55 0-99 33t-57 87ZM132-600h296l-53-200H186l-54 200Zm148-100Zm400 360Z"/>
</svg>`,
})
export class MsrLightGroupIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
