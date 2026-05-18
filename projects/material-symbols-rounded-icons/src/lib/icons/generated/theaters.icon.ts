import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-theaters-icon',
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
  <path d="M240-200v40q0 17-11.5 28.5T200-120q-17 0-28.5-11.5T160-160v-640q0-17 11.5-28.5T200-840q17 0 28.5 11.5T240-800v40h80v-40q0-17 11.5-28.5T360-840h240q17 0 28.5 11.5T640-800v40h80v-40q0-17 11.5-28.5T760-840q17 0 28.5 11.5T800-800v640q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40h-80v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40h-80Zm0-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm400 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM400-200h160v-560H400v560Zm0-560h160-160Z"/>
</svg>`,
})
export class MsrTheatersIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
