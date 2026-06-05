import type { Meta, StoryObj } from "@storybook/react";
import { HeadingBlock, type HeadingProps } from "../components/heading";

const HeadingWrapper = (props: HeadingProps) => {
  const Component = HeadingBlock.render as React.FC<HeadingProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Content/HeadingBlock",
  component: HeadingWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    level: { control: "select", options: ["h1", "h2", "h3", "h4"] },
    align: { control: "radio", options: ["left", "center"] },
  },
} satisfies Meta<typeof HeadingWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: "A heading to anchor the section", level: "h2", align: "left" },
};

export const DisplayCentered: Story = {
  args: { text: "Everything you need, in one place.", level: "h1", align: "center" },
};
