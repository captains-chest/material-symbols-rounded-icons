import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-wand-shine-icon',
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
  <path d="M240-800q12-12 28.5-12t28.5 12l63 64q12 12 12 28t-12 28q-12 12-28.5 12T303-680l-64-63q-12-12-11.5-28.5T240-800Zm280-116q17 0 28.5 11.5T560-876v90q0 17-11.5 28.5T520-746q-17 0-28.5-11.5T480-786v-90q0-17 11.5-28.5T520-916Zm160 556q12-12 28.5-12t28.5 12l63 64q12 12 12 28t-12 28q-12 12-28.5 12T743-240l-64-63q-12-12-11.5-28.5T680-360Zm120-440q12 12 12 28.5T800-743l-64 64q-12 12-28 11.5T680-680q-12-12-12-28.5t12-28.5l63-63q12-12 28.5-12t28.5 12Zm116 280q0 17-11.5 28.5T876-480h-90q-17 0-28.5-11.5T746-520q0-17 11.5-28.5T786-560h90q17 0 28.5 11.5T916-520ZM205-92 92-205q-12-12-12-28t12-28l363-364q35-35 85-35t85 35q35 35 35 85t-35 85L261-92q-12 12-28 12t-28-12Zm279-335-14.5-14-14.5-14-14-14-14-14 28 28 29 28ZM233-176l251-251-57-56-250 250 56 57Z"/>
</svg>`,
})
export class MsrWandShineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
