import type { Meta, StoryObj } from '@storybook/react';
import { HeroBlock } from '../components/hero';

const HeroWrapper = ({ title, subtitle, imageUrl, ctaText, ctaLink }: any) => {
  const Component = HeroBlock.render as any;
  return <Component title={title} subtitle={subtitle} imageUrl={imageUrl} ctaText={ctaText} ctaLink={ctaLink} />;
};

const meta = {
  title: 'Components/HeroBlock',
  component: HeroWrapper,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main heading text',
    },
    subtitle: {
      control: 'text',
      description: 'Supporting text below the heading',
    },
    imageUrl: {
      control: 'text',
      description: 'Hero image URL',
    },
    ctaText: {
      control: 'text',
      description: 'Call-to-action button text',
    },
    ctaLink: {
      control: 'text',
      description: 'Call-to-action button URL',
    },
  },
} satisfies Meta<typeof HeroWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Transform Your Business',
    subtitle: 'Innovative solutions for modern challenges. We help companies scale with cutting-edge technology.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
    ctaText: 'Get Started',
    ctaLink: '#',
  },
};

export const ProductLaunch: Story = {
  args: {
    title: 'Introducing Our New Platform',
    subtitle: 'Built for speed, designed for scale. Experience the next generation of cloud infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
};

export const ServiceOffering: Story = {
  args: {
    title: 'Expert Consulting Services',
    subtitle: 'Strategic guidance from industry leaders. Transform your vision into reality with our proven methodology.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    ctaText: 'Schedule Consultation',
    ctaLink: '#',
  },
};
