import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialBlock } from '../components/testimonial';

const TestimonialWrapper = ({ quote, authorName, authorTitle, authorImageUrl }: any) => {
  const Component = TestimonialBlock.render as any;
  return <Component quote={quote} authorName={authorName} authorTitle={authorTitle} authorImageUrl={authorImageUrl} />;
};

const meta = {
  title: 'Components/TestimonialBlock',
  component: TestimonialWrapper,
  parameters: {
    layout: 'fullwidth',
  },
  tags: ['autodocs'],
  argTypes: {
    quote: {
      control: 'text',
      description: 'Customer testimonial text',
    },
    authorName: {
      control: 'text',
      description: 'Name of the person giving the testimonial',
    },
    authorTitle: {
      control: 'text',
      description: 'Job title and company of the author',
    },
    authorImageUrl: {
      control: 'text',
      description: 'Profile photo URL',
    },
  },
} satisfies Meta<typeof TestimonialWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quote: 'Working with this team has transformed how we approach digital solutions. Their expertise and dedication are unmatched.',
    authorName: 'Sarah Chen',
    authorTitle: 'CEO, TechCorp',
    authorImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
};

export const Developer: Story = {
  args: {
    quote: 'The platform is incredibly intuitive. We reduced our deployment time by 70% and our team loves the developer experience.',
    authorName: 'Marcus Johnson',
    authorTitle: 'Lead Engineer, DevStudio',
    authorImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
};

export const Executive: Story = {
  args: {
    quote: 'ROI was evident within the first quarter. This investment has fundamentally changed our competitive position in the market.',
    authorName: 'Jennifer Martinez',
    authorTitle: 'CFO, Global Innovations Inc.',
    authorImageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
  },
};
