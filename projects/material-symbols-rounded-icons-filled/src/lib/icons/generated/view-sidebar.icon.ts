import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-sidebar-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M780-640q-25 0-42.5-17.5T720-700v-40q0-25 17.5-42.5T780-800h40q25 0 42.5 17.5T880-740v40q0 25-17.5 42.5T820-640h-40Zm0 240q-25 0-42.5-17.5T720-460v-40q0-25 17.5-42.5T780-560h40q25 0 42.5 17.5T880-500v40q0 25-17.5 42.5T820-400h-40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h400q33 0 56.5 23.5T640-720v480q0 33-23.5 56.5T560-160H160Zm620 0q-25 0-42.5-17.5T720-220v-40q0-25 17.5-42.5T780-320h40q25 0 42.5 17.5T880-260v40q0 25-17.5 42.5T820-160h-40Z"/>
</svg>`,
})
export class MsrfViewSidebarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
