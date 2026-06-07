import { ComponentConfig } from "@puckeditor/core";
import { Btn } from "./btn";

export interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  tone: "indigo" | "purple" | "dark" | "light";
  layout: "split" | "full image" | "text only";
  imageSrc: string;
  imageSide: "right" | "left";
  imageFill: "card" | "flush";
  splitRatio: "even" | "copy-wide" | "image-wide";
  align: "left" | "center" | "right";
  overlay: "none" | "scrim" | "gradient down" | "gradient right";
  overlayStrength: "light" | "medium" | "heavy";
  knockout: "off" | "on";
}

const TONES: Record<HeroProps["tone"], { wrap: string; onDark: boolean }> = {
  indigo: { wrap: "bg-indigo-900 text-white", onDark: true },
  purple: { wrap: "bg-p1-primary text-white", onDark: true },
  dark: { wrap: "bg-gray-900 text-white", onDark: true },
  light: { wrap: "bg-p1-bg-light text-p1-text", onDark: false },
};

export const HeroBlock: ComponentConfig<HeroProps> = {
  fields: {
    eyebrow: { type: "text", contentEditable: true, visible: false },
    title: { type: "text", contentEditable: true, visible: false },
    description: { type: "textarea", contentEditable: true, visible: false },
    primaryLabel: { type: "text", contentEditable: true, visible: false },
    secondaryLabel: { type: "text", contentEditable: true, visible: false },
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
        { label: "Full image", value: "full image" },
        { label: "Text only", value: "text only" },
      ],
    },
    imageSrc: { type: "text" },
    imageSide: {
      type: "radio",
      options: [
        { label: "Right", value: "right" },
        { label: "Left", value: "left" },
      ],
    },
    imageFill: {
      type: "radio",
      options: [
        { label: "Card", value: "card" },
        { label: "Flush", value: "flush" },
      ],
    },
    splitRatio: {
      type: "select",
      options: [
        { label: "Even", value: "even" },
        { label: "Copy-wide", value: "copy-wide" },
        { label: "Image-wide", value: "image-wide" },
      ],
    },
    align: {
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    overlay: {
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "Scrim", value: "scrim" },
        { label: "Gradient ↓", value: "gradient down" },
        { label: "Gradient →", value: "gradient right" },
      ],
    },
    overlayStrength: {
      type: "select",
      options: [
        { label: "Light", value: "light" },
        { label: "Medium", value: "medium" },
        { label: "Heavy", value: "heavy" },
      ],
    },
    knockout: {
      type: "radio",
      options: [
        { label: "Off", value: "off" },
        { label: "On", value: "on" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "New — now available",
    title: "Your big idea, beautifully online.",
    description:
      "A flexible starting point for your next page. Swap in your own headline, story, and imagery — this layout adapts to whatever you publish.",
    primaryLabel: "Start free trial",
    secondaryLabel: "Book a demo →",
    tone: "indigo",
    layout: "split",
    imageSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
    imageSide: "right",
    imageFill: "card",
    splitRatio: "even",
    align: "left",
    overlay: "gradient right",
    overlayStrength: "medium",
    knockout: "off",
  },
  render: ({
    eyebrow,
    title,
    description,
    primaryLabel,
    secondaryLabel,
    tone,
    layout,
    imageSrc,
    imageSide,
    imageFill,
    splitRatio,
    align,
    overlay,
    overlayStrength,
    knockout,
  }) => {
    const t = TONES[tone];
    const alignCls = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
    const justify = align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start";
    const img = imageSrc || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80";
    const ko = knockout === "on";

    const Copy = ({ onDark }: { onDark: boolean }) => {
      const titleStyle = ko
        ? {
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }
        : undefined;
      return (
        <div className={`relative z-10 ${align === "center" ? "mx-auto" : ""} ${alignCls}`} style={{ maxWidth: align === "center" ? 760 : 560 }}>
          {eyebrow && (
            <span
              className={`mb-p1-md inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${
                onDark ? "border border-white/20 bg-white/10 text-white" : "border border-p1-border bg-white text-p1-text"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-p1-warning" />
              {eyebrow}
            </span>
          )}
          <h1
            className="text-4xl font-extrabold leading-[0.98] tracking-tight text-balance md:text-6xl"
            style={titleStyle}
          >
            {title}
          </h1>
          <p className={`mt-p1-md max-w-xl text-lg leading-relaxed ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""} ${onDark ? "text-white/90" : "text-p1-text-muted"}`}>
            {description}
          </p>
          <div className={`mt-p1-lg flex flex-wrap gap-p1-sm ${justify}`}>
            {primaryLabel && <Btn variant="yellow">{primaryLabel}</Btn>}
            {secondaryLabel && (
              <span
                className={`inline-flex items-center rounded-full border px-6 py-3 text-sm font-bold ${
                  onDark ? "border-white/30 text-white" : "border-p1-border text-p1-text"
                }`}
              >
                {secondaryLabel}
              </span>
            )}
          </div>
        </div>
      );
    };

    if (layout === "full image") {
      const a = ({ light: 0.32, medium: 0.56, heavy: 0.8 } as Record<string, number>)[overlayStrength] ?? 0.56;
      let overlayBg = "none";
      if (overlay === "scrim") overlayBg = `rgba(10,6,30,${a})`;
      else if (overlay === "gradient down") overlayBg = `linear-gradient(180deg, rgba(10,6,30,0) 30%, rgba(10,6,30,${a}) 100%)`;
      else if (overlay === "gradient right") overlayBg = `linear-gradient(90deg, rgba(10,6,30,${a + 0.12}) 0%, rgba(10,6,30,${a * 0.5}) 45%, rgba(10,6,30,0) 80%)`;
      return (
        <section className="relative grid min-h-[540px] items-center overflow-hidden bg-gray-900 px-p1-lg py-24">
          <img src={img} alt="" className="absolute inset-0 z-0 h-full w-full object-cover" />
          {overlayBg !== "none" && <div className="absolute inset-0 z-[1]" style={{ background: overlayBg }} />}
          <div className={`relative z-[2] mx-auto flex w-full max-w-7xl ${justify}`}>
            <Copy onDark={true} />
          </div>
        </section>
      );
    }

    if (layout === "text only") {
      return (
        <section className={`overflow-hidden px-p1-lg py-24 ${t.wrap}`}>
          <div className={`mx-auto flex max-w-7xl ${justify}`}>
            <Copy onDark={t.onDark} />
          </div>
        </section>
      );
    }

    // split
    const imgFirst = imageSide === "left";
    const flush = imageFill === "flush";
    const ratio = ({ even: [1, 1], "copy-wide": [1.45, 1], "image-wide": [1, 1.45] } as Record<string, number[]>)[splitRatio] || [1, 1];
    const template = imgFirst ? `${ratio[1]}fr ${ratio[0]}fr` : `${ratio[0]}fr ${ratio[1]}fr`;

    if (flush) {
      const copyCell = (
        <div className="flex items-center px-p1-lg py-20">
          <Copy onDark={t.onDark} />
        </div>
      );
      const imgCell = (
        <div className="relative min-h-[440px] overflow-hidden">
          <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      );
      return (
        <section className={`overflow-hidden ${t.wrap}`}>
          <div className="grid min-h-[480px] items-stretch md:grid-cols-2">
            {imgFirst ? (
              <>
                {imgCell}
                {copyCell}
              </>
            ) : (
              <>
                {copyCell}
                {imgCell}
              </>
            )}
          </div>
        </section>
      );
    }

    const imageCard = (
      <div className={`overflow-hidden rounded-2xl ${t.onDark ? "border border-white/15 bg-white/5" : "border border-p1-border"}`}>
        <img src={img} alt="" className="aspect-[4/3] h-full w-full object-cover" />
      </div>
    );
    return (
      <section className={`overflow-hidden px-p1-lg py-20 ${t.wrap}`}>
        <div className="mx-auto grid max-w-7xl items-center gap-p1-xl md:gap-14" style={{ gridTemplateColumns: template }}>
          {imgFirst ? (
            <>
              {imageCard}
              <Copy onDark={t.onDark} />
            </>
          ) : (
            <>
              <Copy onDark={t.onDark} />
              {imageCard}
            </>
          )}
        </div>
      </section>
    );
  },
};
