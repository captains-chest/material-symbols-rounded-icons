import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-picture-in-picture-mobile-icon',
  standalone: true,
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
  <path d="M800-160q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Zm-40 320v-240q0-17-11.5-28.5T640-760H480q-17 0-28.5 11.5T440-720v240q0 17 11.5 28.5T480-440h160q17 0 28.5-11.5T680-480Zm-80-40h-80v-160h80v160Z"/>
</svg>`,
})
export class MsrPictureInPictureMobileIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
