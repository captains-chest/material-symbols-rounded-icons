import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-filter-9-plus-icon',
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
  <path d="M480-400q33 0 56.5-23.5T560-480v-160q0-33-23.5-56.5T480-720h-40q-33 0-56.5 23.5T360-640v40q0 33 23.5 56.5T440-520h40v40h-40q-17 0-28.5 11.5T400-440q0 17 11.5 28.5T440-400h40Zm0-200h-40v-40h40v40Zm320-200ZM660-520v40q0 17 11.5 28.5T700-440q17 0 28.5-11.5T740-480v-40h60v-80h-60v-40q0-17-11.5-28.5T700-680q-17 0-28.5 11.5T660-640v40h-40q-17 0-28.5 11.5T580-560q0 17 11.5 28.5T620-520h40ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z"/>
</svg>`,
})
export class MsrFilter9PlusIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
