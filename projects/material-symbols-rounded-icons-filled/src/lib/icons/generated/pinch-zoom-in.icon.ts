import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-pinch-zoom-in-icon',
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
  <path d="m180-577-97 96q-9 8-21 8.5T41-481q-9-9-9-21t9-21l96-97H70q-13 0-21.5-8.5T40-650q0-13 8.5-21.5T70-680h130q17 0 28.5 11.5T240-640v130q0 13-8.5 21.5T210-480q-13 0-21.5-8.5T180-510v-67Zm202-203h68q13 0 21.5 8.5T480-750q0 13-8.5 21.5T450-720H320q-17 0-28.5-11.5T280-760v-130q0-13 8.5-21.5T310-920q13 0 21.5 8.5T340-890v68l96-97q9-9 21-9t21 9q9 9 9 21.5t-9 21.5l-96 96ZM593-40q-24 0-46-9t-39-26L332-252q-12-12-11-29.5t13-29.5q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v280h40v-120q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v120h40v-80q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v80h40q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Z"/>
</svg>`,
})
export class MsrfPinchZoomInIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
