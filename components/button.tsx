import { ComponentConfig } from "@puckeditor/core";

export interface ButtonProps {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "yellow" | "purple";
  align: "left" | "center";
}

const VARIANTS: Record<ButtonProps["variant"], string> = {
  primary: "bg-p1-text text-white border border-p1-text hover:opacity-90",
  secondary: "bg-white text-p1-text border border-p1-border hover:bg-p1-bg-light",
  yellow: "bg-p1-warning text-p1-text border border-p1-warning hover:brightness-95",
  purple: "bg-p1-primary text-white border border-p1-primary hover:opacity-90",
};

export const ButtonBlock: ComponentConfig<ButtonProps> = {
  fields: {
    label: { type: "text" },
    href: { type: "text" },
    variant: {
      type: "select",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Yellow", value: "yellow" },
        { label: "Purple", value: "purple" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
  },
  defaultProps: { label: "Get started", href: "#", variant: "primary", align: "left" },
  render: ({ label, href, variant, align }) => (
    <div
      className={`mx-auto flex max-w-6xl px-p1-lg py-p1-sm ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <a
        href={href}
        className={`inline-flex items-center rounded-full px-p1-lg py-p1-sm font-bold transition-all ${VARIANTS[variant]}`}
      >
        {label}
      </a>
    </div>
  ),
};
