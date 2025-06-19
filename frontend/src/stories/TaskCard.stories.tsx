import type { Meta, StoryObj } from '@storybook/react-vite';

import TaskCard from './TaskCard';

const meta = {
  component: TaskCard,
} satisfies Meta<typeof TaskCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};