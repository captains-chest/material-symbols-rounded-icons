import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-text-rotation-angleup-icon',
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
  <path d="M761-464 417-120q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344h-24q-17 0-28.5-11.5T641-560q0-17 11.5-28.5T681-600h120q17 0 28.5 11.5T841-560v120q0 17-11.5 28.5T801-400q-17 0-28.5-11.5T761-440v-24Zm-428-12 39 84q5 10 3.5 20.5T366-353q-14 14-32 10.5T308-363L146-721q-5-11-3-22t10-19l20-20q8-8 19-10t22 3l359 164q17 8 20 26t-10 31q-8 8-19 10t-22-3l-83-41-126 126Zm-30-62 94-92-174-84-2 2 82 174Z"/>
</svg>`,
})
export class MsrTextRotationAngleupIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
