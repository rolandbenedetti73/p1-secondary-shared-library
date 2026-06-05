import type { Config } from "@puckeditor/core";

// ── Attention ──────────────────────────────────────────────
import { HeroBlock } from "./hero";
import { AnnouncementBlock } from "./announcement";
// ── Trust ──────────────────────────────────────────────────
import { LogoCloudBlock } from "./logos";
import { TestimonialBlock } from "./testimonial";
import { StatsBlock } from "./stats";
// ── Value ──────────────────────────────────────────────────
import { FeatureCardsBlock } from "./features";
import { FeatureMediaBlock } from "./feature-media";
import { StepsBlock } from "./steps";
// ── Showcase ───────────────────────────────────────────────
import { CardGridBlock } from "./card-grid";
import { ImageBlock } from "./image";
// ── Convert ────────────────────────────────────────────────
import { PricingBlock } from "./pricing";
import { FaqBlock } from "./faq";
import { LeadCaptureBlock } from "./lead-capture";
import { CtaBannerBlock } from "./cta";
// ── Content ────────────────────────────────────────────────
import { HeadingBlock } from "./heading";
import { ParagraphBlock } from "./paragraph";
import { QuoteBlock } from "./quote";
import { ListBlock } from "./list";
import { ButtonBlock } from "./button";
import { DividerBlock } from "./divider";
import { SpacerBlock } from "./spacer";

// Re-export every component config
export {
  HeroBlock,
  AnnouncementBlock,
  LogoCloudBlock,
  TestimonialBlock,
  StatsBlock,
  FeatureCardsBlock,
  FeatureMediaBlock,
  StepsBlock,
  CardGridBlock,
  ImageBlock,
  PricingBlock,
  FaqBlock,
  LeadCaptureBlock,
  CtaBannerBlock,
  HeadingBlock,
  ParagraphBlock,
  QuoteBlock,
  ListBlock,
  ButtonBlock,
  DividerBlock,
  SpacerBlock,
};

// Convenience map of the marketing block library — pass to Puck's `components`.
export const marketingBlocks = {
  HeroBlock,
  AnnouncementBlock,
  LogoCloudBlock,
  TestimonialBlock,
  StatsBlock,
  FeatureCardsBlock,
  FeatureMediaBlock,
  StepsBlock,
  CardGridBlock,
  ImageBlock,
  PricingBlock,
  FaqBlock,
  LeadCaptureBlock,
  CtaBannerBlock,
  HeadingBlock,
  ParagraphBlock,
  QuoteBlock,
  ListBlock,
  ButtonBlock,
  DividerBlock,
  SpacerBlock,
};

// Category configuration for the Puck component drawer.
export const secondaryLibraryCategories: Config["categories"] = {
  "🎯 Attention": { title: "Attention", components: ["HeroBlock", "AnnouncementBlock"] },
  "🤝 Trust": { title: "Trust", components: ["LogoCloudBlock", "TestimonialBlock", "StatsBlock"] },
  "💎 Value": { title: "Value", components: ["FeatureCardsBlock", "FeatureMediaBlock", "StepsBlock"] },
  "🖼️ Showcase": { title: "Showcase", components: ["CardGridBlock", "ImageBlock"] },
  "🚀 Convert": { title: "Convert", components: ["PricingBlock", "FaqBlock", "LeadCaptureBlock", "CtaBannerBlock"] },
  "✍️ Content": {
    title: "Content",
    components: ["HeadingBlock", "ParagraphBlock", "QuoteBlock", "ListBlock", "ButtonBlock", "DividerBlock", "SpacerBlock"],
  },
};
