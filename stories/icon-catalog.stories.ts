import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import {
  MSR_ICON_NAMES,
  MsrIconName,
} from '../projects/material-symbols-rounded-icons/src/lib/icons';
import {
  MSR_ICON_COMPONENT_MAP,
  MSR_ICON_COMPONENTS,
} from '../projects/material-symbols-rounded-icons/src/lib/icons/component-map';

@Component({
  selector: 'msr-storybook-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, NgComponentOutlet, ...MSR_ICON_COMPONENTS],
  template: `
    <div style="display:grid; gap:16px;">
      <label style="display:grid; gap:8px; max-width:360px;">
        <span>Search icons</span>
        <input [(ngModel)]="query" placeholder="home, settings, account..." />
      </label>

      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:12px;">
        @for (name of filteredNames(); track name) {
          <div style="display:grid; gap:8px; border:1px solid #ddd; border-radius:8px; padding:12px;">
            <div style="display:flex; width:24px; height:24px; color:#222;">
              <ng-container *ngComponentOutlet="resolveComponent(name)"></ng-container>
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
  readonly names = [...MSR_ICON_NAMES];

  filteredNames(): MsrIconName[] {
    const normalized = this.query.trim().toLowerCase();
    if (!normalized) return this.names;
    return this.names.filter((name) => name.toLowerCase().includes(normalized));
  }

  resolveComponent(name: MsrIconName): Type<unknown> {
    return MSR_ICON_COMPONENT_MAP[name];
  }
}

const meta: Meta<IconCatalogStoryComponent> = {
  title: 'Catalog/Icon Browser',
  component: IconCatalogStoryComponent,
};

export default meta;
type Story = StoryObj<IconCatalogStoryComponent>;

export const Browser: Story = {};
