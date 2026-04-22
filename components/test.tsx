import { ComponentConfig } from "@puckeditor/core";
export const TestBlock: ComponentConfig = {
  fields: { text: { type: "text" } },
  defaultProps: { text: "Hello from dup!" },
  render: ({ text }) => <div className="p-puck-md bg-puck-warning/20 rounded-puck-md border border-puck-border">{text}</div>,
};
