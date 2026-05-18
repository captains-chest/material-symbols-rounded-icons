import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-identity-platform-icon',
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
  <path d="M438-178q20 12 42 11.5t42-12.5l182-111q-50-35-107-52.5T480-360q-60 0-117.5 17.5T254-291l184 113Zm42-262q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM438-85 158-257q-18-11-28-29t-10-39v-310q0-21 10-39t28-29l280-172q20-12 42-12t42 12l280 172q18 11 28 29t10 39v310q0 21-10 39t-28 29L522-85q-20 12-42 12t-42-12Z"/>
</svg>`,
})
export class MsrfIdentityPlatformIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
