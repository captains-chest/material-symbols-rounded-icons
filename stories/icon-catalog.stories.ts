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
  styles: `
    .catalog {
      display: grid;
      gap: 16px;
    }

    .catalog-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: end;
    }

    .catalog-control {
      display: grid;
      gap: 8px;
    }

    .catalog-control--search {
      min-width: 280px;
      flex: 1 1 320px;
    }

    .catalog-control--variant {
      min-width: 180px;
    }

    .catalog-summary {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      font-size: 12px;
      color: #666;
    }

    .catalog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 12px;
    }

    .catalog-card {
      display: grid;
      gap: 8px;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 12px;
    }

    .catalog-preview {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 5rem;
    }

    .catalog-icon {
      display: flex;
      width: 5rem;
      height: 5rem;
      color: #222;
    }

    .catalog-icon-pair {
      display: grid;
      grid-template-columns: 5rem 5rem;
      gap: 8px;
      align-items: center;
    }

    .catalog-missing {
      color: #999;
    }
  `,
  template: `
    <div class="catalog">
      <div class="catalog-controls">
        <label class="catalog-control catalog-control--search">
          <span>Search icons</span>
          <input [(ngModel)]="query" placeholder="home, settings, account..." />
        </label>

        <label class="catalog-control catalog-control--variant">
          <span>Variant</span>
          <select [(ngModel)]="variantMode">
            <option value="outline">Outline</option>
            <option value="filled">Filled</option>
            <option value="both">Side by side</option>
          </select>
        </label>
      </div>

      @let filtered = filteredNames();
      @let visible = displayedNames();

      <div class="catalog-summary">
        <div>Showing {{ visible.length }} sample icons of {{ filtered.length }} filtered ({{ names.length }} total)</div>
        <div>Sample size: {{ sampleSize }} · Outline: {{ outlineNames.length }} · Filled: {{ filledNames.length }}</div>
      </div>

      <div class="catalog-grid">
        @for (name of visible; track name) {
          <div class="catalog-card">
            <div class="catalog-preview">
              @if (variantMode === 'outline') {
                @if (hasOutline(name)) {
                  <div class="catalog-icon">
                    <ng-container *ngComponentOutlet="resolveOutlineComponent(name)"></ng-container>
                  </div>
                } @else {
                  <small class="catalog-missing">missing outline</small>
                }
              }

              @if (variantMode === 'filled') {
                @if (hasFilled(name)) {
                  <div class="catalog-icon">
                    <ng-container *ngComponentOutlet="resolveFilledComponent(name)"></ng-container>
                  </div>
                } @else {
                  <small class="catalog-missing">missing filled</small>
                }
              }

              @if (variantMode === 'both') {
                <div class="catalog-icon-pair">
                  <div class="catalog-icon">
                    @if (hasOutline(name)) {
                      <ng-container *ngComponentOutlet="resolveOutlineComponent(name)"></ng-container>
                    }
                  </div>
                  <div class="catalog-icon">
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
  readonly sampleSize = 24;

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

  displayedNames(): IconName[] {
    return this.filteredNames().slice(0, this.sampleSize);
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
