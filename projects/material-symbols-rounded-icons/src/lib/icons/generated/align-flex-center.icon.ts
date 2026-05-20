import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-align-flex-center-icon',
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
  <path d="M480-80q-17 0-28.5-11.5T440-120v-300H160q-17 0-28.5-11.5T120-460v-40q0-17 11.5-28.5T160-540h280v-300q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v300h280q17 0 28.5 11.5T840-500v40q0 17-11.5 28.5T800-420H520v300q0 17-11.5 28.5T480-80Z"/>
</svg>`,
})
export class MsrAlignFlexCenterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
