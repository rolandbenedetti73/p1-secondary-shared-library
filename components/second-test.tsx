import { ComponentConfig } from "@puckeditor/core";
export const SecondTestBlock: ComponentConfig = {
  fields: { text: { type: "text" } },
  defaultProps: { text: "Hello from secondary shared library`!" },
  render: ({ text }) => <div className="p-puck-md bg-puck-bg-light rounded-puck-md">{text}</div>,
};
