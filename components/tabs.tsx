import * as React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { renderProse } from "./prose";

export interface TabItem {
  label: string;
  body: string;
}
export interface TabsProps {
  heading: string;
  align: "left" | "center";
  tabs: TabItem[];
}

const TabsView: React.FC<TabsProps> = ({ heading, align, tabs }) => {
  const [active, setActive] = React.useState(0);
  const list = tabs || [];
  const i = Math.min(active, Math.max(0, list.length - 1));
  const center = align === "center";
  return (
    <div className="mx-auto max-w-4xl px-p1-lg py-p1-xl">
      {heading && (
        <h2
          className={`mb-p1-lg text-3xl font-bold tracking-tight text-p1-text md:text-4xl ${
            center ? "text-center" : "text-left"
          }`}
        >
          {heading}
        </h2>
      )}
      <div
        className={`mb-p1-lg flex flex-wrap gap-1 border-b border-p1-border ${
          center ? "justify-center" : "justify-start"
        }`}
      >
        {list.map((tb, ti) => {
          const on = ti === i;
          return (
            <button
              key={ti}
              type="button"
              onClick={() => setActive(ti)}
              className={`-mb-px border-b-2 px-p1-md py-p1-sm font-bold transition-colors ${
                on
                  ? "border-p1-primary text-p1-text"
                  : "border-transparent text-p1-text-muted hover:text-p1-text"
              }`}
            >
              {tb.label || `Tab ${ti + 1}`}
            </button>
          );
        })}
      </div>
      <div>{renderProse((list[i] || ({} as TabItem)).body || "", { baseSize: "regular" })}</div>
    </div>
  );
};

export const TabsBlock: ComponentConfig<TabsProps> = {
  fields: {
    heading: { type: "text", contentEditable: true, visible: false },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
    tabs: {
      type: "array",
      arrayFields: {
        label: { type: "text", contentEditable: true, visible: false },
        body: { type: "textarea", contentEditable: true, visible: false },
      },
      defaultItemProps: { label: "Tab", body: "Tab content." },
      getItemSummary: (item) => item.label || "Tab",
    },
  },
  defaultProps: {
    heading: "Everything in one workflow",
    align: "left",
    tabs: [
      {
        label: "Develop",
        body: "Branch every change into its own ==Multidev== environment.\n\n- No more stepping on each other\n- Real URLs to share for review\n- Merge when it's ready",
      },
      {
        label: "Test",
        body: "Push to Test with one click and run against ==production-like data==.\n\n- Automated visual checks\n- Stakeholder sign-off\n- Nothing surprises you on Live",
      },
      {
        label: "Launch",
        body: "Deploy to Live in seconds — and roll back just as fast if you need to.\n\n> Confidence to publish on a Friday afternoon.",
      },
    ],
  },
  render: (props) => <TabsView {...props} />,
};
