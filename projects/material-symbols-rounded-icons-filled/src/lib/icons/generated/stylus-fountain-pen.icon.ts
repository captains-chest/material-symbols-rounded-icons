import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stylus-fountain-pen-icon',
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
  <path d="M338-320h284q14 0 25-8.5t14-22.5l73-306q2-11-.5-21T723-696L554-852q-10-9-22-3.5T520-837v169q14 10 22 25t8 33q0 29-20.5 49.5T480-540q-29 0-49.5-20.5T410-610q0-18 8-33t22-25v-169q0-13-12-18.5t-22 3.5L237-696q-8 8-10.5 18t-.5 21l73 306q3 14 14 22.5t25 8.5ZM215-120q-20 0-32.5-16.5T177-173l5-12q8-25 29-40t47-15h444q26 0 47 15t29 40l5 12q7 20-5.5 36.5T745-120H215Z"/>
</svg>`,
})
export class MsrfStylusFountainPenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
