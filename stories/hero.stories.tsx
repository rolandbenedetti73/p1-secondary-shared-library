import type { Meta, StoryObj } from "@storybook/react";
import { HeroBlock, type HeroProps } from "../components/hero";

const HeroWrapper = (props: HeroProps) => {
  const Component = HeroBlock.render as React.FC<HeroProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Attention/HeroBlock",
  component: HeroWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["indigo", "purple", "dark", "light"] },
    layout: { control: "select", options: ["split", "full", "text"] },
    align: { control: "radio", options: ["left", "center"] },
    imageSide: { control: "radio", options: ["right", "left"] },
  },
} satisfies Meta<typeof HeroWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const base: HeroProps = {
  eyebrow: "New — now available",
  title: "Your big idea, beautifully online.",
  description:
    "A flexible starting point for your next page. Swap in your own headline, story, and imagery — this layout adapts to whatever you publish.",
  primaryCta: "Start free trial",
  primaryHref: "#",
  secondaryCta: "Book a demo →",
  secondaryHref: "#",
  tone: "indigo",
  layout: "split",
  align: "left",
  imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
  imageSide: "right",
};

export const Split: Story = { args: { ...base } };
export const FullImage: Story = { args: { ...base, layout: "full", align: "left" } };
export const TextOnly: Story = { args: { ...base, layout: "text", tone: "light", align: "center" } };
