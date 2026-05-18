import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-forest-icon',
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
  <path d="M280-120v-120H73q-24 0-35-21t2-41l114-178q-23 0-34.5-20.5T122-541l205-292q12-17 33-17t33 17l87 125 87-125q12-17 33-17t33 17l205 292q14 20 2.5 40.5T806-480l114 178q13 20 2 41t-35 21H680v120q0 17-11.5 28.5T640-80h-80q-17 0-28.5-11.5T520-120v-120h-80v120q0 17-11.5 28.5T400-80h-80q-17 0-28.5-11.5T280-120Zm389-200h145L659-560h67L600-740l-71 101 69 98q14 20 2.5 40.5T566-480l103 160Zm-523 0h428L419-560h67L360-740 234-560h67L146-320Zm0 0h155-67 252-67 155-428Zm523 0H566h74-111 197-67 155-145Zm-149 80h160-160Zm201 0Z"/>
</svg>`,
})
export class MsrForestIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
