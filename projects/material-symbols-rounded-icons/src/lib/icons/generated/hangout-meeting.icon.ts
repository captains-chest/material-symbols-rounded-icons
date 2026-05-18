import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-hangout-meeting-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M380 656h160q17 0 28.5-11.5T580 616v-30l80 50V436l-80 50v-30q0-17-11.5-28.5T540 416H380q-17 0-28.5 11.5T340 456v160q0 17 11.5 28.5T380 656Zm100 360V876q-73 0-138.5-27.5t-114.5-74q-49-46.5-78-108T120 536q0-75 28.5-140.5t77-114.5q48.5-49 114-77T480 176q75 0 140.5 28T735 281q49 49 77 114.5T840 536q0 141-94 266.5T480 1016Zm80-144q96-72 148-159.5T760 536q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 104 84 182t196 78h80v76Zm-80-308Z"/>
</svg>`,
})
export class MsrHangoutMeetingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
