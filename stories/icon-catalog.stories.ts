import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import {
  MSR_ICON_NAMES as OUTLINE_ICON_NAMES,
  MsrIconName as OutlineIconName,
} from '../projects/material-symbols-rounded-icons/src/lib/icons';
import {
  MSR_ICON_COMPONENT_MAP as OUTLINE_ICON_COMPONENT_MAP,
  MSR_ICON_COMPONENTS as OUTLINE_ICON_COMPONENTS,
} from '../projects/material-symbols-rounded-icons/src/lib/icons/component-map';
import {
  MSR_ICON_NAMES as FILLED_ICON_NAMES,
  MsrIconName as FilledIconName,
} from '../projects/material-symbols-rounded-icons-filled/src/lib/icons';
import {
  MSR_ICON_COMPONENT_MAP as FILLED_ICON_COMPONENT_MAP,
  MSR_ICON_COMPONENTS as FILLED_ICON_COMPONENTS,
} from '../projects/material-symbols-rounded-icons-filled/src/lib/icons/component-map';

type IconName = string;
type VariantMode = 'outline' | 'filled' | 'both';

@Component({
  selector: 'msr-storybook-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, NgComponentOutlet, ...OUTLINE_ICON_COMPONENTS, ...FILLED_ICON_COMPONENTS],
  template: `
    <div style="display:grid; gap:16px;">
      <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:end;">
        <label style="display:grid; gap:8px; min-width:280px; flex:1 1 320px;">
          <span>Search icons</span>
          <input [(ngModel)]="query" placeholder="home, settings, account..." />
        </label>

        <label style="display:grid; gap:8px; min-width:180px;">
          <span>Variant</span>
          <select [(ngModel)]="variantMode">
            <option value="outline">Outline</option>
            <option value="filled">Filled</option>
            <option value="both">Side by side</option>
          </select>
        </label>
      </div>

      <div style="font-size:12px; color:#666;">Showing {{ filteredNames().length }} icons</div>

      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:12px;">
        @for (name of filteredNames(); track name) {
          <div style="display:grid; gap:8px; border:1px solid #ddd; border-radius:8px; padding:12px;">
            <div style="display:flex; align-items:center; gap:10px; min-height:24px;">
              @if (variantMode === 'outline') {
                @if (hasOutline(name)) {
                  <div style="display:flex; width:24px; height:24px; color:#222;">
                    <ng-container *ngComponentOutlet="resolveOutlineComponent(name)"></ng-container>
                  </div>
                } @else {
                  <small style="color:#999;">missing outline</small>
                }
              }

              @if (variantMode === 'filled') {
                @if (hasFilled(name)) {
                  <div style="display:flex; width:24px; height:24px; color:#222;">
                    <ng-container *ngComponentOutlet="resolveFilledComponent(name)"></ng-container>
                  </div>
                } @else {
                  <small style="color:#999;">missing filled</small>
                }
              }

              @if (variantMode === 'both') {
                <div style="display:grid; grid-template-columns:24px 24px; gap:8px; align-items:center;">
                  <div style="display:flex; width:24px; height:24px; color:#222;">
                    @if (hasOutline(name)) {
                      <ng-container *ngComponentOutlet="resolveOutlineComponent(name)"></ng-container>
                    }
                  </div>
                  <div style="display:flex; width:24px; height:24px; color:#222;">
                    @if (hasFilled(name)) {
                      <ng-container *ngComponentOutlet="resolveFilledComponent(name)"></ng-container>
                    }
                  </div>
                </div>
              }
            </div>

            <code>{{ name }}</code>
          </div>
        }
      </div>
    </div>
  `,
})
class IconCatalogStoryComponent {
  query = '';
  variantMode: VariantMode = 'both';

  readonly outlineNames = [...OUTLINE_ICON_NAMES] as IconName[];
  readonly filledNames = [...FILLED_ICON_NAMES] as IconName[];
  readonly names = [...new Set([...this.outlineNames, ...this.filledNames])].sort((a, b) =>
    a.localeCompare(b),
  );

  readonly outlineSet = new Set(this.outlineNames);
  readonly filledSet = new Set(this.filledNames);

  filteredNames(): IconName[] {
    const normalized = this.query.trim().toLowerCase();
    if (!normalized) return this.names;
    return this.names.filter((name) => name.toLowerCase().includes(normalized));
  }

  hasOutline(name: IconName): boolean {
    return this.outlineSet.has(name);
  }

  hasFilled(name: IconName): boolean {
    return this.filledSet.has(name);
  }

  resolveOutlineComponent(name: IconName): Type<unknown> {
    return OUTLINE_ICON_COMPONENT_MAP[name as OutlineIconName];
  }

  resolveFilledComponent(name: IconName): Type<unknown> {
    return FILLED_ICON_COMPONENT_MAP[name as FilledIconName];
  }
}

const meta: Meta<IconCatalogStoryComponent> = {
  title: 'Catalog/Icon Browser',
  component: IconCatalogStoryComponent,
};

export default meta;
type Story = StoryObj<IconCatalogStoryComponent>;

export const Browser: Story = {};
