import type { Config } from "@puckeditor/core";

// ── Global chrome ──────────────────────────────────────────
import { HeaderBlock } from "./header";
import { FooterBlock } from "./footer";
// ── Attention ──────────────────────────────────────────────
import { HeroBlock } from "./hero";
import { AnnouncementBlock } from "./announcement";
// ── Trust ──────────────────────────────────────────────────
import { LogoCloudBlock } from "./logos";
import { TestimonialBlock } from "./testimonial";
import { StatsBlock } from "./stats";
import { TeamGridBlock } from "./team-grid";
// ── Value ──────────────────────────────────────────────────
import { FeatureCardsBlock } from "./features";
import { FeatureMediaBlock } from "./feature-media";
import { StepsBlock } from "./steps";
import { TimelineBlock } from "./timeline";
// ── Showcase ───────────────────────────────────────────────
import { CardGridBlock } from "./card-grid";
import { ImageBlock } from "./image";
import { GalleryBlock } from "./gallery";
// ── Convert ────────────────────────────────────────────────
import { PricingBlock } from "./pricing";
import { FaqBlock } from "./faq";
import { LeadCaptureBlock } from "./lead-capture";
import { CtaBannerBlock } from "./cta";
import { ComparisonTableBlock } from "./comparison-table";
// ── Editorial ──────────────────────────────────────────────
import { ArticleHeaderBlock } from "./article-header";
import { RichTextBlock } from "./rich-text";
import { FigureBlock } from "./figure";
import { PullQuoteBlock } from "./pull-quote";
import { EmbedBlock } from "./embed";
import { CalloutBlock } from "./callout";
// ── Layout ─────────────────────────────────────────────────
import { ColumnsBlock } from "./columns";
import { ContainerBlock } from "./container";
import { TabsBlock } from "./tabs";
import { AccordionBlock } from "./accordion";
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
  // Global
  HeaderBlock,
  FooterBlock,
  // Attention
  HeroBlock,
  AnnouncementBlock,
  // Trust
  LogoCloudBlock,
  TestimonialBlock,
  StatsBlock,
  TeamGridBlock,
  // Value
  FeatureCardsBlock,
  FeatureMediaBlock,
  StepsBlock,
  TimelineBlock,
  // Showcase
  CardGridBlock,
  ImageBlock,
  GalleryBlock,
  // Convert
  PricingBlock,
  FaqBlock,
  LeadCaptureBlock,
  CtaBannerBlock,
  ComparisonTableBlock,
  // Editorial
  ArticleHeaderBlock,
  RichTextBlock,
  FigureBlock,
  PullQuoteBlock,
  EmbedBlock,
  CalloutBlock,
  // Layout
  ColumnsBlock,
  ContainerBlock,
  TabsBlock,
  AccordionBlock,
  // Content
  HeadingBlock,
  ParagraphBlock,
  QuoteBlock,
  ListBlock,
  ButtonBlock,
  DividerBlock,
  SpacerBlock,
};

// Convenience map of the full block library — pass to Puck's `components`.
export const marketingBlocks = {
  HeaderBlock,
  FooterBlock,
  HeroBlock,
  AnnouncementBlock,
  LogoCloudBlock,
  TestimonialBlock,
  StatsBlock,
  TeamGridBlock,
  FeatureCardsBlock,
  FeatureMediaBlock,
  StepsBlock,
  TimelineBlock,
  CardGridBlock,
  ImageBlock,
  GalleryBlock,
  PricingBlock,
  FaqBlock,
  LeadCaptureBlock,
  CtaBannerBlock,
  ComparisonTableBlock,
  ArticleHeaderBlock,
  RichTextBlock,
  FigureBlock,
  PullQuoteBlock,
  EmbedBlock,
  CalloutBlock,
  ColumnsBlock,
  ContainerBlock,
  TabsBlock,
  AccordionBlock,
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
  "🌐 Global": { title: "Global", components: ["HeaderBlock", "FooterBlock"] },
  "🎯 Attention": { title: "Attention", components: ["HeroBlock", "AnnouncementBlock"] },
  "🤝 Trust": { title: "Trust", components: ["LogoCloudBlock", "TestimonialBlock", "StatsBlock", "TeamGridBlock"] },
  "💎 Value": { title: "Value", components: ["FeatureCardsBlock", "FeatureMediaBlock", "StepsBlock", "TimelineBlock"] },
  "🖼️ Showcase": { title: "Showcase", components: ["CardGridBlock", "ImageBlock", "GalleryBlock"] },
  "🚀 Convert": {
    title: "Convert",
    components: ["PricingBlock", "FaqBlock", "LeadCaptureBlock", "CtaBannerBlock", "ComparisonTableBlock"],
  },
  "📰 Editorial": {
    title: "Editorial",
    components: ["ArticleHeaderBlock", "RichTextBlock", "FigureBlock", "PullQuoteBlock", "EmbedBlock", "CalloutBlock"],
  },
  "🧱 Layout": {
    title: "Layout",
    components: ["ColumnsBlock", "ContainerBlock", "TabsBlock", "AccordionBlock"],
  },
  "✍️ Content": {
    title: "Content",
    components: ["HeadingBlock", "ParagraphBlock", "QuoteBlock", "ListBlock", "ButtonBlock", "DividerBlock", "SpacerBlock"],
  },
};
