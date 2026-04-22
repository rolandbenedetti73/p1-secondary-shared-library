import { ComponentConfig } from "@puckeditor/core";
export const SecondTestBlock: ComponentConfig = {
  fields: { text: { type: "text" } },
  defaultProps: { text: "Hello from secondary shared library`!" },
  render: ({ text }) => <div className="p-4 bg-yellow-100">{text}</div>,
};
