import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tv-displays-icon',
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
  <path d="M120-320q-17 0-28.5-11.5T80-360v-440q0-33 23.5-56.5T160-880h520q17 0 28.5 11.5T720-840q0 17-11.5 28.5T680-800H160v440q0 17-11.5 28.5T120-320ZM480-80q-17 0-28.5-11.5T440-120v-40H320q-33 0-56.5-23.5T240-240v-400q0-33 23.5-56.5T320-720h520q33 0 56.5 23.5T920-640v400q0 33-23.5 56.5T840-160H720v40q0 17-11.5 28.5T680-80H480ZM320-240h520v-400H320v400Zm260-200Z"/>
</svg>`,
})
export class MsrTvDisplaysIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
