import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-view-array-icon',
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
  <path d="M120-260v-440q0-25 17.5-42.5T180-760q25 0 42.5 17.5T240-700v440q0 25-17.5 42.5T180-200q-25 0-42.5-17.5T120-260Zm220 60q-25 0-42.5-17.5T280-260v-440q0-25 17.5-42.5T340-760h280q25 0 42.5 17.5T680-700v440q0 25-17.5 42.5T620-200H340Zm380-60v-440q0-25 17.5-42.5T780-760q25 0 42.5 17.5T840-700v440q0 25-17.5 42.5T780-200q-25 0-42.5-17.5T720-260Zm-360-20h240v-400H360v400Zm120-200Z"/>
</svg>`,
})
export class MsrViewArrayIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
