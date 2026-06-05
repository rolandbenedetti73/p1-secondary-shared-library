import { ComponentConfig } from "@puckeditor/core";

export interface HeadingProps {
  text: string;
  level: "h1" | "h2" | "h3" | "h4";
  align: "left" | "center";
}

const SIZES: Record<HeadingProps["level"], string> = {
  h1: "text-4xl md:text-5xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
};

export const HeadingBlock: ComponentConfig<HeadingProps> = {
  fields: {
    text: { type: "text" },
    level: {
      type: "select",
      options: [
        { label: "H1", value: "h1" },
        { label: "H2", value: "h2" },
        { label: "H3", value: "h3" },
        { label: "H4", value: "h4" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
  },
  defaultProps: {
    text: "A heading to anchor the section",
    level: "h2",
    align: "left",
  },
  render: ({ text, level, align }) => {
    const Tag = level;
    return (
      <div className="mx-auto max-w-6xl px-p1-lg py-p1-sm">
        <Tag
          className={`${SIZES[level]} font-bold tracking-tight text-p1-text text-balance ${
            align === "center" ? "text-center" : "text-left"
          }`}
        >
          {text}
        </Tag>
      </div>
    );
  },
};
