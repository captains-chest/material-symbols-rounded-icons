import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-note-stack-add-icon',
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
  <path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v287q0 16-6 30.5T857-257L703-103q-11 11-25.5 17T647-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q32-6 58 13.5t34 51.5l7 31q5 20-6 32t-26 14q-15 2-28.5-5.5T600-770l-7-30-433 77 60 344q3 17-6 30.5T188-332q-17 3-30-6.5T142-365L81-710Zm279 110v440h280l160-160v-280H360Zm220 220Zm-40 40v80q0 17 11.5 28.5T580-220q17 0 28.5-11.5T620-260v-80h80q17 0 28.5-11.5T740-380q0-17-11.5-28.5T700-420h-80v-80q0-17-11.5-28.5T580-540q-17 0-28.5 11.5T540-500v80h-80q-17 0-28.5 11.5T420-380q0 17 11.5 28.5T460-340h80Z"/>
</svg>`,
})
export class MsrNoteStackAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
