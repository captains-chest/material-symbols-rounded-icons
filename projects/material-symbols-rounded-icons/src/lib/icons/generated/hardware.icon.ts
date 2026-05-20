import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-hardware-icon',
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
  <path d="M400-120q-17 0-28.5-11.5T360-160v-480H208q-19 0-31-14t-8-33q13-68 67.5-110.5T360-840h200q17 0 28.5 11.5T600-800v80l102-102q8-8 19.5-13t23.5-5h15q17 0 28.5 11.5T800-800v240q0 17-11.5 28.5T760-520h-15q-12 0-23.5-5T702-538L600-640v480q0 17-11.5 28.5T560-120H400Zm40-80h80v-240h-80v240Zm0-320h80v-240H360q-26 0-49 10.5T271-720h169v200Zm40 40Z"/>
</svg>`,
})
export class MsrHardwareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
