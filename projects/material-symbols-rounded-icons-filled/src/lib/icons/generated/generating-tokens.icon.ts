import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-generating-tokens-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M9 20q-3.35 0-5.675-2.325Q1 15.35 1 12q0-3.35 2.325-5.675Q5.65 4 9 4q3.35 0 5.675 2.325Q17 8.65 17 12q0 3.35-2.325 5.675Q12.35 20 9 20Zm0-4.5q.425 0 .713-.288.287-.287.287-.712v-4h1.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q11.575 9 11.25 9h-4.5q-.325 0-.537.212Q6 9.425 6 9.75q0 .325.213.537.212.213.537.213H8v4q0 .425.288.712.287.288.712.288ZM18.55 8l-.8-1.75-1.75-.8q-.275-.125-.275-.45T16 4.55l1.75-.8.8-1.75q.125-.275.45-.275t.45.275l.8 1.75 1.75.8q.275.125.275.45T22 5.45l-1.75.8-.8 1.75q-.125.275-.45.275T18.55 8Zm0 14-.8-1.75-1.75-.8q-.275-.125-.275-.45t.275-.45l1.75-.8.8-1.75q.125-.275.45-.275t.45.275l.8 1.75 1.75.8q.275.125.275.45t-.275.45l-1.75.8-.8 1.75q-.125.275-.45.275T18.55 22Z"/>
</svg>`,
})
export class MsrfGeneratingTokensIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
