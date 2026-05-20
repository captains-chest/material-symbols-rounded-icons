import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-call-missed-outgoing-icon',
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
  <path d="M760-543 537-320q-12 12-27 18t-30 6q-15 0-30-6t-27-18L148-595q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l275 275 224-224H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h240q17 0 28.5 11.5T840-640v240q0 17-11.5 28.5T800-360q-17 0-28.5-11.5T760-400v-143Z"/>
</svg>`,
})
export class MsrCallMissedOutgoingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
