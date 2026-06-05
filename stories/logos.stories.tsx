import type { Meta, StoryObj } from "@storybook/react";
import { LogoCloudBlock, type LogoCloudProps } from "../components/logos";

const LogoCloudWrapper = (props: LogoCloudProps) => {
  const Component = LogoCloudBlock.render as React.FC<LogoCloudProps>;
  return <Component {...props} />;
};

const meta = {
  title: "Trust/LogoCloudBlock",
  component: LogoCloudWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: { heading: { control: "text" } },
} satisfies Meta<typeof LogoCloudWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Featured in",
    logos: [
      { label: "NPR" },
      { label: "PBS" },
      { label: "THE ATLANTIC" },
      { label: "REUTERS" },
      { label: "NATURE" },
    ],
  },
};
