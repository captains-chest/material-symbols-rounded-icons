import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-auto-stories-off-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  <path d="M452-180q-43-29-92-44.5T260-240q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q6-3 11.5-6t11.5-5l-31-31q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11 28t-11 28q-11 11-28 11t-28-11L618-230q-29 8-56.5 20.5T508-180q-13 8-28 8t-28-8Zm28-414L274-800q47 2 92 13t87 32q13 6 20 18.5t7 26.5v116Zm0 338q18-11 36.5-20t38.5-17l-75-75v112Zm161-177-81-81v-193q0-16 6-30.5t17-25.5l109-109q19-19 43.5-8.5T760-843v267q0 17-6.5 33T734-516l-93 83Zm240 240L758-316q21 3 41.5 8t40.5 12v-420q0-20 12.5-30t27.5-10q15 0 27.5 10t12.5 30v482q0 17-11.5 28.5T881-193Z"/>
</svg>`,
})
export class MsrfAutoStoriesOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
