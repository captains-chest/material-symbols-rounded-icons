import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-slab-serif-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="m349-310 31-80h194l30 80h-50q-14 0-24.5 10.5T519-275q0 14 10.5 24.5T554-240h141q14 0 24.5-10.5T730-275q0-14-10.5-24.5T695-310h-5L539-692q-5-13-16-20.5t-25-7.5h-35q-14 0-25 7.5T422-692L270-310h-5q-14 0-24.5 10.5T230-275q0 14 10.5 24.5T265-240h136q14 0 24.5-10.5T436-275q0-14-11-24.5T400-310h-51Zm56-145 68-177h7l68 177H405ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Z"/>
</svg>`,
})
export class MsrfSlabSerifIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
