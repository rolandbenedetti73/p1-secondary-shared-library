import type { Meta, StoryObj } from '@storybook/react';
import { SecondTestBlock } from '../components/second-test';

// Wrapper to render Puck component
const PuckComponentPreview = ({ component, props }: any) => {
  const Component = component.render;
  return <Component {...props} />;
};

const meta: Meta<typeof PuckComponentPreview> = {
  title: 'Puck Components/SecondTestBlock',
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
    component: SecondTestBlock,
    props: SecondTestBlock.defaultProps,
  },
};

export const CustomText: Story = {
  args: {
    component: SecondTestBlock,
    props: {
      text: 'This is custom text for SecondTestBlock!',
    },
  },
};

export const LongText: Story = {
  args: {
    component: SecondTestBlock,
    props: {
      text: 'This is a much longer piece of text to see how the component handles longer content. It should still look good and be readable.',
    },
  },
};
