import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-book-6-icon',
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
  <path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h360q33 0 56.5 23.5T680-800v480q0 33-23.5 56.5T600-240H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-600q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v600q0 33-23.5 56.5T760-80H240Zm0-240h360v-480H240q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2Zm62-100q8 0 13.5-4t7.5-11l21-57h113l20 57q2 7 8 11t13 4q12 0 19-10t2-21l-88-234q-2-7-8-11t-14-4h-18q-8 0-14 4t-8 11l-88 235q-4 11 2.5 20.5T302-420Zm56-112 41-116h2l41 116h-84ZM200-313v-487 487Z"/>
</svg>`,
})
export class MsrBook6IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
