import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-search-insights-icon',
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
  <path d="M400-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-120q-17 0-28.5-11.5T360-480v-200q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v200q0 17-11.5 28.5T400-440Zm-140 0q-17 0-28.5-11.5T220-480v-120q0-17 11.5-28.5T260-640q17 0 28.5 11.5T300-600v120q0 17-11.5 28.5T260-440Zm280 0q-17 0-28.5-11.5T500-480v-80q0-17 11.5-28.5T540-600q17 0 28.5 11.5T580-560v80q0 17-11.5 28.5T540-440ZM400-240q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 106T653-363l199 199q11 11 11 28t-11 28q-11 11-28 11t-28-11L597-307q-41 32-91 49.5T400-240Z"/>
</svg>`,
})
export class MsrfSearchInsightsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
