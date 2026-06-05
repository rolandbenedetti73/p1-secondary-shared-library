import type { Meta, StoryObj } from "@storybook/react";
import { SpacerBlock, type SpacerProps } from "../components/spacer";

const SpacerWrapper = (props: SpacerProps) => {
  const Component = SpacerBlock.render as React.FC<SpacerProps>;
  return (
    <div className="bg-p1-bg-light">
      <div className="bg-p1-primary text-white text-center text-sm py-1">above</div>
      <Component {...props} />
      <div className="bg-p1-primary text-white text-center text-sm py-1">below</div>
    </div>
  );
};

const meta = {
  title: "Content/SpacerBlock",
  component: SpacerWrapper,
  parameters: { layout: "fullwidth" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large", "x-large"] },
  },
} satisfies Meta<typeof SpacerWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { size: "medium" } };
