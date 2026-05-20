import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-car-lock-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M300-320q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm14-240q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T760-880q33 0 56.5 23.5T840-800v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H674ZM160-120q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h260q17 0 28.5 11.5T560-720q0 17-11.5 28.5T520-680H274l-42 120h328q0 33 23.5 56.5T640-480h160q17 0 28.5 11.5T840-440v280q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120h-40Zm560-640h80v-40q0-17-11.5-28.5T760-840q-17 0-28.5 11.5T720-800v40Z"/>
</svg>`,
})
export class MsrfCarLockIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
