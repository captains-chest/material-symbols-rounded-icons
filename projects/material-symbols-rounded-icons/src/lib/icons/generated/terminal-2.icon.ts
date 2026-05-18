import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-terminal-2-icon',
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
  <path d="M520-160q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240h240q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160H520ZM347-560 192-715q-12-12-12-28.5t12-28.5q12-12 28-12t28 12l184 184q12 12 12 28t-12 28L248-348q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l155-155Z"/>
</svg>`,
})
export class MsrTerminal2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
