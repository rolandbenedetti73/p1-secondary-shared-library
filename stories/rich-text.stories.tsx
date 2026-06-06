import type { Meta, StoryObj } from "@storybook/react";
import { RichTextBlock, type RichTextProps } from "../components/rich-text";

const RichTextWrapper = (props: RichTextProps) => {
  const Component = RichTextBlock.render as React.FC<RichTextProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Editorial/RichTextBlock",
  component: RichTextWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    measure: { control: "select", options: ["narrow", "standard", "wide"] },
    size: { control: "radio", options: ["regular", "large"] },
    dropCap: { control: "radio", options: ["off", "on"] },
  },
} satisfies Meta<typeof RichTextWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const content =
  "A year ago, shipping a change meant a ticket, a queue, and a wait. Today it takes minutes — and the difference wasn't a single tool.\n\n## It started with previews\n\nEvery change got a shareable link before it went live. Reviewers stopped guessing and ==started seeing==.\n\n- Fewer round-trips between teams\n- Marketers unblocked from engineering\n- Confidence to publish on a Friday\n\n### The habit that stuck\n\nWe made \"preview first\" the default, not the exception. Small change, large compounding effect.\n\n> The best workflow is the one your whole team actually uses.";

export const Default: Story = {
  args: { content, measure: "standard", size: "regular", dropCap: "off" },
};
export const WithDropCap: Story = {
  args: { content, measure: "standard", size: "large", dropCap: "on" },
};
