import type { Meta, StoryObj } from '@storybook/react';
import { TestBlock } from '../components/test';

// Wrapper to render Puck component
const PuckComponentPreview = ({ component, props }: any) => {
  const Component = component.render;
  return <Component {...props} />;
};

const meta: Meta<typeof PuckComponentPreview> = {
  title: 'Puck Components/TestBlock',
  component: PuckComponentPreview,
  tags: ['autodocs'],
  argTypes: {
    props: {
      description: 'Component props',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PuckComponentPreview>;

export const Default: Story = {
  args: {
    component: TestBlock,
    props: TestBlock.defaultProps,
  },
};

export const CustomText: Story = {
  args: {
    component: TestBlock,
    props: {
      text: 'Custom text from Storybook!',
    },
  },
};

export const EmptyText: Story = {
  args: {
    component: TestBlock,
    props: {
      text: '',
    },
  },
};
