import { ComponentConfig } from "@puckeditor/core";
import { inline } from "./prose";

export interface QuoteProps {
  quote: string;
  attribution: string;
  scale: "standard" | "display";
}

export const QuoteBlock: ComponentConfig<QuoteProps> = {
  fields: {
    quote: { type: "textarea", contentEditable: true, visible: false },
    attribution: { type: "text", contentEditable: true, visible: false },
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
      "Switching over was the easiest call we made all year — ==our team ships in hours, not weeks== now.",
    attribution: "Jordan Ellis, Operations Lead",
    scale: "standard",
  },
  render: ({ quote, attribution, scale }) => {
    if (scale === "display") {
      return (
        <div className="mx-auto max-w-6xl px-p1-lg py-p1-xl">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="mb-p1-md font-serif text-3xl font-medium italic leading-snug text-balance text-p1-text md:text-4xl">
              “{inline(quote)}”
            </p>
            <cite className="font-semibold not-italic text-p1-primary">— {attribution}</cite>
          </blockquote>
        </div>
      );
    }
    return (
      <div className="mx-auto max-w-6xl px-p1-lg py-p1-lg">
        <blockquote className="border-l-4 border-p1-warning pl-p1-lg">
          <p className="mb-p1-sm font-serif text-2xl font-medium italic leading-snug text-balance text-p1-text">
            “{inline(quote)}”
          </p>
          <cite className="font-semibold not-italic text-p1-primary">— {attribution}</cite>
        </blockquote>
      </div>
    );
  },
};
