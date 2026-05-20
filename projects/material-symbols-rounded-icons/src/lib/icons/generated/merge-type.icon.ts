import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-merge-type-icon',
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
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M692-188q-11 11-28 11t-28-11L464-361q-11-11-17.5-25.5T440-417v-268l-75 75q-12 12-28.5 12T308-610q-12-12-12-28t12-28l144-145q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l144 143q12 12 12 28.5T652-611q-12 12-28.5 12.5T595-610l-75-75v269l172 172q11 11 11 28t-11 28Zm-424 1q-12-12-11.5-28.5T268-243l71-72q12-12 28.5-12t28.5 12q12 12 11.5 28.5T395-258l-71 71q-11 11-28 11t-28-11Z"/>
</svg>`,
})
export class MsrMergeTypeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
