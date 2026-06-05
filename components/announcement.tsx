import { ComponentConfig } from "@puckeditor/core";

export interface AnnouncementProps {
  text: string;
  linkLabel: string;
  linkHref: string;
  tone: "purple" | "yellow" | "dark" | "gradient";
  align: "center" | "left";
}

const TONES: Record<AnnouncementProps["tone"], { wrap: string; link: string }> = {
  purple: { wrap: "bg-p1-primary text-white", link: "text-p1-warning" },
  yellow: { wrap: "bg-p1-warning text-p1-text", link: "text-p1-primary" },
  dark: { wrap: "bg-gray-900 text-white", link: "text-p1-warning" },
  gradient: {
    wrap: "bg-gradient-to-r from-p1-primary to-p1-secondary text-white",
    link: "text-p1-warning",
  },
};

export const AnnouncementBlock: ComponentConfig<AnnouncementProps> = {
  fields: {
    text: { type: "text" },
    linkLabel: { type: "text" },
    linkHref: { type: "text" },
    tone: {
      type: "select",
      options: [
        { label: "Purple", value: "purple" },
        { label: "Yellow", value: "yellow" },
        { label: "Dark", value: "dark" },
        { label: "Gradient", value: "gradient" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Center", value: "center" },
        { label: "Left", value: "left" },
      ],
    },
  },
  defaultProps: {
    text: "Something new just launched — take a look.",
    linkLabel: "Read the announcement →",
    linkHref: "#",
    tone: "purple",
    align: "center",
  },
  render: ({ text, linkLabel, linkHref, tone, align }) => {
    const t = TONES[tone];
    return (
      <div
        className={`flex flex-wrap items-center gap-p1-sm px-p1-lg py-p1-sm text-sm font-medium ${t.wrap} ${
          align === "left" ? "justify-start" : "justify-center"
        }`}
      >
        <span>{text}</span>
        {linkLabel && (
          <a href={linkHref} className={`font-bold ${t.link}`}>
            {linkLabel}
          </a>
        )}
      </div>
    );
  },
};
