import { ComponentConfig } from "@puckeditor/core";

export interface LogoItem {
  label: string;
}

export interface LogoCloudProps {
  heading: string;
  logos: LogoItem[];
}

export const LogoCloudBlock: ComponentConfig<LogoCloudProps> = {
  fields: {
    heading: { type: "text" },
    logos: {
      type: "array",
      arrayFields: { label: { type: "text" } },
      defaultItemProps: { label: "BRAND" },
      getItemSummary: (item) => item.label || "Logo",
    },
  },
  defaultProps: {
    heading: "Featured in",
    logos: [
      { label: "NPR" },
      { label: "PBS" },
      { label: "THE ATLANTIC" },
      { label: "REUTERS" },
      { label: "NATURE" },
    ],
  },
  render: ({ heading, logos }) => (
    <div className="mx-auto max-w-7xl px-p1-lg py-p1-xl">
      {heading && (
        <p className="mb-p1-lg text-center text-sm font-semibold uppercase tracking-[0.14em] text-p1-text-muted">
          {heading}
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-p1-md">
        {(logos || []).map((logo, i) => (
          <div
            key={i}
            className="rounded-p1-md bg-p1-bg-light px-p1-lg py-p1-md text-lg font-extrabold tracking-wide text-p1-text-muted"
          >
            {logo.label}
          </div>
        ))}
      </div>
    </div>
  ),
};
