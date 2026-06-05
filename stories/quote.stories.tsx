import type { Meta, StoryObj } from "@storybook/react";
import { QuoteBlock, type QuoteProps } from "../components/quote";

const QuoteWrapper = (props: QuoteProps) => {
  const Component = QuoteBlock.render as React.FC<QuoteProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Content/QuoteBlock",
  component: QuoteWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    quote: { control: "text" },
    attribution: { control: "text" },
    scale: { control: "radio", options: ["standard", "display"] },
  },
} satisfies Meta<typeof QuoteWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    quote:
      "Switching over was the easiest call we made all year — our team ships in hours, not weeks now.",
    attribution: "Jordan Ellis, Operations Lead",
    scale: "standard",
  },
};

export const Display: Story = {
  args: {
    quote: "It just works — and that has changed how our whole team operates.",
    attribution: "Sarah Chen, CEO",
    scale: "display",
  },
};
