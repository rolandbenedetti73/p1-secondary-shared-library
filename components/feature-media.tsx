import { ComponentConfig } from "@puckeditor/core";

export interface MediaBullet {
  text: string;
}

export interface FeatureMediaProps {
  eyebrow: string;
  title: string;
  body: string;
  bullets: MediaBullet[];
  buttonLabel: string;
  buttonHref: string;
  imageUrl: string;
  mediaSide: "right" | "left";
  tone: "white" | "light" | "dark";
}

const TONES: Record<FeatureMediaProps["tone"], { wrap: string; onDark: boolean }> = {
  white: { wrap: "bg-p1-bg-default text-p1-text", onDark: false },
  light: { wrap: "bg-p1-bg-light text-p1-text", onDark: false },
  dark: { wrap: "bg-gray-900 text-white", onDark: true },
};

export const FeatureMediaBlock: ComponentConfig<FeatureMediaProps> = {
  fields: {
    eyebrow: { type: "text" },
    title: { type: "text" },
    body: { type: "textarea" },
    bullets: {
      type: "array",
      arrayFields: { text: { type: "text" } },
      defaultItemProps: { text: "Benefit" },
      getItemSummary: (item) => item.text || "Bullet",
    },
    buttonLabel: { type: "text" },
    buttonHref: { type: "text" },
    imageUrl: { type: "text" },
    mediaSide: {
      type: "radio",
      options: [
        { label: "Right", value: "right" },
        { label: "Left", value: "left" },
      ],
    },
    tone: {
      type: "select",
      options: [
        { label: "White", value: "white" },
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "How it works",
    title: "Designed around the way you work.",
    body: "Move from idea to published in a few clicks. Preview every change, then make it live whenever you’re ready.",
    bullets: [
      { text: "Visual, on-brand editing" },
      { text: "Preview before you publish" },
      { text: "Publish in one click" },
    ],
    buttonLabel: "See how it works →",
    buttonHref: "#",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80",
    mediaSide: "right",
    tone: "white",
  },
  render: ({ eyebrow, title, body, bullets, buttonLabel, buttonHref, imageUrl, mediaSide, tone }) => {
    const t = TONES[tone];
    const media = (
      <div className="overflow-hidden rounded-p1-lg border border-p1-border bg-p1-bg-light">
        {imageUrl && <img src={imageUrl} alt="" className="aspect-[4/3] h-full w-full object-cover" />}
      </div>
    );
    const copy = (
      <div>
        {eyebrow && (
          <div className={`mb-p1-sm text-xs font-bold uppercase tracking-[0.14em] ${t.onDark ? "text-p1-warning" : "text-p1-primary"}`}>
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">{title}</h2>
        <p className={`mt-p1-md text-lg leading-relaxed ${t.onDark ? "text-white/85" : "text-p1-text-muted"}`}>{body}</p>
        {(bullets || []).length > 0 && (
          <ul className="mt-p1-md flex list-none flex-col gap-p1-sm p-0">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-p1-sm font-medium">
                <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-p1-success/15 text-p1-success">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {b.text}
              </li>
            ))}
          </ul>
        )}
        {buttonLabel && (
          <a
            href={buttonHref}
            className={`mt-p1-lg inline-flex items-center rounded-full px-p1-lg py-p1-sm font-bold ${
              t.onDark ? "bg-p1-warning text-p1-text" : "bg-p1-text text-white"
            }`}
          >
            {buttonLabel}
          </a>
        )}
      </div>
    );
    return (
      <div className={`px-p1-lg py-p1-xl ${t.wrap}`}>
        <div className="mx-auto grid max-w-7xl items-center gap-p1-xl md:grid-cols-2">
          {mediaSide === "left" ? (
            <>
              {media}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {media}
            </>
          )}
        </div>
      </div>
    );
  },
};
