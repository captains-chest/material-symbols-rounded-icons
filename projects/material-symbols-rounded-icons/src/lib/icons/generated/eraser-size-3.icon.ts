import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-eraser-size-3-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M340-200q-58 0-99-41t-41-99q0-27 10.5-53t30.5-46l280-280q20-20 46-30.5t53-10.5q58 0 99 41t41 99q0 27-10.5 53T719-521L439-241q-20 20-46 30.5T340-200Z"/>
</svg>`,
})
export class MsrEraserSize3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
