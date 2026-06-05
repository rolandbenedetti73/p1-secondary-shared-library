import { ComponentConfig } from "@puckeditor/core";

export interface StepItem {
  title: string;
  body: string;
}

export interface StepsProps {
  eyebrow: string;
  heading: string;
  items: StepItem[];
  tone: "white" | "light" | "dark";
}

const TONES: Record<StepsProps["tone"], { wrap: string; onDark: boolean }> = {
  white: { wrap: "bg-p1-bg-default text-p1-text", onDark: false },
  light: { wrap: "bg-p1-bg-light text-p1-text", onDark: false },
  dark: { wrap: "bg-gray-900 text-white", onDark: true },
};

export const StepsBlock: ComponentConfig<StepsProps> = {
  fields: {
    eyebrow: { type: "text" },
    heading: { type: "text" },
    items: {
      type: "array",
      arrayFields: {
        title: { type: "text" },
        body: { type: "textarea" },
      },
      defaultItemProps: { title: "Step", body: "Describe this step." },
      getItemSummary: (item) => item.title || "Step",
    },
    tone: {
      type: "select",
      options: [
        { label: "White", value: "white" },
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "How it works",
    heading: "Ship in three steps.",
    items: [
      { title: "Plan", body: "Start from a template or a blank page and outline what you want to say." },
      { title: "Build", body: "Compose your page from ready-made blocks — no code required." },
      { title: "Publish", body: "Preview your changes, then make them live in a single click." },
    ],
    tone: "light",
  },
  render: ({ eyebrow, heading, items, tone }) => {
    const t = TONES[tone];
    const cols = Math.min(4, Math.max(1, (items || []).length));
    return (
      <div className={`px-p1-lg py-p1-xl ${t.wrap}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-p1-xl text-center">
            {eyebrow && (
              <p className={`mb-p1-sm font-serif text-xl italic ${t.onDark ? "text-p1-warning" : "text-p1-primary"}`}>
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
            )}
          </div>
          <div
            className="grid gap-p1-lg"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {(items || []).map((item, i) => (
              <div key={i} className="flex flex-col gap-p1-sm">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full text-lg font-extrabold ${
                    t.onDark ? "bg-p1-warning/20 text-p1-warning" : "bg-p1-primary/15 text-p1-primary"
                  }`}
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${t.onDark ? "text-white/80" : "text-p1-text-muted"}`}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
