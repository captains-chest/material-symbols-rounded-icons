import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-discover-tune-icon',
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
  <path d="M560-600q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h80v-120q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v120h80q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H560Zm120 480q-17 0-28.5-11.5T640-160v-320q0-17 11.5-28.5T680-520q17 0 28.5 11.5T720-480v320q0 17-11.5 28.5T680-120Zm-400 0q-17 0-28.5-11.5T240-160v-120h-80q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280h-80v120q0 17-11.5 28.5T280-120Zm0-320q-17 0-28.5-11.5T240-480v-320q0-17 11.5-28.5T280-840q17 0 28.5 11.5T320-800v320q0 17-11.5 28.5T280-440Z"/>
</svg>`,
})
export class MsrDiscoverTuneIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
