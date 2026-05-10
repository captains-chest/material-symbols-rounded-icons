import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-delete-sweep-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M200-200q-33 0-56.5-23.5T120-280v-360q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720h120v-20q0-17 11.5-28.5T280-780h80q17 0 28.5 11.5T400-740v20h120q17 0 28.5 11.5T560-680q0 17-11.5 28.5T520-640v360q0 33-23.5 56.5T440-200H200Zm440-40q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80q17 0 28.5 11.5T760-280q0 17-11.5 28.5T720-240h-80Zm0-160q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h160q17 0 28.5 11.5T840-440q0 17-11.5 28.5T800-400H640Zm0-160q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h200q17 0 28.5 11.5T880-600q0 17-11.5 28.5T840-560H640Z"/>
</svg>`,
})
export class MsrfDeleteSweepIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
