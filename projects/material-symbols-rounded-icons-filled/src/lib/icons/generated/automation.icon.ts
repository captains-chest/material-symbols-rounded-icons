import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-automation-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M240-120q-66 0-113-47T80-280q0-66 47-113t113-47q22 0 42 5.5t37 15.5l105-106-109-111q-18-18-26.5-39.5T280-719q0-47 33-84t87-37h160q54 0 87 37t33 84q0 22-8.5 44T645-635L536-525l104 106q17-11 37.5-16t42.5-5q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-22 6-43t17-40L480-468 377-363q11 19 17 40t6 43q0 66-47 113t-113 47Zm160-640q-18 0-29 12t-11 28q0 8 3 15t9 13l108 110 108-109q6-6 9-13.5t3-15.5q0-16-11-28t-29-12H400Z"/>
</svg>`,
})
export class MsrfAutomationIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
