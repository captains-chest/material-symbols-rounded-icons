import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-nest-tag-icon',
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
  <path d="M480-80q-117 0-198.5-81.5T200-360q0-94 55-168t145-100v-212q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v212q89 26 144.5 100T760-360q0 117-82 198.5T480-80Zm0-80q83 0 141.5-58T680-360q0-83-58.5-141.5T480-560q-84 0-142 58.5T280-360q0 84 58 142t142 58Z"/>
</svg>`,
})
export class MsrNestTagIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
