import { ComponentConfig } from "@puckeditor/core";

export interface CtaBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  layout: "centered" | "split";
  align: "left" | "center";
  tone: "yellow" | "purple" | "dark" | "light" | "gradient" | "outline";
  padding: "compact" | "regular" | "spacious";
}

const TONES: Record<
  CtaBannerProps["tone"],
  { wrap: string; sub: string; primary: string; onDark: boolean }
> = {
  yellow: { wrap: "bg-p1-warning text-p1-text", sub: "text-p1-primary", primary: "bg-p1-text text-white", onDark: false },
  purple: { wrap: "bg-p1-primary text-white", sub: "text-p1-warning", primary: "bg-p1-warning text-p1-text", onDark: true },
  dark: { wrap: "bg-gray-900 text-white", sub: "text-p1-warning", primary: "bg-p1-warning text-p1-text", onDark: true },
  light: { wrap: "bg-p1-bg-light text-p1-text border border-p1-border", sub: "text-p1-primary", primary: "bg-p1-primary text-white", onDark: false },
  gradient: { wrap: "bg-gradient-to-br from-p1-primary to-p1-secondary text-white", sub: "text-p1-warning", primary: "bg-p1-warning text-p1-text", onDark: true },
  outline: { wrap: "bg-p1-bg-default text-p1-text border-2 border-p1-text", sub: "text-p1-primary", primary: "bg-p1-text text-white", onDark: false },
};

const PADDING: Record<CtaBannerProps["padding"], string> = {
  compact: "px-p1-lg py-p1-lg",
  regular: "px-p1-xl py-p1-xl",
  spacious: "px-p1-xl py-24",
};

export const CtaBannerBlock: ComponentConfig<CtaBannerProps> = {
  fields: {
    eyebrow: { type: "text" },
    title: { type: "text" },
    subtitle: { type: "text" },
    buttonLabel: { type: "text" },
    buttonHref: { type: "text" },
    secondaryLabel: { type: "text" },
    secondaryHref: { type: "text" },
    layout: {
      type: "select",
      options: [
        { label: "Centered", value: "centered" },
        { label: "Split", value: "split" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
    tone: {
      type: "select",
      options: [
        { label: "Yellow", value: "yellow" },
        { label: "Purple", value: "purple" },
        { label: "Dark", value: "dark" },
        { label: "Light", value: "light" },
        { label: "Gradient", value: "gradient" },
        { label: "Outline", value: "outline" },
      ],
    },
    padding: {
      type: "select",
      options: [
        { label: "Compact", value: "compact" },
        { label: "Regular", value: "regular" },
        { label: "Spacious", value: "spacious" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "",
    title: "Ready to ship faster?",
    subtitle: "Start a free trial — no credit card, no deploy pipeline to wrangle.",
    buttonLabel: "Start free trial",
    buttonHref: "#",
    secondaryLabel: "",
    secondaryHref: "#",
    layout: "centered",
    align: "center",
    tone: "yellow",
    padding: "regular",
  },
  render: ({ eyebrow, title, subtitle, buttonLabel, buttonHref, secondaryLabel, secondaryHref, layout, align, tone, padding }) => {
    const t = TONES[tone];
    const split = layout === "split";
    const center = !split && align === "center";

    const buttons = (
      <div className={`flex flex-wrap items-center gap-p1-sm ${split ? "justify-end" : center ? "justify-center" : "justify-start"}`}>
        {buttonLabel && (
          <a href={buttonHref} className={`inline-flex items-center rounded-full px-p1-lg py-p1-sm font-bold ${t.primary}`}>
            {buttonLabel}
          </a>
        )}
        {secondaryLabel && (
          <a
            href={secondaryHref}
            className={`inline-flex items-center rounded-full px-p1-lg py-p1-sm font-bold border ${
              t.onDark ? "border-white/35 text-white" : "border-p1-border text-p1-text"
            }`}
          >
            {secondaryLabel}
          </a>
        )}
      </div>
    );

    const text = (
      <div className={`${split ? "text-left" : center ? "text-center" : "text-left"} ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}>
        {eyebrow && (
          <div className={`mb-p1-sm text-xs font-bold uppercase tracking-[0.16em] ${t.sub}`}>{eyebrow}</div>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-balance">{title}</h2>
        {subtitle && <p className={`mt-p1-sm text-lg leading-relaxed ${t.onDark ? "text-white/90" : "opacity-90"}`}>{subtitle}</p>}
        {!split && <div className="mt-p1-lg">{buttons}</div>}
      </div>
    );

    return (
      <div className="px-p1-lg py-p1-md">
        <div className={`mx-auto max-w-7xl overflow-hidden rounded-p1-lg ${t.wrap} ${PADDING[padding]}`}>
          {split ? (
            <div className="grid items-center gap-p1-lg md:grid-cols-[1.4fr_auto]">
              {text}
              {buttons}
            </div>
          ) : (
            text
          )}
        </div>
      </div>
    );
  },
};
