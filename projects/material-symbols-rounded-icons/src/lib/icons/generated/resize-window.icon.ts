import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-resize-window-icon',
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
  <path d="M812-148q-12 12-28.5 12T755-148L148-755q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l607 607q12 12 12 28.5T812-148Zm-400 0q-12 12-28.5 12T355-148L148-355q-12-12-12-28.5t12-28.5q12-12 28.5-12t28.5 12l207 207q12 12 12 28.5T412-148Z"/>
</svg>`,
})
export class MsrResizeWindowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
