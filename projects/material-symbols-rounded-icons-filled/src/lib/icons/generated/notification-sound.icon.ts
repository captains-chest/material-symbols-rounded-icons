import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-notification-sound-icon',
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
  <path d="M700-532q0 17-3 34t-10 33q-7 17-23 24t-32-1q-15-7-21-23t2-30q5-9 6-18t1-19q0-10-1.5-19.5T613-570q-6-14 0-28t20-21q15-7 30.5-.5T687-598q8 16 10.5 32.5T700-532Zm140 0q0 50-15 97t-45 87q-9 12-25.5 11.5T727-348q-11-11-12-27t8-30q19-28 28-60.5t9-66.5q0-34-9-66.5T723-659q-9-14-8-30t12-27q11-11 27.5-11.5T780-716q30 40 45 87t15 97ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q14 4 27.5 9t26.5 12q19 11 20.5 32T600-702l-56 57q-11 11-17.5 25.5T520-589v114q0 16 6 30.5t17 25.5l151 151q19 19 8.5 43.5T665-200H200Z"/>
</svg>`,
})
export class MsrfNotificationSoundIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
