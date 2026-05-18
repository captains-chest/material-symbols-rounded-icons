import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-calendar-view-month-icon',
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
  <path d="M120-540v-180q0-17 11.5-28.5T160-760h133q17 0 28.5 11.5T333-720v180q0 17-11.5 28.5T293-500H160q-17 0-28.5-11.5T120-540Zm293 40q-17 0-28.5-11.5T373-540v-180q0-17 11.5-28.5T413-760h134q17 0 28.5 11.5T587-720v180q0 17-11.5 28.5T547-500H413Zm254 0q-17 0-28.5-11.5T627-540v-180q0-17 11.5-28.5T667-760h133q17 0 28.5 11.5T840-720v180q0 17-11.5 28.5T800-500H667ZM293-200H160q-17 0-28.5-11.5T120-240v-180q0-17 11.5-28.5T160-460h133q17 0 28.5 11.5T333-420v180q0 17-11.5 28.5T293-200Zm120 0q-17 0-28.5-11.5T373-240v-180q0-17 11.5-28.5T413-460h134q17 0 28.5 11.5T587-420v180q0 17-11.5 28.5T547-200H413Zm254 0q-17 0-28.5-11.5T627-240v-180q0-17 11.5-28.5T667-460h133q17 0 28.5 11.5T840-420v180q0 17-11.5 28.5T800-200H667Z"/>
</svg>`,
})
export class MsrfCalendarViewMonthIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
