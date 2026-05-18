import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-atm-icon',
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
  <path d="M415-540h-60q-13 0-21.5-8.5T325-570q0-13 8.5-21.5T355-600h180q13 0 21.5 8.5T565-570q0 13-8.5 21.5T535-540h-60v150q0 13-8.5 21.5T445-360q-13 0-21.5-8.5T415-390v-150ZM140-420v30q0 13-8.5 21.5T110-360q-13 0-21.5-8.5T80-390v-170q0-17 11.5-28.5T120-600h120q17 0 28.5 11.5T280-560v170q0 13-8.5 21.5T250-360q-13 0-21.5-8.5T220-390v-30h-80Zm0-60h80v-60h-80v60Zm540-60v150q0 13-8.5 21.5T650-360q-13 0-21.5-8.5T620-390v-170q0-17 11.5-28.5T660-600h180q17 0 28.5 11.5T880-560v170q0 13-8.5 21.5T850-360q-13 0-21.5-8.5T820-390v-150h-40v110q0 13-8.5 21.5T750-400q-13 0-21.5-8.5T720-430v-110h-40Z"/>
</svg>`,
})
export class MsrAtmIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
