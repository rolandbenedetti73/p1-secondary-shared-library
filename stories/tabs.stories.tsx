import type { Meta, StoryObj } from "@storybook/react";
import { TabsBlock, type TabsProps } from "../components/tabs";

const TabsWrapper = (props: TabsProps) => {
  const Component = TabsBlock.render as React.FC<TabsProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Layout/TabsBlock",
  component: TabsWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: { align: { control: "radio", options: ["left", "center"] } },
} satisfies Meta<typeof TabsWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Everything in one workflow",
    align: "left",
    tabs: [
      {
        label: "Develop",
        body: "Branch every change into its own ==Multidev== environment.\n\n- No more stepping on each other\n- Real URLs to share for review\n- Merge when it's ready",
      },
      {
        label: "Test",
        body: "Push to Test with one click and run against ==production-like data==.\n\n- Automated visual checks\n- Stakeholder sign-off\n- Nothing surprises you on Live",
      },
      {
        label: "Launch",
        body: "Deploy to Live in seconds — and roll back just as fast if you need to.\n\n> Confidence to publish on a Friday afternoon.",
      },
    ],
  },
};

export const Centered: Story = {
  args: { ...(Default.args as TabsProps), align: "center" },
};
