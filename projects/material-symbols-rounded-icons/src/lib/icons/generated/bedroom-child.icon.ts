import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-bedroom-child-icon',
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
  <path d="M300-340h360v30q0 13 8.5 21.5T690-280q13 0 21.5-8.5T720-310v-136q0-30-16.5-53.5T660-534v-66q0-33-23.5-56.5T580-680H380q-33 0-56.5 23.5T300-600v66q-27 11-43.5 34.5T240-446v136q0 13 8.5 21.5T270-280q13 0 21.5-8.5T300-310v-30Zm0-60v-46q0-14 10-24t24-10h292q14 0 24 10t10 24v46H300Zm60-140v-80h240v80H360ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z"/>
</svg>`,
})
export class MsrBedroomChildIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
