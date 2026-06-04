import type { Config } from "@puckeditor/core";

// Export all components
export { HeroBlock } from "./hero";
export { TestimonialBlock } from "./testimonial";
export { MapBlock } from "./map";
export { TestBlock } from "./test";
export { SecondTestBlock } from "./second-test";

// Export category configuration for this library
export const secondaryLibraryCategories: Config["categories"] = {
  "Hero & Marketing": {
    components: ["HeroBlock", "TestimonialBlock"],
  },
  "Interactive": {
    components: ["MapBlock"],
  },
  "Testing": {
    components: ["TestBlock", "SecondTestBlock"],
  },
};
