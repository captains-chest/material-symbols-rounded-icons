import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-azm-icon',
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
  <path d="M468-108q-19 19-43.5 8.5T400-137v-263H137q-27 0-37.5-24.5T108-468l309-309q11-11 25.5-17t30.5-6h247q33 0 56.5 23.5T800-720v247q0 16-6 30.5T777-417L468-108Zm172-492v207l80-80v-247H473l-80 80h207q17 0 28.5 11.5T640-600ZM480-440v207l80-80v-247H313l-80 80h207q17 0 28.5 11.5T480-440Z"/>
</svg>`,
})
export class MsrAzmIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
