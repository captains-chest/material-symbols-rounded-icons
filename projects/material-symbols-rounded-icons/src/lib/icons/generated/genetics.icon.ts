import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-genetics-icon',
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
  <path d="M200-80q0-139 58-225.5T418-480q-102-88-160-174.5T200-880v-10q0-17 11.5-28.5T240-930q17 0 28.5 11.5T280-890v10q0 11 .5 20.5T282-840h396q1-10 1.5-19.5t.5-20.5v-10q0-17 11.5-28.5T720-930q17 0 28.5 11.5T760-890v10q0 139-58 225.5T542-480q102 88 160 174.5T760-80v10q0 17-11.5 28.5T720-30q-17 0-28.5-11.5T680-70v-10q0-11-.5-20.5T678-120H282q-1 10-1.5 19.5T280-80v10q0 17-11.5 28.5T240-30q-17 0-28.5-11.5T200-70v-10Zm138-600h284q13-19 22.5-38t17.5-42H298q8 22 17.5 41.5T338-680Zm142 148q20-17 39-34t36-34H405q17 17 36 34t39 34Zm-75 172h150q-17-17-36-34t-39-34q-20 17-39 34t-36 34ZM298-200h364q-8-22-17.5-41.5T622-280H338q-13 19-22.5 38T298-200Z"/>
</svg>`,
})
export class MsrGeneticsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
