import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-tv-with-assistant-icon',
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
  <path d="M420-460q17 0 28.5-11.5T460-500q0-17-11.5-28.5T420-540q-17 0-28.5 11.5T380-500q0 17 11.5 28.5T420-460Zm120 0q17 0 28.5-11.5T580-500q0-17-11.5-28.5T540-540q-17 0-28.5 11.5T500-500q0 17 11.5 28.5T540-460Zm-240 0q17 0 28.5-11.5T340-500q0-17-11.5-28.5T300-540q-17 0-28.5 11.5T260-500q0 17 11.5 28.5T300-460Zm360 0q17 0 28.5-11.5T700-500q0-17-11.5-28.5T660-540q-17 0-28.5 11.5T620-500q0 17 11.5 28.5T660-460ZM227-200l-22 66q-2 6-7 10t-12 4h-6q-8 0-14-6t-6-14v-60q-33 0-56.5-23.5T80-280v-440q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v440q0 33-23.5 56.5T800-200v61q0 8-5.5 13.5T781-120h-7q-6 0-11-3.5t-7-9.5l-22-67H227Zm-67-80h640v-440H160v440Zm320-220Z"/>
</svg>`,
})
export class MsrTvWithAssistantIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
