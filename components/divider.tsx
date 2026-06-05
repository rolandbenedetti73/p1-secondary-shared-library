import { ComponentConfig } from "@puckeditor/core";

export interface DividerProps {
  variant: "solid" | "dashed" | "dots";
  spacing: "small" | "medium" | "large";
}

const SPACING: Record<DividerProps["spacing"], string> = {
  small: "py-p1-sm",
  medium: "py-p1-lg",
  large: "py-p1-xl",
};

export const DividerBlock: ComponentConfig<DividerProps> = {
  fields: {
    variant: {
      type: "select",
      options: [
        { label: "Solid", value: "solid" },
        { label: "Dashed", value: "dashed" },
        { label: "Dots", value: "dots" },
      ],
    },
    spacing: {
      type: "select",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
      ],
    },
  },
  defaultProps: { variant: "solid", spacing: "medium" },
  render: ({ variant, spacing }) => (
    <div className={`mx-auto max-w-6xl px-p1-lg ${SPACING[spacing]}`}>
      {variant === "dots" ? (
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-p1-border" />
          ))}
        </div>
      ) : (
        <hr
          className={`m-0 border-0 border-t border-p1-border ${
            variant === "dashed" ? "border-dashed border-t-2" : "border-solid"
          }`}
        />
      )}
    </div>
  ),
};
