import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-ink-highlighter-move-icon',
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
  <path d="M551-800H320q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h311l-80 80ZM391-640H200q-17 0-28.5-11.5T160-680q0-17 11.5-28.5T200-720h271l-80 80ZM231-480H80q-17 0-28.5-11.5T40-520q0-17 11.5-28.5T80-560h231l-80 80Zm353 80L480-504 280-304l104 104 200-200Zm-47-161 104 104 199-199-104-104-199 199Zm-84-28 216 216-229 229q-24 24-56 24t-56-24l-2-2-14 14q-6 6-13.5 9t-15.5 3H148q-14 0-19-12t5-22l92-92-2-2q-24-24-24-56t24-56l229-229Zm0 0 227-227q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L669-373 453-589Z"/>
</svg>`,
})
export class MsrInkHighlighterMoveIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
