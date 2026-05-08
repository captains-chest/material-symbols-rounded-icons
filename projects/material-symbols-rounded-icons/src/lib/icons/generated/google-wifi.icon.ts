import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-google-wifi-icon',
  standalone: true,
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M184-560h592l-11-160H195l-11 160Zm-18 280h628l-13-200H179l-13 200Zm34 120-13-40h-21q-35 0-58.5-25T86-285l29-440q2-32 25-53.5t55-21.5h570q32 0 55 21.5t25 53.5l29 440q2 35-21.5 60T794-200h-21l-13 40H200Z"/>
</svg>`,
})
export class MsrGoogleWifiIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
