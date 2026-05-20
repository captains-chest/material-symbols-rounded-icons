import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-humidity-helper-icon',
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
  <path d="M400-80q-133 0-226.5-92T80-396q0-63 24.5-120.5T174-618l170-167q23-23 56-23t56 23l170 167q45 44 69.5 101.5T720-396q0 132-93.5 224T400-80Zm0-80q100 0 170-68.5T640-396q0-47-18-89.5T570-560L400-728 230-560q-34 32-52 74.5T160-396q0 99 70 167.5T400-160Zm340-400q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560ZM400-396Z"/>
</svg>`,
})
export class MsrHumidityHelperIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
