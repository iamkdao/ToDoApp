import type { Meta, StoryObj } from '@storybook/react-vite';

import MuiButton from './MuiButton';

const meta = {
  component: MuiButton,
} satisfies Meta<typeof MuiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};