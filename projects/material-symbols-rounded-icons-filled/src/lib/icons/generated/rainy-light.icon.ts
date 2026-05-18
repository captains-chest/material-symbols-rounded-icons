import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-rainy-light-icon',
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
  <path d="M198-484q-15 8-30.5 2.5T144-502L44-702q-8-15-2.5-30.5T62-756q15-8 30.5-2.5T116-738l100 200q8 15 2.5 30.5T198-484Zm140 280q-15 8-30.5 2.5T284-222l-80-160q-8-15-2.5-30.5T222-436q15-8 30.5-2.5T276-418l80 160q8 15 2.5 30.5T338-204Zm82-200q-15 8-30.5 2.5T366-422L226-702q-8-15-2.5-30.5T244-756q15-8 30.5-2.5T298-738l140 280q8 15 2.5 30.5T420-404Zm86-200q-15 8-30.5 2.5T452-622l-39-80q-8-15-2.5-30.5T431-756q15-8 30-2.5t23 20.5l40 80q8 15 2.5 30.5T506-604Zm24 399q-15 8-30.5 3T476-222l-40-80q-8-15-2.5-30.5T454-356q15-8 30.5-2.5T508-338l40 80q8 15 2.5 30T530-205Zm186 0q-15 8-30.5 3T662-222L522-502q-8-15-2.5-30.5T540-556q15-8 30.5-2.5T594-538l140 280q8 15 2.5 30T716-205Zm62-239q-15 8-30.5 2.5T724-462L604-702q-8-15-2.5-30.5T622-756q15-8 30.5-2.5T676-738l120 240q8 15 2.5 30.5T778-444Zm120 240q-15 8-30.5 2.5T844-222l-60-120q-8-15-2.5-30.5T802-396q15-8 30.5-2.5T856-378l60 120q8 15 2.5 30.5T898-204Z"/>
</svg>`,
})
export class MsrfRainyLightIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
