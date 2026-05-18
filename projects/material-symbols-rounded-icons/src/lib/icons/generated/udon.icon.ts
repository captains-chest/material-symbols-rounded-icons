import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-udon-icon',
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
  <path d="M480-80q-154 0-266.5-101T83-431q-2-20 11.5-34.5T128-480h32v-284q0-15 10.5-26.5T196-804l651-72q14-2 23.5 6.5T880-847q0 11-7.5 19.5T854-817l-434 49v68h430q13 0 21.5 8.5T880-670q0 13-8.5 21.5T850-640H420v160h412q20 0 33.5 14.5T877-431q-18 149-130.5 250T480-80ZM220-480h40v-160h-40v160Zm0-220h40v-50l-40 4v46Zm100 220h40v-160h-40v160Zm0-220h40v-62l-40 5v57ZM185-360h590q4-10 7-19.5t6-20.5H171q3 11 6.5 20.5T185-360Zm295 200q75 0 139-32.5T728-280H232q45 55 109 87.5T480-160Zm0-120Zm0-80Zm0 80v-80 80Z"/>
</svg>`,
})
export class MsrUdonIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
