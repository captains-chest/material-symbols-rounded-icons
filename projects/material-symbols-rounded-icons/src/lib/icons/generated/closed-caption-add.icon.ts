import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-closed-caption-add-icon',
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
  <path d="M480-480ZM200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v280q0 17-11.5 28.5T800-400q-17 0-28.5-11.5T760-440v-280H200v480h360q17 0 28.5 11.5T600-200q0 17-11.5 28.5T560-160H200Zm560 0h-40q-17 0-28.5-11.5T680-200q0-17 11.5-28.5T720-240h40v-40q0-17 11.5-28.5T800-320q17 0 28.5 11.5T840-280v40h40q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160h-40v40q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120v-40ZM560-360h120q17 0 28.5-11.5T720-400v-22q0-13-8.5-21.5T690-452q-13 0-21.5 8.5T660-422v2h-80v-120h80v2q0 13 8.5 21.5T690-508q13 0 21.5-8.5T720-538v-22q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v160q0 17 11.5 28.5T560-360Zm-280 0h120q17 0 28.5-11.5T440-400v-22q0-13-8.5-21.5T410-452q-13 0-21.5 8.5T380-422v2h-80v-120h80v2q0 13 8.5 21.5T410-508q13 0 21.5-8.5T440-538v-22q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Z"/>
</svg>`,
})
export class MsrClosedCaptionAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
