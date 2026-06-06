import type { Meta, StoryObj } from "@storybook/react";
import { AccordionBlock, type AccordionProps } from "../components/accordion";

const AccordionWrapper = (props: AccordionProps) => {
  const Component = AccordionBlock.render as React.FC<AccordionProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Layout/AccordionBlock",
  component: AccordionWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: { align: { control: "radio", options: ["left", "center"] } },
} satisfies Meta<typeof AccordionWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "The details",
    align: "left",
    items: [
      {
        title: "What frameworks are supported?",
        body: "WordPress, Drupal, and Next.js — all on the same platform, with the same ==Dev-Test-Live== workflow.",
      },
      {
        title: "How do environments work?",
        body: "Every site gets Dev, Test, and Live — plus unlimited Multidev branches for parallel work.\n\n- Isolated by default\n- Shareable preview URLs\n- One-click promotion",
      },
      {
        title: "Can the whole team use it?",
        body: "Yes. Developers, marketers, and IT share one workflow with role-based access — no one waits on anyone else.",
      },
    ],
  },
};
