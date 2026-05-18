import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-add-ad-icon',
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
  <path d="M720-280h-80q-17 0-28.5-11.5T600-320q0-17 11.5-28.5T640-360h80v-80q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v80h80q17 0 28.5 11.5T920-320q0 17-11.5 28.5T880-280h-80v80q0 17-11.5 28.5T760-160q-17 0-28.5-11.5T720-200v-80ZM120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h560q33 0 56.5 23.5T760-760v160q0 17-11.5 28.5T720-560q-17 0-28.5-11.5T680-600v-40H120v440h480q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H120Zm0-600h560v-40H120v40Zm0 0v-40 40Z"/>
</svg>`,
})
export class MsrAddAdIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
