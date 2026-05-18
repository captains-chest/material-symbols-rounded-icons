import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-conversation-icon',
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
  <path d="M190-520q-21 0-35.5-14.5T140-570q0-21 14.5-35.5T190-620q21 0 35.5 14.5T240-570q0 21-14.5 35.5T190-520Zm580 0q-21 0-35.5-14.5T720-570q0-21 14.5-35.5T770-620q21 0 35.5 14.5T820-570q0 21-14.5 35.5T770-520ZM40-440Zm880 0ZM160-160v40q0 17-11.5 28.5T120-80q-17 0-28.5-11.5T80-120v-80q0-17 11.5-28.5T120-240h120q-66 0-113-47T80-400q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400q0 33 23.5 56.5T240-320v-80q0-17 11.5-28.5T280-440h68l-38-155q-20-82-83.5-136.5T78-797q-17-2-27.5-14T40-840q0-17 11-28.5t27-9.5q112 11 197 82.5T387-615l52 205q5 19-7 34.5T400-360h-80v120q0 33-23.5 56.5T240-160h-80Zm640 0h-80q-33 0-56.5-23.5T640-240v-120h-80q-20 0-32-16t-6-36l51-203q29-108 113.5-179.5T882-878q16-2 27 9.5t11 28.5q0 17-10.5 29T882-797q-84 11-146.5 66T651-595l-39 155h68q17 0 28.5 11.5T720-400v80q33 0 56.5-23.5T800-400q0-17 11.5-28.5T840-440q17 0 28.5 11.5T880-400q0 66-47 113t-113 47h120q17 0 28.5 11.5T880-200v80q0 17-11.5 28.5T840-80q-17 0-28.5-11.5T800-120v-40Zm-480-80v-80 80Zm320 0v-80 80Z"/>
</svg>`,
})
export class MsrConversationIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
