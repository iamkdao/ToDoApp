import type { Meta, StoryObj } from '@storybook/react-vite';

import MuiHeader from './MuiHeader';

const meta = {
  component: MuiHeader,
} satisfies Meta<typeof MuiHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};