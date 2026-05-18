import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-moving-icon',
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
  <path d="M800-583 621-405q-35 35-85 35t-85-35l-47-47q-11-11-28-11t-28 11L164-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q35-35 85-35t85 35l46 46q12 12 28.5 12t28.5-12l178-178h-63q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720h160q17 0 28.5 11.5T880-680v160q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-63Z"/>
</svg>`,
})
export class MsrMovingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
