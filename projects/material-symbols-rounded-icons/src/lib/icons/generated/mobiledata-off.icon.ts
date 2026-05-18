import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mobiledata-off-icon',
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
  <path d="m400-274 34-34q12-12 28-11.5t28 11.5q12 12 12.5 28.5T491-251L388-148q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L229-251q-12-12-11.5-28.5T230-308q12-11 28-11.5t28 11.5l34 34v-254L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L400-448v174Zm200-216q-17 0-28.5-12T560-531v-157l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36v158q0 18-12 29t-28 11Z"/>
</svg>`,
})
export class MsrMobiledataOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
