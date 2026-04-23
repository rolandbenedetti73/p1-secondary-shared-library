import type { Meta, StoryObj } from '@storybook/react';
import { MapBlock } from '../components/map';

const MapWrapper = ({ address, latitude, longitude, height }: any) => {
  const Component = MapBlock.render as any;
  return <Component address={address} latitude={latitude} longitude={longitude} height={height} />;
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
      description: 'Address label to display',
    },
    latitude: {
      control: 'text',
      description: 'Latitude coordinate',
    },
    longitude: {
      control: 'text',
      description: 'Longitude coordinate',
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
    latitude: '37.4220',
    longitude: '-122.0841',
    height: '400',
  },
};

export const NewYork: Story = {
  args: {
    address: 'Times Square, New York, NY',
    latitude: '40.7580',
    longitude: '-73.9855',
    height: '500',
  },
};

export const SmallMap: Story = {
  args: {
    address: 'Golden Gate Bridge, San Francisco, CA',
    latitude: '37.8199',
    longitude: '-122.4783',
    height: '300',
  },
};
