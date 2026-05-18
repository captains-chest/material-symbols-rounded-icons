import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-highlight-mouse-cursor-icon',
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
  <path d="M782-100 650-231l-30 91q-5 14-19 13.5T582-141l-91-303q-4-11 5-20t20-5l303 91q14 5 14.5 19T820-340l-91 30 132 132q17 17 17 39t-17 39q-17 17-39.5 17T782-100ZM480-800q-134 0-227 93t-93 227q0 126 83 216t208 102q17 2 29.5 15t11.5 30q-1 17-12.5 28T451-79q-78-5-145.5-39t-118-88.5q-50.5-54.5-79-125T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q157 0 273.5 107T881-509q2 16-9.5 27.5T843-469q-17 1-30.5-11T797-509q-15-120-104.5-205.5T480-800Z"/>
</svg>`,
})
export class MsrHighlightMouseCursorIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
