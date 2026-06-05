import type { Meta, StoryObj } from "@storybook/react";
import { ParagraphBlock, type ParagraphProps } from "../components/paragraph";

const ParagraphWrapper = (props: ParagraphProps) => {
  const Component = ParagraphBlock.render as React.FC<ParagraphProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Content/ParagraphBlock",
  component: ParagraphWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    style: { control: "radio", options: ["body", "lead"] },
    size: { control: "select", options: ["small", "regular", "large"] },
    align: { control: "radio", options: ["left", "center"] },
  },
} satisfies Meta<typeof ParagraphWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    text: "This is a paragraph. Use it to expand on the heading above with a sentence or two of supporting detail — keep it clear, specific, and easy to scan.",
    style: "body",
    size: "regular",
    align: "left",
  },
};

export const Lead: Story = {
  args: {
    text: "A flexible starting point for your next page — swap in your own story and imagery.",
    style: "lead",
    size: "large",
    align: "center",
  },
};
