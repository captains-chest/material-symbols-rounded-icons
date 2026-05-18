import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sprinkler-icon',
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
  <path d="M480-480q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480Zm0-160q-17 0-28.5-11.5T440-680q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680q0 17-11.5 28.5T480-640Zm0-160q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800Zm120 400q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm113-114q-17 0-28.5-11.5T673-554q0-17 11.5-28.5T713-594q17 0 28.5 11.5T753-554q0 17-11.5 28.5T713-514Zm113-112q-17 0-28.5-11.5T786-666q0-17 11.5-28.5T826-706q17 0 28.5 11.5T866-666q0 17-11.5 28.5T826-626ZM360-400q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400ZM247-514q-17 0-28.5-11.5T207-554q0-17 11.5-28.5T247-594q17 0 28.5 11.5T287-554q0 17-11.5 28.5T247-514ZM134-626q-17 0-28.5-11.5T94-666q0-17 11.5-28.5T134-706q17 0 28.5 11.5T174-666q0 17-11.5 28.5T134-626Zm306 386H320q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320h320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240H520v120q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-120Z"/>
</svg>`,
})
export class MsrSprinklerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
