import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-switch-left-icon',
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
  <path d="M360-256q-8 0-15-3t-13-9L148-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q6-6 13-9t15-3q16 0 28 11.5t12 29.5v366q0 18-12 29.5T360-256Zm-20-89v-270L205-480l135 135Zm260 89q-16 0-28-11.5T560-297v-366q0-18 12-29.5t28-11.5q8 0 15 3t13 9l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L628-268q-6 6-13 9t-15 3Z"/>
</svg>`,
})
export class MsrSwitchLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
