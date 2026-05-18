import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-mobile-hand-left-icon',
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
  <path d="M720-160v-268 39-411 640ZM323-40h-43q-66 0-113-47t-47-113v-320q0-66 47-113t113-47h80v355l116-58q23-12 49-7.5t44 22.5l19 20q11 11 12 26.5t-9 27.5L412-80q-17 19-40 29.5T323-40Zm397-40H412l67-80h241v-640H360v120h-80v-120q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80ZM540-680q17 0 28.5-11.5T580-720q0-17-11.5-28.5T540-760q-17 0-28.5 11.5T500-720q0 17 11.5 28.5T540-680ZM323-120q9 0 17-3.5t14-10.5l139-167-155 77q-20 10-39-1.5T280-260v-340q-33 0-56.5 23.5T200-520v320q0 34 23.5 57t56.5 23h43Z"/>
</svg>`,
})
export class MsrMobileHandLeftIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
