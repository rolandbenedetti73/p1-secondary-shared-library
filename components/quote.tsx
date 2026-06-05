import { ComponentConfig } from "@puckeditor/core";

export interface QuoteProps {
  quote: string;
  attribution: string;
  scale: "standard" | "display";
}

export const QuoteBlock: ComponentConfig<QuoteProps> = {
  fields: {
    quote: { type: "textarea" },
    attribution: { type: "text" },
    scale: {
      type: "radio",
      options: [
        { label: "Standard", value: "standard" },
        { label: "Display", value: "display" },
      ],
    },
  },
  defaultProps: {
    quote:
      "Switching over was the easiest call we made all year — our team ships in hours, not weeks now.",
    attribution: "Jordan Ellis, Operations Lead",
    scale: "standard",
  },
  render: ({ quote, attribution, scale }) => {
    if (scale === "display") {
      return (
        <div className="mx-auto max-w-6xl px-p1-lg py-p1-xl">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-serif text-3xl md:text-4xl font-medium italic leading-snug text-p1-text text-balance">
              “{quote}”
            </p>
            <cite className="mt-p1-lg block not-italic font-semibold text-p1-primary">
              — {attribution}
            </cite>
          </blockquote>
        </div>
      );
    }
    return (
      <div className="mx-auto max-w-6xl px-p1-lg py-p1-lg">
        <blockquote className="border-l-4 border-p1-warning pl-p1-lg">
          <p className="font-serif text-2xl font-medium italic leading-snug text-p1-text text-balance">
            “{quote}”
          </p>
          <cite className="mt-p1-md block not-italic font-semibold text-p1-primary">
            — {attribution}
          </cite>
        </blockquote>
      </div>
    );
  },
};
