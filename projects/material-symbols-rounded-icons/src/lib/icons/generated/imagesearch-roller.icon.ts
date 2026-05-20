import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-imagesearch-roller-icon',
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
  <path d="M600-40H440q-17 0-28.5-11.5T400-80v-240q0-17 11.5-28.5T440-360h40v-120H160q-33 0-56.5-23.5T80-560v-160q0-33 23.5-56.5T160-800h80v-40q0-17 11.5-28.5T280-880h480q17 0 28.5 11.5T800-840v160q0 17-11.5 28.5T760-640H280q-17 0-28.5-11.5T240-680v-40h-80v160h320q33 0 56.5 23.5T560-480v120h40q17 0 28.5 11.5T640-320v240q0 17-11.5 28.5T600-40Zm-120-80h80v-160h-80v160ZM320-720h400v-80H320v80Zm160 600h80-80ZM320-720v-80 80Z"/>
</svg>`,
})
export class MsrImagesearchRollerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
