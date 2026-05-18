import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-host-icon',
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
  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h200q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H160Zm440 0q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h200q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H600Zm-440-80h200v-560H160v560Zm440 0h200v-560H600v560ZM320-400q0-17-11.5-28.5T280-440h-40q-17 0-28.5 11.5T200-400q0 17 11.5 28.5T240-360h40q17 0 28.5-11.5T320-400Zm440 0q0-17-11.5-28.5T720-440h-40q-17 0-28.5 11.5T640-400q0 17 11.5 28.5T680-360h40q17 0 28.5-11.5T760-400ZM320-520q0-17-11.5-28.5T280-560h-40q-17 0-28.5 11.5T200-520q0 17 11.5 28.5T240-480h40q17 0 28.5-11.5T320-520Zm440 0q0-17-11.5-28.5T720-560h-40q-17 0-28.5 11.5T640-520q0 17 11.5 28.5T680-480h40q17 0 28.5-11.5T760-520ZM320-640q0-17-11.5-28.5T280-680h-40q-17 0-28.5 11.5T200-640q0 17 11.5 28.5T240-600h40q17 0 28.5-11.5T320-640Zm440 0q0-17-11.5-28.5T720-680h-40q-17 0-28.5 11.5T640-640q0 17 11.5 28.5T680-600h40q17 0 28.5-11.5T760-640ZM160-200h200-200Zm440 0h200-200Z"/>
</svg>`,
})
export class MsrHostIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
