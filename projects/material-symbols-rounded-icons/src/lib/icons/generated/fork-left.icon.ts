import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-fork-left-icon',
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
  <path d="m520-687-36 36q-12 12-28 11.5T428-652q-11-12-11.5-28t11.5-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T692-652q-11 11-28 11t-28-11l-36-35v527q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160v-120q-18-64-63.5-94.5T357-405q-11 0-22 1.5t-22 3.5l36 36q11 11 11 27.5T348-308q-11 11-28 11t-28-11L188-412q-12-12-12-28t12-28l104-104q11-11 27.5-11.5T348-572q11 11 11 28t-11 28l-35 36q9-2 19-3t21-1q44 0 88 13.5t79 44.5v-261Z"/>
</svg>`,
})
export class MsrForkLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
