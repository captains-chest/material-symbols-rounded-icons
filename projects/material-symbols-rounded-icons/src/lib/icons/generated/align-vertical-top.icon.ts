import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-align-vertical-top-icon',
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
  <path d="M340-80q-25 0-42.5-17.5T280-140v-520q0-25 17.5-42.5T340-720q25 0 42.5 17.5T400-660v520q0 25-17.5 42.5T340-80Zm280-240q-25 0-42.5-17.5T560-380v-280q0-25 17.5-42.5T620-720q25 0 42.5 17.5T680-660v280q0 25-17.5 42.5T620-320ZM120-800q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z"/>
</svg>`,
})
export class MsrAlignVerticalTopIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
