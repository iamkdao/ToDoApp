import type { Meta, StoryObj } from '@storybook/react-vite';

import FrontPage from './FrontPage';

const meta = {
  component: FrontPage,
} satisfies Meta<typeof FrontPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};