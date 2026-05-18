import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-gitlab-icon',
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
  <path d="M460-126 181-336q-51-38-68-100t6-122l102-265q3-8 10-12.5t15-4.5q8 0 15.5 4.5T272-821l69 211h278l69-211q3-10 10.5-14.5T714-840q8 0 15 4.5t10 12.5l101 265q23 60 6 122t-68 100L498-126q-8 6-19 6t-19-6Z"/>
</svg>`,
})
export class MsrGitlabIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
