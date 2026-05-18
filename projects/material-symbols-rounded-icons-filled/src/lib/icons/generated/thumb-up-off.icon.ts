import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-thumb-up-off-icon',
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M10 21q-.825 0-1.412-.587Q8 19.825 8 19V8.825q0-.4.163-.763.162-.362.437-.637l5.425-5.4q.375-.35.888-.425.512-.075.987.175t.687.7q.213.45.088.925L15.55 8H21q.8 0 1.4.6.6.6.6 1.4v2q0 .175-.038.375-.037.2-.112.375l-3 7.05q-.225.5-.75.85T18 21Zm-6 0q-.825 0-1.412-.587Q2 19.825 2 19v-9q0-.825.588-1.413Q3.175 8 4 8t1.412.587Q6 9.175 6 10v9q0 .825-.588 1.413Q4.825 21 4 21Z"/>
</svg>`,
})
export class MsrfThumbUpOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
