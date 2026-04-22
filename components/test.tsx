import { ComponentConfig } from "@puckeditor/core";
export const TestBlock: ComponentConfig = {
  fields: { text: { type: "text" } },
  defaultProps: { text: "Hello from dup!" },
  render: ({ text }) => <div className="p-p1-md bg-p1-warning/20 rounded-p1-md border border-p1-border">{text}</div>,
};
