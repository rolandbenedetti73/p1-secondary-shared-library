import { ComponentConfig } from "@puckeditor/core";

export interface SpacerProps {
  size: "small" | "medium" | "large" | "x-large";
}

const HEIGHTS: Record<SpacerProps["size"], string> = {
  small: "h-6",
  medium: "h-12",
  large: "h-20",
  "x-large": "h-32",
};

export const SpacerBlock: ComponentConfig<SpacerProps> = {
  fields: {
    size: {
      type: "select",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
        { label: "X-Large", value: "x-large" },
      ],
    },
  },
  defaultProps: { size: "medium" },
  render: ({ size }) => <div className={HEIGHTS[size]} aria-hidden="true" />,
};
