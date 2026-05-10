import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-gitlab-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M460-126 181-336q-51-38-68-100t6-122l102-265q3-8 10-12.5t15-4.5q8 0 15.5 4.5T272-821l69 211h278l69-211q3-10 10.5-14.5T714-840q8 0 15 4.5t10 12.5l101 265q23 60 6 122t-68 100L498-126q-8 6-19 6t-19-6Z"/>
</svg>`,
})
export class MsrfGitlabIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
