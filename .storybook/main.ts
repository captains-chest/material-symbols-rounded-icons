import type { StorybookConfig } from '@storybook/angular';
import { mergeConfig, type UserConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.ts'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(baseConfig: UserConfig) {
    return mergeConfig(baseConfig, {
      define: {
        STORYBOOK_ANGULAR_OPTIONS: {
          experimentalZoneless: true,
        },
      },
    });
  },
};

export default config;
