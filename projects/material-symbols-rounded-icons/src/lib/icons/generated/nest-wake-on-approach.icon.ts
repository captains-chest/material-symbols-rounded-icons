import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-nest-wake-on-approach-icon',
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
  <path d="M820-480q-25 0-42.5-17.5T760-540v-240q0-25 17.5-42.5T820-840q25 0 42.5 17.5T880-780v240q0 25-17.5 42.5T820-480Zm-420 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q67 0 131.5 16T656-378q30 15 47 43.5t17 62.5v112H80Zm80-80h480v-32q0-11-5-20t-15-14q-51-26-106.5-40T400-360q-58 0-113.5 14T180-306q-10 5-15 14t-5 20v32Zm240-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm0 400Z"/>
</svg>`,
})
export class MsrNestWakeOnApproachIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
