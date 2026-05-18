import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-whatshot-icon',
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
  <path d="M82-520q15-152 128-256t270-104q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80q-53 0-103-13t-95-39q-18-10-20-29t14-35q9-9 23-11t25 5q37 20 76 31t80 11q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-123 0-213 80.5T162-520q-2 17-13.5 28.5T120-480q-17 0-28.5-12T82-520Zm398 40Zm160-24v64q0 17 11.5 28.5T680-400q17 0 28.5-11.5T720-440v-160q0-17-11.5-28.5T680-640H520q-17 0-28.5 11.5T480-600q0 17 11.5 28.5T520-560h64L438-414l-92-77q-12-10-27.5-9T292-488L139-335q-10 10-11.5 23.5T133-286q10 17 29 19t33-12l127-127 92 77q12 10 27.5 9t26.5-12l172-172Z"/>
</svg>`,
})
export class MsrWhatshotIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
