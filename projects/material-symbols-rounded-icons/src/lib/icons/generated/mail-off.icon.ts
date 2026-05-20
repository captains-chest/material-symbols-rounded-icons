import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mail-off-icon',
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
  <path d="M383-463Zm194-34ZM763-84l-77-76H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm117-636v430q0 20-12.5 30T840-250q-15 0-27.5-10.5T800-291v-349L598-513q-14 9-27 4.5T551-524q-7-11-5-24.5t16-22.5l238-149H371q-20 0-30-12.5T331-760q0-15 10-27.5t30-12.5h429q33 0 56.5 23.5T880-720Z"/>
</svg>`,
})
export class MsrMailOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
