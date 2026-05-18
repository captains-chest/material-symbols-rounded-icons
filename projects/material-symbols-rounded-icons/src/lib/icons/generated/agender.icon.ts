import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-agender-icon',
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
  <path d="M480-120q-100 0-170-70t-70-170q0-90 57.5-156.5T440-597v-203q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v203q86 14 143 80.5T720-360q0 100-70 170t-170 70Zm0-80q56 0 98.5-34t56.5-86H325q14 52 56.5 86t98.5 34ZM325-400h310q-14-52-56.5-86T480-520q-56 0-98.5 34T325-400Z"/>
</svg>`,
})
export class MsrAgenderIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
