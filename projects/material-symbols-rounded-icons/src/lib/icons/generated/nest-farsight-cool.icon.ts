import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-nest-farsight-cool-icon',
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
  <path d="M450-450v38l-90 90q-9 9-9 21t9 21q9 9 21.5 9t21.5-9l47-47v57q0 13 8.5 21.5T480-240q13 0 21.5-8.5T510-270v-57l47 47q9 9 21.5 9t21.5-9q9-9 9-21.5t-9-21.5l-90-89v-38h37l90 90q9 9 21.5 9t21.5-9q9-9 9-21.5t-9-21.5l-48-47h58q13 0 21.5-8.5T720-480q0-13-8.5-21.5T690-510h-58l47-47q9-9 9.5-21.5T680-600q-9-9-21.5-9t-21.5 9l-90 90h-37v-37l90-90q9-9 9-21t-9-21q-9-9-21.5-9t-21.5 9l-47 47v-58q0-13-8.5-21.5T480-720q-13 0-21.5 8.5T450-690v58l-48-48q-9-9-21-9t-21 9q-9 9-9 21.5t9 21.5l90 90v37h-38l-90-90q-9-9-21-9t-21 9q-9 9-9 21.5t9 21.5l47 47h-57q-13 0-21.5 8.5T240-480q0 13 8.5 21.5T270-450h57l-48 48q-9 9-9 21t9 21q9 9 21.5 9t21.5-9l90-90h38Zm30 370q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
</svg>`,
})
export class MsrNestFarsightCoolIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
