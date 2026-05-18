import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-edit-arrow-up-icon',
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
  <path d="M160-240q-17 0-28.5-11.5T120-280v-90q0-16 6.5-30.5T144-426l271-271q24-24 57.5-23t56.5 25l48 50q23 23 22.5 56T576-533L306-263q-11 11-25.5 17t-30.5 6h-90Zm309-299 50-51-49-49-51 50 50 50Zm271-109-24 24q-11 11-28 11t-28-11q-11-11-11-28t11-28l92-92q12-12 28-12t28 12l92 92q11 12 11 28.5T899-624q-12 11-28.5 11.5T843-624l-23-23v447q0 17-11.5 28.5T780-160q-17 0-28.5-11.5T740-200v-448Z"/>
</svg>`,
})
export class MsrfEditArrowUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
