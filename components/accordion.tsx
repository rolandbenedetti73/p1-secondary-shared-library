import * as React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { renderProse } from "./prose";
import { Icon } from "./icons";

export interface AccordionItem {
  title: string;
  body: string;
}
export interface AccordionProps {
  heading: string;
  align: "left" | "center";
  items: AccordionItem[];
}

const AccordionView: React.FC<AccordionProps> = ({ heading, align, items }) => {
  const [open, setOpen] = React.useState<Record<number, boolean>>({ 0: true });
  const list = items || [];
  return (
    <div className="mx-auto max-w-3xl px-p1-lg py-p1-xl">
      {heading && (
        <h2
          className={`mb-p1-lg text-3xl font-bold tracking-tight text-p1-text md:text-4xl ${
            align === "center" ? "text-center" : "text-left"
          }`}
        >
          {heading}
        </h2>
      )}
      <div className="border-t border-p1-border">
        {list.map((it, ii) => {
          const isOpen = !!open[ii];
          return (
            <div key={ii} className="border-b border-p1-border">
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [ii]: !o[ii] }))}
                className="flex w-full items-center justify-between gap-p1-md py-p1-md text-left"
              >
                <span className="text-lg font-bold leading-snug text-p1-text">
                  {it.title || `Item ${ii + 1}`}
                </span>
                <Icon
                  name="plus"
                  className={`h-5 w-5 flex-none text-p1-text-muted transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              {isOpen && <div className="pb-p1-lg">{renderProse(it.body || "", { baseSize: "regular", tight: true })}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AccordionBlock: ComponentConfig<AccordionProps> = {
  fields: {
    heading: { type: "text" },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
    items: {
      type: "array",
      arrayFields: {
        title: { type: "text" },
        body: { type: "textarea" },
      },
      defaultItemProps: { title: "Section title", body: "Section content." },
      getItemSummary: (item) => item.title || "Section",
    },
  },
  defaultProps: {
    heading: "The details",
    align: "left",
    items: [
      {
        title: "What frameworks are supported?",
        body: "WordPress, Drupal, and Next.js — all on the same platform, with the same ==Dev-Test-Live== workflow.",
      },
      {
        title: "How do environments work?",
        body: "Every site gets Dev, Test, and Live — plus unlimited Multidev branches for parallel work.\n\n- Isolated by default\n- Shareable preview URLs\n- One-click promotion",
      },
      {
        title: "Can the whole team use it?",
        body: "Yes. Developers, marketers, and IT share one workflow with role-based access — no one waits on anyone else.",
      },
    ],
  },
  render: (props) => <AccordionView {...props} />,
};
