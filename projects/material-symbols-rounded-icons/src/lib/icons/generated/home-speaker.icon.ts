import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-home-speaker-icon',
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
  <path d="M383-120q-73 0-121-54.5T224-301l55-412q2-11 8.5-19.5T304-745l316-126q18-8 35 2.5t19 30.5l64 539q8 72-39 125.5T580-120H383Zm0-80h197q36 0 60-27t19-63l-13-110H319l-15 109q-5 36 19 63.5t60 27.5Zm-27-479-27 199h307l-35-298-245 99Zm126 279Zm1-80Zm-1 80v-80 80Z"/>
</svg>`,
})
export class MsrHomeSpeakerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
