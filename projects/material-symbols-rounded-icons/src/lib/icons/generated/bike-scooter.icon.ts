import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-bike-scooter-icon',
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
  <path d="M0-200v-80h164q11-68 56.5-119T332-470l-58-250H160q-17 0-28.5-11.5T120-760q0-17 11.5-28.5T160-800h114q27 0 49.5 17.5T352-738l78 338h-30q-66 0-113 47t-47 113v40H0Zm400 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T440-240q0-17-11.5-28.5T400-280q-17 0-28.5 11.5T360-240q0 17 11.5 28.5T400-200Zm360-40q-72 0-126.5-44.5T564-400h-94l-18-80h112q5-23 13.5-43t22.5-37H434l-18-80h226l-44-120h-64q-17 0-28.5-11.5T494-800q0-17 11.5-28.5T534-840h64q26 0 46.5 14t29.5 38l54 146h32q83 0 141.5 58.5T960-442q0 85-58.5 143.5T760-240Zm0-80q51 0 85.5-35t34.5-85q0-51-34.5-85.5T760-560h-4l26 69q6 16-1 30.5T758-440q-16 6-31-1t-21-23l-24-68q-20 17-31 40t-11 52q0 50 34.5 85t85.5 35Zm-360 80Zm360-200Z"/>
</svg>`,
})
export class MsrBikeScooterIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
