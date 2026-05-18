import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-r-mobiledata-icon',
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
  <path d="M160-666v66q0 17-11.5 28.5T120-560q-17 0-28.5-11.5T80-600v-240q0-17 11.5-28.5T120-880h160q33 0 56.5 23.5T360-800v54q0 24-14 43.5T312-672l26 61q8 18-3 34.5T304-560q-11 0-20-6t-14-16l-36-84h-74Zm0-80h120v-54H160v54Z"/>
</svg>`,
})
export class MsrfRMobiledataIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
