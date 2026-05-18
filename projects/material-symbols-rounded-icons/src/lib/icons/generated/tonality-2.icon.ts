import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tonality-2-icon',
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
  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-718v636q121-15 200.5-106T800-480q0-121-79.5-212T520-798Zm-80 38v-38q-30 5-59 13.5T326-760h114Zm0 120v-40H230q-8 9-14 19t-12 21h236Zm0 120v-40H170l-4 20-4 20h278Zm0 120v-40H162l4 20 4 20h270Zm0 120v-40H204q6 11 12 21t14 19h210Zm0 118v-38H326q26 16 55 24.5t59 13.5Zm80-318Z"/>
</svg>`,
})
export class MsrTonality2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
