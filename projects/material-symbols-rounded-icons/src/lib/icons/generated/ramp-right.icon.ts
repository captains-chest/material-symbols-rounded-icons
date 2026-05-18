import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-ramp-right-icon',
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
  <path d="M480-120q-17 0-28.5-11.5T440-160v-212q-28 38-63.5 72T296-235q-16 11-34.5 10T229-240q-11-11-7.5-27.5T240-294q63-42 131.5-119.5T440-600v-87l-36 35q-11 11-28 11t-28-11q-12-12-11.5-28.5T348-708l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11 28t-11 28q-12 12-28.5 12T556-651l-36-36v527q0 17-11.5 28.5T480-120Z"/>
</svg>`,
})
export class MsrRampRightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
