import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-arrow-top-right-icon',
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
  <path d="M647-560H280v360q0 17-11.5 28.5T240-160q-17 0-28.5-11.5T200-200v-360q0-33 23.5-56.5T280-640h367L532-755q-12-12-12.5-28.5T531-812q12-12 28.5-12t28.5 12l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L587-387q-12 12-28 11.5T531-388q-11-12-11.5-28t11.5-28l116-116Z"/>
</svg>`,
})
export class MsrArrowTopRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
