import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-equal-icon',
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
  <path d="M220-280q-25 0-42.5-17.5T160-340q0-25 17.5-42.5T220-400h520q25 0 42.5 17.5T800-340q0 25-17.5 42.5T740-280H220Zm0-280q-25 0-42.5-17.5T160-620q0-25 17.5-42.5T220-680h520q25 0 42.5 17.5T800-620q0 25-17.5 42.5T740-560H220Z"/>
</svg>`,
})
export class MsrEqualIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
