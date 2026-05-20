import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-settings-input-component-icon',
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
  <path d="M120-80v-128q-35-12-57.5-42.5T40-320v-360q0-17 11.5-28.5T80-720h40v-160q0-17 11.5-28.5T160-920q17 0 28.5 11.5T200-880v160h40q17 0 28.5 11.5T280-680v360q0 39-22.5 69.5T200-208v128q0 17-11.5 28.5T160-40q-17 0-28.5-11.5T120-80Zm320 0v-128q-35-12-57.5-42.5T360-320v-360q0-17 11.5-28.5T400-720h40v-160q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v160h40q17 0 28.5 11.5T600-680v360q0 39-22.5 69.5T520-208v128q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80Zm320 0v-128q-35-12-57.5-42.5T680-320v-360q0-17 11.5-28.5T720-720h40v-160q0-17 11.5-28.5T800-920q17 0 28.5 11.5T840-880v160h40q17 0 28.5 11.5T920-680v360q0 39-22.5 69.5T840-208v128q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80ZM120-640v160h80v-160h-80Zm320 0v160h80v-160h-80Zm320 0v160h80v-160h-80ZM160-280q17 0 28.5-11.5T200-320v-80h-80v80q0 17 11.5 28.5T160-280Zm320 0q17 0 28.5-11.5T520-320v-80h-80v80q0 17 11.5 28.5T480-280Zm320 0q17 0 28.5-11.5T840-320v-80h-80v80q0 17 11.5 28.5T800-280ZM160-440Zm320 0Zm320 0Z"/>
</svg>`,
})
export class MsrSettingsInputComponentIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
