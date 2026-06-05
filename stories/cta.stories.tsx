import type { Meta, StoryObj } from "@storybook/react";
import { CtaBannerBlock, type CtaBannerProps } from "../components/cta";

const CtaBannerWrapper = (props: CtaBannerProps) => {
  const Component = CtaBannerBlock.render as React.FC<CtaBannerProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Convert/CtaBannerBlock",
  component: CtaBannerWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    layout: { control: "select", options: ["centered", "split"] },
    align: { control: "radio", options: ["left", "center"] },
    tone: { control: "select", options: ["yellow", "purple", "dark", "light", "gradient", "outline"] },
    padding: { control: "select", options: ["compact", "regular", "spacious"] },
  },
} satisfies Meta<typeof CtaBannerWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const base: CtaBannerProps = {
  eyebrow: "",
  title: "Ready to ship faster?",
  subtitle: "Start a free trial — no credit card, no deploy pipeline to wrangle.",
  buttonLabel: "Start free trial",
  buttonHref: "#",
  secondaryLabel: "",
  secondaryHref: "#",
  layout: "centered",
  align: "center",
  tone: "yellow",
  padding: "regular",
};

export const Centered: Story = { args: { ...base } };
export const SplitGradient: Story = {
  args: { ...base, layout: "split", tone: "gradient", secondaryLabel: "Talk to sales" },
};
