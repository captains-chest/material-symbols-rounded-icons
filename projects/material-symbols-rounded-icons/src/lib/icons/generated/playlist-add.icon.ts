import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-playlist-add-icon',
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
  <path d="M160-320q-17 0-28.5-11.5T120-360q0-17 11.5-28.5T160-400h200q17 0 28.5 11.5T400-360q0 17-11.5 28.5T360-320H160Zm0-160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h360q17 0 28.5 11.5T560-520q0 17-11.5 28.5T520-480H160Zm0-160q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h360q17 0 28.5 11.5T560-680q0 17-11.5 28.5T520-640H160Zm520 480q-17 0-28.5-11.5T640-200v-120H520q-17 0-28.5-11.5T480-360q0-17 11.5-28.5T520-400h120v-120q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520v120h120q17 0 28.5 11.5T880-360q0 17-11.5 28.5T840-320H720v120q0 17-11.5 28.5T680-160Z"/>
</svg>`,
})
export class MsrPlaylistAddIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
