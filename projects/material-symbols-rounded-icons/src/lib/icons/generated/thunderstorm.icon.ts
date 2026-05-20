import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-thunderstorm-icon',
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
  <path d="m520-66 36-41-34-17q-17-9-21-28t9-34l70-80q5-7 13.5-10.5T610-280q26 0 36.5 23t-6.5 43l-36 41 34 17q17 9 21 28t-9 34l-70 80q-5 7-13.5 10.5T550 0q-26 0-36.5-23t6.5-43Zm-240 0 36-41-34-17q-17-9-21-28t9-34l70-80q5-7 13.5-10.5T370-280q26 0 36.5 23t-6.5 43l-36 41 34 17q17 9 21 28t-9 34l-70 80q-5 7-13.5 10.5T310 0q-26 0-36.5-23t6.5-43Zm20-254q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/>
</svg>`,
})
export class MsrThunderstormIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
