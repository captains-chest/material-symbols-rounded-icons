import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-devices-fold-icon',
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
  <path d="M480-120q-33 0-56.5-23.5T400-200v-589q0-24 13-43.5t35-29.5l120-52q40-17 76 6.5t36 67.5h120q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H480Zm107-80h213v-560H680v467q0 24-13 44.5T632-219l-45 19ZM120-760q-17 0-28.5-11.5T80-800q0-17 11.5-28.5T120-840q17 0 28.5 11.5T160-800q0 17-11.5 28.5T120-760Zm0 160q-17 0-28.5-11.5T80-640q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640q0 17-11.5 28.5T120-600ZM80-480q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480q0 17-11.5 28.5T120-440q-17 0-28.5-11.5T80-480Zm40 200q-17 0-28.5-11.5T80-320q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320q0 17-11.5 28.5T120-280Zm0 160q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200q17 0 28.5 11.5T160-160q0 17-11.5 28.5T120-120Zm160 0q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200q17 0 28.5 11.5T320-160q0 17-11.5 28.5T280-120Zm0-640q-17 0-28.5-11.5T240-800q0-17 11.5-28.5T280-840q17 0 28.5 11.5T320-800q0 17-11.5 28.5T280-760Z"/>
</svg>`,
})
export class MsrfDevicesFoldIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
