import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-nfc-off-icon',
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
  <path d="M200-120q-33 0-56.5-23.5T120-200v-527l-65-65q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-64-63H200Zm0-527v447h447l-80-80H320q-17 0-28.5-11.5T280-320v-247l-80-80Zm160 287h127L360-487v127Zm320-280v166q0 17-11.5 28.5T640-434q-17 0-28.5-11.5T600-474v-126H455q-5 0-7.5-2.5T445-610v-30q0-17 11.5-28.5T485-680h155q17 0 28.5 11.5T680-640Zm160-120v446q0 17-11.5 28.5T800-274q-17 0-28.5-11.5T760-314v-446H314q-17 0-28.5-11.5T274-800q0-17 11.5-28.5T314-840h446q33 0 56.5 23.5T840-760ZM424-424Zm113-113Z"/>
</svg>`,
})
export class MsrNfcOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
