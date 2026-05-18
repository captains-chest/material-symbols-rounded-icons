import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sports-rugby-icon',
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
  <path d="M306-100q-57 0-103-9t-65-29q-18-19-28-66t-10-106q0-115 40.5-220.5T252-708q71-71 177.5-111.5T654-860q57 0 103 9t65 29q18 19 28 66t10 106q0 115-40.5 220.5T708-252q-71 71-177.5 111.5T306-100ZM182-326q33-72 80-140.5T366-594q57-57 125.5-104T632-778q-91 3-178.5 37.5T310-650q-59 57-92.5 143T182-326Zm146 144q91-3 178.5-37.5T650-310q59-57 92.5-143T778-634q-33 72-79.5 140.5T594-366q-57 57-125.5 104T328-182Zm-100-46q80-27 163-80t145-116q66-65 119-148t77-160q-80 27-163 80T424-536q-66 65-119 148t-77 160Zm252-252Z"/>
</svg>`,
})
export class MsrSportsRugbyIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
