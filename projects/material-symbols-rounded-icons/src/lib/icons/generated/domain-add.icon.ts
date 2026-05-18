import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-domain-add-icon',
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v80h320q33 0 56.5 23.5T880-600v200q0 17-11.5 28.5T840-360q-17 0-28.5-11.5T800-400v-200H480v80h80v80h-80v80h80v80h-80v80h120q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H160Zm0-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM840-40q-17 0-28.5-11.5T800-80v-40h-40q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200h40v-40q0-17 11.5-28.5T840-280q17 0 28.5 11.5T880-240v40h40q17 0 28.5 11.5T960-160q0 17-11.5 28.5T920-120h-40v40q0 17-11.5 28.5T840-40ZM640-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>
</svg>`,
})
export class MsrDomainAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
