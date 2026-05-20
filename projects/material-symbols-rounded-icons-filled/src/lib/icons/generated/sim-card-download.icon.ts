import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-sim-card-download-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M520-434v-126q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v126l-36-35q-11-11-27.5-11T348-468q-11 11-11 28t11 28l104 104q12 12 28 12t28-12l104-104q11-11 11.5-27.5T612-468q-11-11-27.5-11.5T556-469l-36 35ZM240-80q-33 0-56.5-23.5T160-160v-447q0-16 6-30.5t17-25.5l194-194q11-11 25.5-17t30.5-6h287q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Z"/>
</svg>`,
})
export class MsrfSimCardDownloadIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
