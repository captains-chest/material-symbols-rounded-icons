import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-missing-controller-icon',
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
  <path d="m226-774-56-56q59-62 138.5-96T480-960q92 0 171.5 34T790-830l-56 56q-48-50-113.5-78T480-880q-75 0-140.5 28T226-774Zm112 112-56-56q38-38 88.5-60T480-800q59 0 109.5 22t88.5 60l-56 56q-27-27-63.5-42.5T480-720q-42 0-78.5 15.5T338-662ZM480 0q-57 0-98.5-41.5T340-140v-322q0-57 41.5-98.5T480-602q57 0 98.5 41.5T620-462v322q0 57-41.5 98.5T480 0Zm0-380q33 0 56.5-23.5T560-460q0-33-23.5-56.5T480-540q-33 0-56.5 23.5T400-460q0 33 23.5 56.5T480-380Z"/>
</svg>`,
})
export class MsrMissingControllerIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
