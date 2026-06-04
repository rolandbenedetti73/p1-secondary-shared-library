import type { Config } from "@puckeditor/core";

// Export all components
export { HeroBlock } from "./hero";
export { TestimonialBlock } from "./testimonial";
export { MapBlock } from "./map";
export { TestBlock } from "./test";
export { SecondTestBlock } from "./second-test";

// Export category configuration for this library
// These categories will appear in the Puck component drawer
export const secondaryLibraryCategories: Config["categories"] = {
  "🎯 Marketing": {
    components: ["HeroBlock"],
    title: "Marketing",
  },
  "💬 Social Proof": {
    components: ["TestimonialBlock"],
    title: "Social Proof",
  },
  "🗺️ Location": {
    components: ["MapBlock"],
    title: "Location",
  },
  "🧪 Development": {
    components: ["TestBlock", "SecondTestBlock"],
    title: "Development",
  },
};
