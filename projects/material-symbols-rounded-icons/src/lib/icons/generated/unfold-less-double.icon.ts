import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-unfold-less-double-icon',
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
  <path d="m481-128-99 98q-11 11-27.5 11.5T326-30q-11-11-11-28t11-28l127-127q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5L636-86q11 11 11 27.5T636-30q-12 12-28.5 12T579-30l-98-98Zm0-200-99 98q-11 11-27.5 11.5T326-230q-11-11-11-28t11-28l127-127q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l127 127q11 11 11 27.5T636-230q-12 12-28.5 12T579-230l-98-98Zm0-306 98-98q12-12 28.5-12t28.5 12q12 12 12 28t-12 28L509-548q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L325-676q-12-12-11.5-28.5T326-733q12-12 28.5-12t28.5 12l98 99Zm0-200 98-98q12-12 28.5-12t28.5 12q12 12 12 28t-12 28L509-748q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L325-876q-12-12-11.5-28.5T326-933q12-12 28.5-12t28.5 12l98 99Z"/>
</svg>`,
})
export class MsrUnfoldLessDoubleIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
