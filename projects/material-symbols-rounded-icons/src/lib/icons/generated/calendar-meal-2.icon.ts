import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-calendar-meal-2-icon',
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
  <path d="M414-360q-35 0-55.5-22T330-440h300q-8 36-28.5 58T546-360H414Zm-51-160q7-18 22-29t35-11h53q27-27 37.5-33.5T540-600q25 0 42.5 17.5T600-540v20H363Zm51 240h132q91 0 131.5-68.5T720-520h-40v-20q0-58-41-99t-99-41q-29 0-54.5 10.5T440-640h-20q-52 0-91 34.5T282-520h-42q2 103 42.5 171.5T414-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h40v-40q0-17 11.5-28.5T280-920q17 0 28.5 11.5T320-880v40h320v-40q0-17 11.5-28.5T680-920q17 0 28.5 11.5T720-880v40h40q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-80v-560H200v560h560Zm-560 0v-560 560Z"/>
</svg>`,
})
export class MsrCalendarMeal2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
