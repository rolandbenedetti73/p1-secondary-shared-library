import { ComponentConfig } from "@puckeditor/core";
export const SecondTestBlock: ComponentConfig = {
  fields: { text: { type: "text" } },
  defaultProps: { text: "Hello from secondary shared library`!" },
  render: ({ text }) => <div className="p-p1-md bg-p1-bg-light rounded-p1-md">{text}</div>,
};
