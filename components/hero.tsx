import { ComponentConfig } from "@puckeditor/core";

export interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  tone: "indigo" | "purple" | "dark" | "light";
  layout: "split" | "full" | "text";
  align: "left" | "center";
  imageUrl: string;
  imageSide: "right" | "left";
}

const TONES: Record<HeroProps["tone"], { wrap: string; onDark: boolean }> = {
  indigo: { wrap: "bg-slate-800 text-white", onDark: true },
  purple: { wrap: "bg-p1-primary text-white", onDark: true },
  dark: { wrap: "bg-gray-900 text-white", onDark: true },
  light: { wrap: "bg-gray-50 text-p1-text", onDark: false },
};

export const HeroBlock: ComponentConfig<HeroProps> = {
  fields: {
    eyebrow: { type: "text" },
    title: { type: "text" },
    description: { type: "textarea" },
    primaryCta: { type: "text" },
    primaryHref: { type: "text" },
    secondaryCta: { type: "text" },
    secondaryHref: { type: "text" },
    tone: {
      type: "select",
      options: [
        { label: "Indigo", value: "indigo" },
        { label: "Purple", value: "purple" },
        { label: "Dark", value: "dark" },
        { label: "Light", value: "light" },
      ],
    },
    layout: {
      type: "select",
      options: [
        { label: "Split", value: "split" },
        { label: "Full image", value: "full" },
        { label: "Text only", value: "text" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
    imageUrl: { type: "text" },
    imageSide: {
      type: "radio",
      options: [
        { label: "Right", value: "right" },
        { label: "Left", value: "left" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "New — now available",
    title: "Your big idea, beautifully online.",
    description:
      "A flexible starting point for your next page. Swap in your own headline, story, and imagery — this layout adapts to whatever you publish.",
    primaryCta: "Start free trial",
    primaryHref: "#",
    secondaryCta: "Book a demo →",
    secondaryHref: "#",
    tone: "indigo",
    layout: "split",
    align: "left",
    imageUrl:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
    imageSide: "right",
  },
  render: ({
    eyebrow,
    title,
    description,
    primaryCta,
    primaryHref,
    secondaryCta,
    secondaryHref,
    tone,
    layout,
    align,
    imageUrl,
    imageSide,
  }) => {
    const t = TONES[tone];
    const onDark = t.onDark || layout === "full";
    const center = align === "center";

    const primaryClasses = onDark
      ? "bg-p1-warning text-p1-text"
      : "bg-p1-primary text-white";
    const secondaryClasses = onDark
      ? "border border-white/40 text-white"
      : "border border-p1-border text-p1-text";

    const Copy = (
      <div
        className={`relative z-10 max-w-xl ${center ? "mx-auto text-center" : "text-left"}`}
      >
        {eyebrow && (
          <span
            className={`mb-p1-md inline-flex items-center gap-2 rounded-full px-p1-md py-p1-xs text-sm font-medium ${
              onDark
                ? "border border-white/20 bg-white/10 text-white"
                : "border border-p1-border bg-white text-p1-text"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-p1-warning" />
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        <p
          className={`mt-p1-md text-lg leading-relaxed ${onDark ? "text-white/85" : "text-p1-text-muted"}`}
        >
          {description}
        </p>
        <div
          className={`mt-p1-lg flex flex-wrap gap-p1-sm ${center ? "justify-center" : "justify-start"}`}
        >
          {primaryCta && (
            <a
              href={primaryHref}
              className={`inline-flex items-center rounded-full px-p1-lg py-p1-sm font-bold transition-opacity hover:opacity-90 ${primaryClasses}`}
            >
              {primaryCta}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryHref}
              className={`inline-flex items-center rounded-full px-p1-lg py-p1-sm font-bold ${secondaryClasses}`}
            >
              {secondaryCta}
            </a>
          )}
        </div>
      </div>
    );

    if (layout === "full") {
      return (
        <section className="relative overflow-hidden bg-gray-900">
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-p1-xl py-24">
            {Copy}
          </div>
        </section>
      );
    }

    if (layout === "text") {
      return (
        <section className={`${t.wrap}`}>
          <div
            className={`mx-auto max-w-7xl px-p1-xl py-24 ${center ? "flex justify-center" : ""}`}
          >
            {Copy}
          </div>
        </section>
      );
    }

    const image = (
      <div className="overflow-hidden rounded-p1-lg border border-white/15 bg-white/5 shadow-xl">
        <img src={imageUrl} alt="" className="aspect-[4/3] h-full w-full object-cover" />
      </div>
    );

    return (
      <section className={`${t.wrap} overflow-hidden`}>
        <div className="mx-auto grid max-w-7xl items-center gap-p1-xl px-p1-xl py-20 md:grid-cols-2">
          {imageSide === "left" ? (
            <>
              {image}
              {Copy}
            </>
          ) : (
            <>
              {Copy}
              {image}
            </>
          )}
        </div>
      </section>
    );
  },
};
