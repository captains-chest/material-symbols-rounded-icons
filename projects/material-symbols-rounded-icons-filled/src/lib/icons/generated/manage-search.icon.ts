import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-manage-search-icon',
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
  <path d="M120-200q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h320q17 0 28.5 11.5T480-240q0 17-11.5 28.5T440-200H120Zm0-200q-17 0-28.5-11.5T80-440q0-17 11.5-28.5T120-480h120q17 0 28.5 11.5T280-440q0 17-11.5 28.5T240-400H120Zm0-200q-17 0-28.5-11.5T80-640q0-17 11.5-28.5T120-680h120q17 0 28.5 11.5T280-640q0 17-11.5 28.5T240-600H120Zm440 280q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 29-8.5 57.5T726-410l126 126q11 11 11 28t-11 28q-11 11-28 11t-28-11L670-354q-24 17-52.5 25.5T560-320Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
</svg>`,
})
export class MsrfManageSearchIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
