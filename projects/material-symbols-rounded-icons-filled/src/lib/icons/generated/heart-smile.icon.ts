import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-heart-smile-icon',
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
  <path d="M480-340q54 0 98.5-29.5T646-448q7-15 0-30t-23-21q-15-6-29.5.5T572-477q-12 27-37.5 42T480-420q-29 0-54.5-15T388-477q-7-15-21.5-21.5T337-499q-16 6-23 21t0 30q23 49 67.5 78.5T480-340ZM370-540q21 0 35.5-14.5T420-590q0-21-14.5-35.5T370-640q-21 0-35.5 14.5T320-590q0 21 14.5 35.5T370-540Zm220 0q21 0 35.5-14.5T640-590q0-21-14.5-35.5T590-640q-21 0-35.5 14.5T540-590q0 21 14.5 35.5T590-540ZM480-756q34-40 81-62t99-22q94 0 157 63t63 157q0 42-12.5 80.5t-43 83Q794-412 742.5-359T613-236l-80 70q-23 20-53 20t-53-20l-80-70q-78-70-129.5-123t-82-97.5q-30.5-44.5-43-83T80-620q0-94 63-157t157-63q52 0 99 22t81 62Z"/>
</svg>`,
})
export class MsrfHeartSmileIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
