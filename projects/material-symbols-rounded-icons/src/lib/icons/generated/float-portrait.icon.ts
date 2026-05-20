import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-float-portrait-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M240 976q-33 0-56.5-23.5T160 896V256q0-33 23.5-56.5T240 176h480q33 0 56.5 23.5T800 256v320q0 17-11.5 28.5T760 616q-17 0-28.5-11.5T720 576V256H240v640h240q17 0 28.5 11.5T520 936q0 17-11.5 28.5T480 976H240Zm400 0q-17 0-28.5-11.5T600 936V736q0-17 11.5-28.5T640 696h120q17 0 28.5 11.5T800 736v200q0 17-11.5 28.5T760 976H640Zm-120-80H240V256h480v360H600q-33 0-56.5 23.5T520 696v200Z"/>
</svg>`,
})
export class MsrFloatPortraitIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
