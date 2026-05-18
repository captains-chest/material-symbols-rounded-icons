import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-kettle-icon',
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
  <path d="M240-280v-440l-72-96q-15-20-4-42t36-22h431q37 0 63 26t26 63v31h80q33 0 56.5 23.5T880-680v200q0 33-23.5 56.5T800-400h-80v120q0 33-23.5 56.5T640-200H320q-33 0-56.5-23.5T240-280Zm480-200h80v-200h-80v200ZM540-760q-25 0-42.5 17.5T480-700v320q0 25 17.5 42.5T540-320q25 0 42.5-17.5T600-380v-320q0-25-17.5-42.5T540-760ZM160-80q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h640q17 0 28.5 11.5T840-120q0 17-11.5 28.5T800-80H160Z"/>
</svg>`,
})
export class MsrfKettleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
