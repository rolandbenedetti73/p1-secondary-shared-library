import { ComponentConfig } from "@puckeditor/core";

export interface FeatureCard {
  eyebrow: string;
  title: string;
  body: string;
}

export interface FeatureCardsProps {
  eyebrow: string;
  heading: string;
  cards: FeatureCard[];
  columns: "2" | "3" | "4";
  colorScheme: "brand-mix" | "light" | "purple" | "dark" | "outline";
  sectionBg: "light" | "white" | "dark" | "none";
}

const COL_CLASS: Record<FeatureCardsProps["columns"], string> = {
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-3",
  "4": "md:grid-cols-2 lg:grid-cols-4",
};

const MIX = [
  { card: "bg-p1-primary text-white", sub: "text-p1-warning" },
  { card: "bg-p1-bg-default text-p1-text border border-p1-border", sub: "text-p1-primary" },
  { card: "bg-gray-900 text-white", sub: "text-p1-warning" },
];

function cardStyle(scheme: FeatureCardsProps["colorScheme"], i: number) {
  switch (scheme) {
    case "light":
      return { card: "bg-p1-bg-default text-p1-text border border-p1-border", sub: "text-p1-primary" };
    case "purple":
      return { card: "bg-p1-primary text-white", sub: "text-p1-warning" };
    case "dark":
      return { card: "bg-gray-900 text-white", sub: "text-p1-warning" };
    case "outline":
      return { card: "bg-transparent text-p1-text border border-p1-border", sub: "text-p1-primary" };
    default:
      return MIX[i % 3];
  }
}

const SECTION_BG: Record<FeatureCardsProps["sectionBg"], string> = {
  light: "bg-p1-bg-light",
  white: "bg-p1-bg-default",
  dark: "bg-gray-900",
  none: "",
};

export const FeatureCardsBlock: ComponentConfig<FeatureCardsProps> = {
  fields: {
    eyebrow: { type: "text" },
    heading: { type: "text" },
    cards: {
      type: "array",
      arrayFields: {
        eyebrow: { type: "text" },
        title: { type: "text" },
        body: { type: "textarea" },
      },
      defaultItemProps: { eyebrow: "Eyebrow", title: "Feature", body: "Describe the feature." },
      getItemSummary: (item) => item.title || "Card",
    },
    columns: {
      type: "select",
      options: [
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
      ],
    },
    colorScheme: {
      type: "select",
      options: [
        { label: "Brand mix", value: "brand-mix" },
        { label: "Light", value: "light" },
        { label: "Purple", value: "purple" },
        { label: "Dark", value: "dark" },
        { label: "Outline", value: "outline" },
      ],
    },
    sectionBg: {
      type: "select",
      options: [
        { label: "Light", value: "light" },
        { label: "White", value: "white" },
        { label: "Dark", value: "dark" },
        { label: "None", value: "none" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "Why teams choose us",
    heading: "Everything you need, in one place.",
    cards: [
      { eyebrow: "Simple", title: "Easy to use", body: "A visual editor anyone on your team can pick up in minutes — no training required." },
      { eyebrow: "Flexible", title: "Built to scale", body: "Start with one page and grow to hundreds — everything stays consistent as you go." },
      { eyebrow: "Reliable", title: "Always on", body: "Fast, secure, and dependable — so you can focus on your content, not your infrastructure." },
    ],
    columns: "3",
    colorScheme: "brand-mix",
    sectionBg: "light",
  },
  render: ({ eyebrow, heading, cards, columns, colorScheme, sectionBg }) => {
    const onDarkSection = sectionBg === "dark";
    return (
      <div className={`px-p1-lg py-p1-xl ${SECTION_BG[sectionBg]}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-p1-xl text-center">
            {eyebrow && (
              <p className={`mb-p1-sm font-serif text-xl italic ${onDarkSection ? "text-p1-warning" : "text-p1-primary"}`}>
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${onDarkSection ? "text-white" : "text-p1-text"}`}>
                {heading}
              </h2>
            )}
          </div>
          <div className={`grid gap-p1-md ${COL_CLASS[columns]}`}>
            {(cards || []).map((card, i) => {
              const s = cardStyle(colorScheme, i);
              return (
                <div
                  key={i}
                  className={`flex min-h-[15rem] flex-col gap-p1-sm rounded-p1-lg p-p1-lg ${s.card}`}
                >
                  {card.eyebrow && (
                    <div className={`text-xs font-bold uppercase tracking-[0.14em] ${s.sub}`}>
                      {card.eyebrow}
                    </div>
                  )}
                  <h3 className="text-xl font-bold leading-snug">{card.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};
