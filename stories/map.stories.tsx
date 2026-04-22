import type { Meta, StoryObj } from '@storybook/react';
import { MapBlock } from '../components/map';

const MapWrapper = ({ address, height }: any) => {
  const Component = MapBlock.render as any;
  return <Component address={address} height={height} />;
};

const meta = {
  title: 'Components/MapBlock',
  component: MapWrapper,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  argTypes: {
    address: {
      control: 'text',
      description: 'Address to display on the map',
    },
    height: {
      control: 'select',
      options: ['300', '400', '500'],
      description: 'Map height in pixels',
    },
  },
} satisfies Meta<typeof MapWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: '1600 Amphitheatre Parkway, Mountain View, CA',
    height: '400',
  },
};

export const NewYork: Story = {
  args: {
    address: 'Times Square, New York, NY',
    height: '500',
  },
};

export const SmallMap: Story = {
  args: {
    address: 'Golden Gate Bridge, San Francisco, CA',
    height: '300',
  },
};
