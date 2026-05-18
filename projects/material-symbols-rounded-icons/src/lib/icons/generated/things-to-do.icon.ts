import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-things-to-do-icon',
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
  <path d="M240-200v-160h-40q-17 0-28.5-11.5T160-400q0-17 11.5-28.5T200-440h44q12-75 66.5-129.5T440-636v-164q0-17 11.5-28.5T480-840h200q17 0 28.5 11.5T720-800v80q0 17-11.5 28.5T680-680H520v44q75 12 129.5 66.5T716-440h44q17 0 28.5 11.5T800-400q0 17-11.5 28.5T760-360h-40v160h120q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h120Zm80 0h120v-160H320v160Zm200 0h120v-160H520v160ZM326-440h308q-14-53-57-86.5T480-560q-54 0-97 33.5T326-440Zm154 0Z"/>
</svg>`,
})
export class MsrThingsToDoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
