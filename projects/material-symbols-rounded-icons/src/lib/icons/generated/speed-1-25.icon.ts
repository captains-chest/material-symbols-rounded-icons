import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-speed-1-25-icon',
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
  <path d="M700-280q-17 0-28.5-11.5T660-320q0-17 11.5-28.5T700-360h120v-80H700q-17 0-28.5-11.5T660-480v-160q0-17 11.5-28.5T700-680h160q17 0 28.5 11.5T900-640q0 17-11.5 28.5T860-600H740v80h80q33 0 56.5 23.5T900-440v80q0 33-23.5 56.5T820-280H700Zm-120 0H420q-17 0-28.5-11.5T380-320v-120q0-33 23.5-56.5T460-520h80v-80H420q-17 0-28.5-11.5T380-640q0-17 11.5-28.5T420-680h120q33 0 56.5 23.5T620-600v80q0 33-23.5 56.5T540-440h-80v80h120q17 0 28.5 11.5T620-320q0 17-11.5 28.5T580-280Zm-280 0q-17 0-28.5-11.5T260-320q0-17 11.5-28.5T300-360q17 0 28.5 11.5T340-320q0 17-11.5 28.5T300-280ZM140-600h-40q-17 0-28.5-11.5T60-640q0-17 11.5-28.5T100-680h80q17 0 28.5 11.5T220-640v320q0 17-11.5 28.5T180-280q-17 0-28.5-11.5T140-320v-280Z"/>
</svg>`,
})
export class MsrSpeed125IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
