import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-range-hood-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-168q0-16 6.5-30.5T104-464l176-176v-120q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v120l177 177q11 11 17 25.5t6 30.5v167q0 33-23.5 56.5T800-160H160Zm320-600H360v119q0 16-6 30.5T337-585L232-480h496L623-585q-11-11-17-25.5t-6-30.5v-119H480ZM160-240h640v-160H160v160Zm270-52q-13 0-21.5-8.5T400-322q0-13 8.5-21.5T430-352h100q13 0 21.5 8.5T560-322q0 13-8.5 21.5T530-292H430Z"/>
</svg>`,
})
export class MsrRangeHoodIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
