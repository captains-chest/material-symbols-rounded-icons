import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-horizontal-align-center-icon',
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
  <path d="m712-440 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L588-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h128q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H712ZM520-200q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-560q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v560ZM248-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h128l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L268-348q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36Z"/>
</svg>`,
})
export class MsrHorizontalAlignCenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
