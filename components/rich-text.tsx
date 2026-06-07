import { ComponentConfig } from "@puckeditor/core";
import { renderProse } from "./prose";

export interface RichTextProps {
  content: string;
  measure: "narrow" | "standard" | "wide";
  size: "regular" | "large";
  dropCap: "off" | "on";
}

const MEASURE: Record<RichTextProps["measure"], string> = {
  narrow: "max-w-[39rem]",
  standard: "max-w-[45rem]",
  wide: "max-w-[54rem]",
};

export const RichTextBlock: ComponentConfig<RichTextProps> = {
  fields: {
    content: { type: "textarea", contentEditable: true, visible: false },
    measure: {
      type: "select",
      options: [
        { label: "Narrow", value: "narrow" },
        { label: "Standard", value: "standard" },
        { label: "Wide", value: "wide" },
      ],
    },
    size: {
      type: "radio",
      options: [
        { label: "Regular", value: "regular" },
        { label: "Large", value: "large" },
      ],
    },
    dropCap: {
      type: "radio",
      options: [
        { label: "Off", value: "off" },
        { label: "On", value: "on" },
      ],
    },
  },
  defaultProps: {
    content:
      "A year ago, shipping a change meant a ticket, a queue, and a wait. Today it takes minutes — and the difference wasn't a single tool.\n\n## It started with previews\n\nEvery change got a shareable link before it went live. Reviewers stopped guessing and ==started seeing==.\n\n- Fewer round-trips between teams\n- Marketers unblocked from engineering\n- Confidence to publish on a Friday\n\n### The habit that stuck\n\nWe made \"preview first\" the default, not the exception. Small change, large compounding effect.\n\n> The best workflow is the one your whole team actually uses.",
    measure: "standard",
    size: "regular",
    dropCap: "off",
  },
  render: ({ content, measure, size, dropCap }) => {
    const out = renderProse(content, { baseSize: size, dropCap: dropCap === "on" });
    return (
      <div className={`mx-auto px-p1-lg py-p1-sm ${MEASURE[measure]}`}>
        {out.length ? (
          out
        ) : (
          <div className="rounded-p1-md border border-dashed border-p1-border p-p1-lg text-center text-p1-text-muted">
            Write your article body — Markdown-style headings, lists, and quotes are supported.
          </div>
        )}
      </div>
    );
  },
};
