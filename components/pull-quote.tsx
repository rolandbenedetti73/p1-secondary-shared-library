import { ComponentConfig } from "@puckeditor/core";
import { inline } from "./prose";

export interface PullQuoteProps {
  quote: string;
  cite: string;
  accent: "yellow rule" | "quote mark" | "none";
  align: "center" | "left";
}

export const PullQuoteBlock: ComponentConfig<PullQuoteProps> = {
  fields: {
    quote: { type: "textarea" },
    cite: { type: "text" },
    accent: {
      type: "select",
      options: [
        { label: "Yellow rule", value: "yellow rule" },
        { label: "Quote mark", value: "quote mark" },
        { label: "None", value: "none" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Center", value: "center" },
        { label: "Left", value: "left" },
      ],
    },
  },
  defaultProps: {
    quote:
      "The best workflow is the one your whole team ==actually uses== — not the one that looks impressive in a diagram.",
    cite: "Jordan Ellis, Operations Lead",
    accent: "yellow rule",
    align: "center",
  },
  render: ({ quote, cite, accent, align }) => {
    const center = align !== "left";
    return (
      <div className="mx-auto max-w-4xl px-p1-lg py-p1-xl">
        <blockquote className={center ? "text-center" : "text-left"}>
          {accent === "yellow rule" && (
            <div className={`mb-p1-lg h-1.5 w-16 rounded-full bg-p1-warning ${center ? "mx-auto" : ""}`} />
          )}
          {accent === "quote mark" && (
            <div
              className={`font-serif text-7xl font-extrabold leading-[0.5] text-p1-primary/30 ${
                center ? "mx-auto" : ""
              }`}
            >
              “
            </div>
          )}
          <p className="mb-p1-md font-serif text-3xl font-medium italic leading-tight text-balance text-p1-text md:text-4xl">
            {inline(quote)}
          </p>
          {cite && (
            <cite className="font-semibold not-italic tracking-wide text-p1-primary">— {cite}</cite>
          )}
        </blockquote>
      </div>
    );
  },
};
