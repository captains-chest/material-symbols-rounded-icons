import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-azm-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M640-600v272q0 14 12 19t22-5l103-103q11-11 17-25.5t6-30.5v-247q0-33-23.5-56.5T720-800H473q-16 0-30.5 6T417-777L314-674q-10 10-5 22t19 12h272q17 0 28.5 11.5T640-600ZM400-360v272q0 14 12 19t22-5l103-103q11-11 17-25.5t6-30.5v-247q0-33-23.5-56.5T480-560H233q-16 0-30.5 6T177-537L74-434q-10 10-5 22t19 12h272q17 0 28.5 11.5T400-360Z"/>
</svg>`,
})
export class MsrfAzmIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
