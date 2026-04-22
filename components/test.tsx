import { ComponentConfig } from "@puckeditor/core";
export const TestBlock: ComponentConfig = {
  fields: { text: { type: "text" } },
  defaultProps: { text: "Hello from dup!" },
  render: ({ text }) => <div className="p-4 bg-yellow-100">{text}</div>,
};
