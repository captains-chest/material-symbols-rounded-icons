import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-streetview-icon',
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
  <path d="M720-520q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520ZM144-144q-11-11-17.5-25t-6.5-31v-560q0-33 23.5-56.5T200-840h268q-14 27-21 57.5t-7 62.5q0 59 22 109.5t60 88.5L144-144Zm336 24v-216q0-42 25.5-75.5T572-454q35-8 72-12t76-4q32 0 61.5 2.5T840-460v260q0 33-23.5 56.5T760-120H480Z"/>
</svg>`,
})
export class MsrStreetviewIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
