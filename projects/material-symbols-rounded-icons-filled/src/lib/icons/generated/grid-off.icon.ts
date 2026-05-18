import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-grid-off-icon',
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
  <path d="m791-56-64-64h-74v-74l-80-80v154H387v-187h153l-80-80h-73v-74l-80-80v154H120v-186h155l-80-80h-75v-75l-64-64q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q12 12 11.5 28T847-56q-12 11-28 11.5T791-56Zm-591-64q-33 0-56.5-23.5T120-200v-107h187v187H200Zm640-116-71-71h71v71ZM689-387l-36-36v-150h187v186H689ZM573-503l-70-70h70v70ZM423-653l-36-36v-151h186v187H423Zm230 0v-187h107q33 0 56.5 23.5T840-760v107H653ZM307-769l-71-71h71v71Z"/>
</svg>`,
})
export class MsrfGridOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
