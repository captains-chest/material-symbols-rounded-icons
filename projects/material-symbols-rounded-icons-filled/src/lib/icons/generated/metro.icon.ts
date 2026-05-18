import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-metro-icon',
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
  <path d="M120-180v-584q0-32 22-54t54-22h34q24 0 43.5 13t27.5 36l179 473 176-469q9-24 30-38.5t47-14.5h25q34 0 58 24t24 58v578q0 25-17.5 42.5T780-120q-25 0-42.5-17.5T720-180v-430L543-151q-5 14-17 22.5t-27 8.5h-38q-15 0-27-8.5T417-151L240-607v427q0 25-17.5 42.5T180-120q-25 0-42.5-17.5T120-180Z"/>
</svg>`,
})
export class MsrfMetroIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
