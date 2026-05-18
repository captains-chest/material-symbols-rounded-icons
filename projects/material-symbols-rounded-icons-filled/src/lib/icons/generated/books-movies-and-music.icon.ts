import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-books-movies-and-music-icon',
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
  <path d="M200-80q-33 0-56.5-23.5T120-160v-495q0-25 13.5-45.5T170-730l320-128q40-16 75 8t35 67v63q33 0 56.5 23.5T680-640v80q-117 0-198.5 81.5T400-280q0 57 22 109t63 91H200Zm160-640h160v-62l-160 62ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-19-119 102-64q10-6 10-17t-10-17l-102-64q-10-6-20.5-.5T630-344v128q0 12 10.5 17.5t20.5-.5Z"/>
</svg>`,
})
export class MsrfBooksMoviesAndMusicIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
