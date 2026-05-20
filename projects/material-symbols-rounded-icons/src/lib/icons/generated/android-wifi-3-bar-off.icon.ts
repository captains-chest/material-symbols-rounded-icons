import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-android-wifi-3-bar-off-icon',
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
  <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160ZM302-520l-110-77q-10 6-19 12.5T155-571q-20 16-45.5 15.5T66-574q-17-17-17-42t20-40q5-4 9.5-7t9.5-7l-18-12q-17-12-20.5-32t8.5-37q12-17 32.5-21t37.5 8l704 494q17 12 21 32t-8 37q-12 17-32.5 20.5T775-189L424-435q-26 5-50.5 14.5T326-397q-22 14-47 12.5T236-404q-17-17-16.5-41.5T240-484q15-11 30.5-19.5T302-520Zm123-157-135-95q46-14 93.5-21t96.5-7q113 0 218 37t193 107q20 15 20 40t-17 42q-18 18-43.5 18.5T805-571q-70-54-153-81.5T480-680q-14 0-27.5.5T425-677Z"/>
</svg>`,
})
export class MsrAndroidWifi3BarOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
