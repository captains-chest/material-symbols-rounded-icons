import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-high-res-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M240-300h24l29 64q3 8 10 12t15 4q15 0 23.5-12t2.5-26l-20-46q15-9 25.5-23.5T360-360v-40q0-25-17.5-42.5T300-460h-80q-17 0-28.5 11.5T180-420v170q0 13 8.5 21.5T210-220q13 0 21.5-8.5T240-250v-50Zm290 80q13 0 21.5-8.5T560-250q0-13-8.5-21.5T530-280h-70v-30h50q13 0 21.5-8.5T540-340q0-13-8.5-21.5T510-370h-50v-30h70q13 0 21.5-8.5T560-430q0-13-8.5-21.5T530-460h-90q-17 0-28.5 11.5T400-420v160q0 17 11.5 28.5T440-220h90Zm190-60h-90q-13 0-21.5 8.5T600-250q0 13 8.5 21.5T630-220h110q17 0 28.5-11.5T780-260v-60q0-17-11.5-28.5T740-360h-80v-40h90q13 0 21.5-8.5T780-430q0-13-8.5-21.5T750-460H640q-17 0-28.5 11.5T600-420v60q0 17 11.5 28.5T640-320h80v40Zm-480-80v-40h60v40h-60Zm120-230h60v60q0 13 8.5 21.5T450-500q13 0 21.5-8.5T480-530v-180q0-13-8.5-21.5T450-740q-13 0-21.5 8.5T420-710v60h-60v-60q0-13-8.5-21.5T330-740q-13 0-21.5 8.5T300-710v180q0 13 8.5 21.5T330-500q13 0 21.5-8.5T360-530v-60Zm220-120v180q0 13 8.5 21.5T610-500q13 0 21.5-8.5T640-530v-180q0-13-8.5-21.5T610-740q-13 0-21.5 8.5T580-710ZM120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Z"/>
</svg>`,
})
export class MsrfHighResIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
