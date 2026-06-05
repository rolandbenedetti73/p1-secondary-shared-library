import { ComponentConfig } from "@puckeditor/core";

export interface ListItem {
  text: string;
}

export interface ListProps {
  variant: "check" | "bullet" | "numbered";
  items: ListItem[];
}

export const ListBlock: ComponentConfig<ListProps> = {
  fields: {
    variant: {
      type: "select",
      options: [
        { label: "Check", value: "check" },
        { label: "Bullet", value: "bullet" },
        { label: "Numbered", value: "numbered" },
      ],
    },
    items: {
      type: "array",
      arrayFields: { text: { type: "text" } },
      defaultItemProps: { text: "List item" },
      getItemSummary: (item) => item.text || "Item",
    },
  },
  defaultProps: {
    variant: "check",
    items: [
      { text: "Fast, reliable performance" },
      { text: "Simple, visual editing" },
      { text: "Works across your whole team" },
      { text: "Secure by default" },
    ],
  },
  render: ({ variant, items }) => (
    <div className="mx-auto max-w-6xl px-p1-lg py-p1-sm">
      <ul className="m-0 flex max-w-2xl list-none flex-col gap-p1-sm p-0">
        {(items || []).map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-p1-sm text-lg font-medium leading-snug text-p1-text"
          >
            {variant === "numbered" ? (
              <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-p1-primary text-xs font-bold text-white">
                {i + 1}
              </span>
            ) : variant === "bullet" ? (
              <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-p1-primary" />
            ) : (
              <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-p1-success/15 text-p1-success">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  ),
};
