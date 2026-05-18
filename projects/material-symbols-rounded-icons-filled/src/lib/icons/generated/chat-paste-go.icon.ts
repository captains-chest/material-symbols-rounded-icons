import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-chat-paste-go-icon',
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
  <path d="M727-240H600q-17 0-28.5-11.5T560-280q0-17 11.5-28.5T600-320h127l-35-35q-11-12-11.5-28.5T692-412q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L748-148q-12 12-28 12t-28-12q-12-12-11.5-28.5T692-205l35-35ZM320-560h240q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640H320q-17 0-28.5 11.5T280-600q0 17 11.5 28.5T320-560Zm0 160h120q17 0 28.5-11.5T480-440q0-17-11.5-28.5T440-480H320q-17 0-28.5 11.5T280-440q0 17 11.5 28.5T320-400Zm-80 160-86 86q-10 10-22 5t-12-19v-552q0-33 23.5-56.5T200-800h480q33 0 56.5 23.5T760-720v174q0 12-8.5 19.5T731-520q-51-2-97.5 15.5T550-450q-36 37-54 83.5T480-269q1 12-7 20.5t-19 8.5H240Z"/>
</svg>`,
})
export class MsrfChatPasteGoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
