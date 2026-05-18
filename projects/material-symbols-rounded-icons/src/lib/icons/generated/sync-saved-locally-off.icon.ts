import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sync-saved-locally-off-icon',
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
  <path d="m828-246-74-74h46v-440H314l-80-80h566q33 0 56.5 23.5T880-760v440q0 26-14.5 45.5T828-246ZM728-120H80q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h567l-40-40H160q-33 0-56.5-23.5T80-320v-446l-25-26q-11-12-11-28t12-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-64-64ZM526-320 160-687v367h366Zm8-220Zm-191 36Zm157-70 79-79q12-12 28-12t28 12q12 12 12 28.5T635-596l-78 79-57-57Z"/>
</svg>`,
})
export class MsrSyncSavedLocallyOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
