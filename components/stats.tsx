import { ComponentConfig } from "@puckeditor/core";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsProps {
  tone: "light" | "dark";
  items: StatItem[];
}

export const StatsBlock: ComponentConfig<StatsProps> = {
  fields: {
    tone: {
      type: "radio",
      options: [
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
      ],
    },
    items: {
      type: "array",
      arrayFields: {
        value: { type: "text" },
        label: { type: "text" },
      },
      defaultItemProps: { value: "100%", label: "Metric" },
      getItemSummary: (item) => item.value || "Stat",
    },
  },
  defaultProps: {
    tone: "light",
    items: [
      { value: "10k+", label: "Teams onboarded" },
      { value: "99.9%", label: "Uptime" },
      { value: "2M+", label: "Pages published" },
      { value: "4.9/5", label: "Customer rating" },
    ],
  },
  render: ({ tone, items }) => {
    const dark = tone === "dark";
    return (
      <div className={`px-p1-lg py-p1-xl ${dark ? "bg-gray-900" : "bg-p1-bg-light"}`}>
        <div className="mx-auto grid max-w-7xl gap-p1-lg sm:grid-cols-2 lg:grid-cols-4">
          {(items || []).map((item, i) => (
            <div key={i} className="text-center">
              <div
                className={`text-4xl font-extrabold tracking-tight md:text-5xl ${
                  dark ? "text-p1-warning" : "text-p1-primary"
                }`}
              >
                {item.value}
              </div>
              <div className={`mt-p1-sm text-sm ${dark ? "text-white/70" : "text-p1-text-muted"}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
