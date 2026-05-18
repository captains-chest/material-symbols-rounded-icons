import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-man-3-icon',
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
  <path d="M400-110v-240h-40q-17 0-28.5-11.5T320-390v-200q0-33 23.5-56.5T400-670h160q33 0 56.5 23.5T640-590v200q0 17-11.5 28.5T600-350h-40v240q0 17-11.5 28.5T520-70h-80q-17 0-28.5-11.5T400-110Zm52-618-34-34q-12-12-12-28t12-28l34-34q12-12 28-12t28 12l34 34q12 12 12 28t-12 28l-34 34q-12 12-28 12t-28-12Z"/>
</svg>`,
})
export class MsrMan3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
