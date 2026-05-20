import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-data-object-icon',
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
  <path d="M600-160q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h80q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720h-80q-17 0-28.5-11.5T560-760q0-17 11.5-28.5T600-800h80q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560t28.5 11.5Q880-537 880-520v80q0 17-11.5 28.5T840-400t-28.5 11.5Q800-377 800-360v80q0 50-35 85t-85 35h-80Zm-320 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400t-28.5-11.5Q80-423 80-440v-80q0-17 11.5-28.5T120-560t28.5-11.5Q160-583 160-600v-80q0-50 35-85t85-35h80q17 0 28.5 11.5T400-760q0 17-11.5 28.5T360-720h-80q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h80q17 0 28.5 11.5T400-200q0 17-11.5 28.5T360-160h-80Z"/>
</svg>`,
})
export class MsrDataObjectIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
