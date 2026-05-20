import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-straight-icon',
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
  <path d="m440-687-36 36q-11 11-27.5 11T348-652q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T612-652q-11 11-28 11t-28-11l-36-35v527q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-527Z"/>
</svg>`,
})
export class MsrStraightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
