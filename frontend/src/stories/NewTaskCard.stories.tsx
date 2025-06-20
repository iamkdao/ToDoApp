import type { Meta, StoryObj } from '@storybook/react-vite';

import NewTaskCard from './NewTaskCard';

const meta = {
  component: NewTaskCard,
} satisfies Meta<typeof NewTaskCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};