import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tv-options-edit-channels-icon',
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
  <path d="M280-320q-17 0-28.5-11.5T240-360q0-17 11.5-28.5T280-400h80q17 0 28.5 11.5T400-360q0 17-11.5 28.5T360-320h-80Zm0-160q-17 0-28.5-11.5T240-520q0-17 11.5-28.5T280-560h440q17 0 28.5 11.5T760-520q0 17-11.5 28.5T720-480H280Zm0-160q-17 0-28.5-11.5T240-680q0-17 11.5-28.5T280-720h440q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H280Zm358 463q-8 0-15-2.5t-13-8.5L496-302q-12-12-11.5-28.5T497-359q12-12 28.5-12t28.5 12l84 85 197-197q12-12 28.5-11.5T892-470q11 12 11.5 28T892-414L666-188q-6 6-13 8.5t-15 2.5ZM120-640q-17 0-28.5-11.5T80-680q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680q0 17-11.5 28.5T120-640Zm0 160q-17 0-28.5-11.5T80-520q0-17 11.5-28.5T120-560q17 0 28.5 11.5T160-520q0 17-11.5 28.5T120-480Zm0 160q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400q17 0 28.5 11.5T160-360q0 17-11.5 28.5T120-320Z"/>
</svg>`,
})
export class MsrTvOptionsEditChannelsIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
