import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-split-scene-down-icon',
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
  <path d="M160-800q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v160q0 17-11.5 28.5T760-600q-17 0-28.5-11.5T720-640v-160H240v160q0 17-11.5 28.5T200-600q-17 0-28.5-11.5T160-640v-160ZM80-480q0-17 11.5-28.5T120-520h720q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v280q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-280h-40q-17 0-28.5-11.5T80-480Zm160-320h480-480Z"/>
</svg>`,
})
export class MsrSplitSceneDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
