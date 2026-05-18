import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-location-searching-icon',
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
  <path d="M440-80v-40q-125-14-214.5-103.5T122-438H82q-17 0-28.5-11.5T42-478q0-17 11.5-28.5T82-518h40q14-125 103.5-214.5T440-836v-40q0-17 11.5-28.5T480-916q17 0 28.5 11.5T520-876v40q125 14 214.5 103.5T838-518h40q17 0 28.5 11.5T918-478q0 17-11.5 28.5T878-438h-40q-14 125-103.5 214.5T520-120v40q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80Zm40-118q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z"/>
</svg>`,
})
export class MsrfLocationSearchingIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
