import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-network-locked-icon',
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
  <path d="m148-148 664-664q19-19 43.5-8.5T880-783v263q0 17-11.5 28.5T840-480q-17 0-28.5-11.5T800-520v-166L273-160h287q17 0 28.5 11.5T600-120q0 17-11.5 28.5T560-80H177q-27 0-37.5-24.5T148-148Zm566 68q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T800-400q33 0 56.5 23.5T880-320v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H714Zm46-200h80v-40q0-17-11.5-28.5T800-360q-17 0-28.5 11.5T760-320v40ZM273-160l527-526Q681-567 536.5-423T273-160Z"/>
</svg>`,
})
export class MsrNetworkLockedIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
