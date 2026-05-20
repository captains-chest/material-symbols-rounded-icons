import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-stylus-fountain-pen-icon',
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
  <path d="M338-320q-14 0-25-8.5T299-351l-73-306q-2-11 .5-21t10.5-18l216-199q11-11 27-11t27 11l216 199q8 8 10.5 18t.5 21l-73 306q-3 14-14 22.5t-25 8.5H338Zm32-80h220l61-253-131-121v106q14 10 22 25t8 33q0 29-20.5 49.5T480-540q-29 0-49.5-20.5T410-610q0-18 8-33t22-25v-106L309-653l61 253ZM215-120q-20 0-32.5-16.5T177-173l5-12q8-25 29-40t47-15h444q26 0 47 15t29 40l5 12q7 20-5.5 36.5T745-120H215Z"/>
</svg>`,
})
export class MsrStylusFountainPenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
