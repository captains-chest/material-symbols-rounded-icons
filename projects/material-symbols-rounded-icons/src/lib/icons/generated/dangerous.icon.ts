import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-dangerous-icon',
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
  <path d="M363-120q-16 0-30.5-6T307-143L143-307q-11-11-17-25.5t-6-30.5v-234q0-16 6-30.5t17-25.5l164-164q11-11 25.5-17t30.5-6h234q16 0 30.5 6t25.5 17l164 164q11 11 17 25.5t6 30.5v234q0 16-6 30.5T817-307L653-143q-11 11-25.5 17t-30.5 6H363Zm1-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-224 86 86q11 11 28 11t28-11q11-11 11-28t-11-28l-86-86 86-86q11-11 11-28t-11-28q-11-11-28-11t-28 11l-86 86-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l86 86-86 86q-11 11-11 28t11 28q11 11 28 11t28-11l86-86Zm0-56Z"/>
</svg>`,
})
export class MsrDangerousIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
