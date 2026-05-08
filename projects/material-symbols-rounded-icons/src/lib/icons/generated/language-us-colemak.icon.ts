import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-language-us-colemak-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M580-360h140v-240H580v240Zm-340 80q-33 0-56.5-23.5T160-360v-240q0-33 23.5-56.5T240-680h140q17 0 28.5 11.5T420-640q0 17-11.5 28.5T380-600H240v240h140q17 0 28.5 11.5T420-320q0 17-11.5 28.5T380-280H240Zm340 0q-33 0-56.5-23.5T500-360v-240q0-33 23.5-56.5T580-680h140q33 0 56.5 23.5T800-600v240q0 33-23.5 56.5T720-280H580Z"/>
</svg>`,
})
export class MsrLanguageUsColemakIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
