import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-data-info-alert-icon',
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
  <path d="M160-160q-17 0-28.5-11.5T120-200q0-17 11.5-28.5T160-240h400q17 0 28.5 11.5T600-200q0 17-11.5 28.5T560-160H160Zm480-280q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Zm-480-40q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h187q17 0 28.5 11.5T387-520q0 16-11.5 28T347-480H160Zm0 160q-17 0-28.5-11.5T120-360q0-17 11.5-28.5T160-400h317q17 0 28.5 11.5T517-360q0 16-11 28t-29 12H160Zm480-200q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
</svg>`,
})
export class MsrDataInfoAlertIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
