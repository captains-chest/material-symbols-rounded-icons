import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-airline-seat-recline-normal-icon',
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
  <path d="M560-160H320q-33 0-56.5-23.5T240-240v-400q0-17 11.5-28.5T280-680q17 0 28.5 11.5T320-640v400h240q17 0 28.5 11.5T600-200q0 17-11.5 28.5T560-160ZM460-720q-33 0-56.5-23.5T380-800q0-33 23.5-56.5T460-880q33 0 56.5 23.5T540-800q0 33-23.5 56.5T460-720Zm180 600v-160H440q-33 0-56.5-23.5T360-360v-220q0-42 29-71t71-29q42 0 71 29t29 71v180h80q33 0 56.5 23.5T720-320v200q0 17-11.5 28.5T680-80q-17 0-28.5-11.5T640-120Z"/>
</svg>`,
})
export class MsrAirlineSeatReclineNormalIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
