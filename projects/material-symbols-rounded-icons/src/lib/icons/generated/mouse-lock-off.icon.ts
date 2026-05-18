import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mouse-lock-off-icon',
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
  <path d="M440-632Zm111 112Zm-131 93Zm20-93Zm0 0Zm80-80Zm-40-280q116 0 198 82t82 198v124q-20-4-40-4t-40 4v-44H551L440-632v-164q-31 6-57.5 21T335-738l-56-57q38-39 90-62t111-23ZM231-728l209 208H280v160q0 83 58.5 141.5T480-160q11 0 20.5-1t19.5-3v81q-10 2-19.5 2.5T480-80q-116 0-198-82t-82-198v-240q0-35 8-67t23-61Zm289 128h160q0-72-45.5-127T520-796v196ZM791-56 56-791q-12-12-12-28.5T56-848q12-12 28-12t28 12l735 736q12 12 12 28t-12 28q-12 12-28 12t-28-12ZM634-80q-14 0-24-10t-10-24v-126q0-17 11.5-28.5T640-280h40l160 160v6q0 14-10 24t-24 10H634Zm166-188-40-40v-12q0-17-11.5-28.5T720-360h-5q-3 0-5 1l-30-30q9-5 19-8t21-3q33 0 56.5 23.5T800-320v52Z"/>
</svg>`,
})
export class MsrMouseLockOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
