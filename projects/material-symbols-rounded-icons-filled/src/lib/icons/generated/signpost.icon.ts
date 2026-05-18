import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-signpost-icon',
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
  <path d="M440-120v-120H273q-16 0-30.5-6T217-263l-69-69q-12-12-12-28t12-28l69-69q11-11 25.5-17t30.5-6h167v-80H200q-17 0-28.5-11.5T160-600v-160q0-17 11.5-28.5T200-800h240v-40q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40h167q16 0 30.5 6t25.5 17l69 69q12 12 12 28t-12 28l-69 69q-11 11-25.5 17t-30.5 6H520v80h240q17 0 28.5 11.5T800-440v160q0 17-11.5 28.5T760-240H520v120q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Z"/>
</svg>`,
})
export class MsrfSignpostIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
