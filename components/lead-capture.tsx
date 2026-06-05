import { ComponentConfig } from "@puckeditor/core";

export interface LeadCaptureProps {
  heading: string;
  subtitle: string;
  placeholder: string;
  buttonLabel: string;
  note: string;
  tone: "light" | "purple" | "dark" | "yellow";
  layout: "inline" | "stacked";
}

const TONES: Record<
  LeadCaptureProps["tone"],
  { wrap: string; sub: string; field: string; button: string }
> = {
  light: {
    wrap: "bg-p1-bg-light text-p1-text",
    sub: "text-p1-text-muted",
    field: "bg-p1-bg-default border-p1-border text-p1-text-muted",
    button: "bg-p1-primary text-white",
  },
  purple: {
    wrap: "bg-p1-primary text-white",
    sub: "text-white/80",
    field: "bg-white/10 border-white/25 text-white/60",
    button: "bg-p1-warning text-p1-text",
  },
  dark: {
    wrap: "bg-gray-900 text-white",
    sub: "text-white/70",
    field: "bg-white/10 border-white/20 text-white/60",
    button: "bg-p1-warning text-p1-text",
  },
  yellow: {
    wrap: "bg-p1-warning text-p1-text",
    sub: "text-p1-primary",
    field: "bg-white border-black/10 text-p1-text-muted",
    button: "bg-p1-text text-white",
  },
};

export const LeadCaptureBlock: ComponentConfig<LeadCaptureProps> = {
  fields: {
    heading: { type: "text" },
    subtitle: { type: "text" },
    placeholder: { type: "text" },
    buttonLabel: { type: "text" },
    note: { type: "text" },
    tone: {
      type: "select",
      options: [
        { label: "Light", value: "light" },
        { label: "Purple", value: "purple" },
        { label: "Dark", value: "dark" },
        { label: "Yellow", value: "yellow" },
      ],
    },
    layout: {
      type: "radio",
      options: [
        { label: "Inline", value: "inline" },
        { label: "Stacked", value: "stacked" },
      ],
    },
  },
  defaultProps: {
    heading: "Stay in the loop.",
    subtitle: "Occasional updates, straight to your inbox.",
    placeholder: "you@company.com",
    buttonLabel: "Subscribe",
    note: "No spam. Unsubscribe anytime.",
    tone: "purple",
    layout: "inline",
  },
  render: ({ heading, subtitle, placeholder, buttonLabel, note, tone, layout }) => {
    const t = TONES[tone];
    const inline = layout === "inline";
    return (
      <div className="px-p1-lg py-p1-md">
        <div className={`mx-auto max-w-5xl rounded-p1-lg px-p1-xl py-p1-xl text-center ${t.wrap}`}>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{heading}</h2>
          {subtitle && <p className={`mx-auto mt-p1-sm max-w-xl ${t.sub}`}>{subtitle}</p>}
          <div
            className={`mx-auto mt-p1-lg flex gap-p1-sm ${
              inline ? "max-w-md flex-row" : "max-w-sm flex-col"
            }`}
          >
            <div
              className={`flex flex-1 items-center rounded-full border px-p1-md py-p1-sm text-left text-sm ${t.field}`}
            >
              {placeholder}
            </div>
            <button
              className={`inline-flex items-center justify-center rounded-full px-p1-lg py-p1-sm font-bold ${t.button}`}
            >
              {buttonLabel}
            </button>
          </div>
          {note && <div className={`mt-p1-sm text-xs ${t.sub}`}>{note}</div>}
        </div>
      </div>
    );
  },
};
