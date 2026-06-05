import type { Meta, StoryObj } from "@storybook/react";
import { AnnouncementBlock, type AnnouncementProps } from "../components/announcement";

const AnnouncementWrapper = (props: AnnouncementProps) => {
  const Component = AnnouncementBlock.render as React.FC<AnnouncementProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Attention/AnnouncementBlock",
  component: AnnouncementWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["purple", "yellow", "dark", "gradient"] },
    align: { control: "radio", options: ["center", "left"] },
  },
} satisfies Meta<typeof AnnouncementWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const base: AnnouncementProps = {
  text: "Something new just launched — take a look.",
  linkLabel: "Read the announcement →",
  linkHref: "#",
  tone: "purple",
  align: "center",
};

export const Purple: Story = { args: { ...base } };
export const Yellow: Story = { args: { ...base, tone: "yellow" } };
export const Gradient: Story = { args: { ...base, tone: "gradient" } };
