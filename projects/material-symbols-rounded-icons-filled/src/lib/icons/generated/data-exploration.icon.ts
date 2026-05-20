import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-data-exploration-icon',
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
  <path d="M780-140q17 0 28.5-11.5T820-180q0-17-11.5-28.5T780-220q-17 0-28.5 11.5T740-180q0 17 11.5 28.5T780-140ZM480-80q-103 0-191.5-49T149-256l176-176 103 88q12 11 27.5 10t26.5-12l158-157v23q0 17 11.5 28.5T680-440q17 0 28.5-11.5T720-480v-120q0-17-11.5-28.5T680-640H560q-17 0-28.5 11.5T520-600q0 17 11.5 28.5T560-560h23L452-429l-104-87q-12-10-27.5-9.5T294-514L109-329q-14-33-21.5-74.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v320q0 33-23.5 56.5T800-80H480Z"/>
</svg>`,
})
export class MsrfDataExplorationIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
