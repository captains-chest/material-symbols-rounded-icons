import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-local-bar-icon',
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
  <path d="M440-200v-200L138-740q-8-8-13-18.5t-5-21.5q0-26 18-43t44-17h596q26 0 44 17t18 43q0 11-5 21.5T822-740L520-400v200h160q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h160ZM298-680h364l72-80H226l72 80Zm182 204 111-124H369l111 124Zm0 0Z"/>
</svg>`,
})
export class MsrLocalBarIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
