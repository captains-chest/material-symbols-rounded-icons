import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-masked-transitions-add-icon',
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
  <path d="M320-240v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm40 160q-116 0-198-82T80-360q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198T360-80Zm0-80q83 0 141.5-58.5T560-360q0-83-58.5-141.5T360-560q-83 0-141.5 58.5T160-360q0 83 58.5 141.5T360-160Zm318-172q2-6 2-13v-15q0-133-93.5-226.5T360-680h-15q-7 0-13 2 26-88 98.5-145T600-880q116 0 198 82t82 198q0 97-57 169.5T678-332Z"/>
</svg>`,
})
export class MsrMaskedTransitionsAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
