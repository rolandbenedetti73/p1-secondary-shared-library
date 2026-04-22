import { ComponentConfig } from "@puckeditor/core";

export const HeroBlock: ComponentConfig = {
  fields: {
    title: {
      type: "text",
    },
    subtitle: {
      type: "textarea",
    },
    imageUrl: {
      type: "text",
    },
    ctaText: {
      type: "text",
    },
    ctaLink: {
      type: "text",
    },
  },
  defaultProps: {
    title: "Transform Your Business",
    subtitle: "Innovative solutions for modern challenges. We help companies scale with cutting-edge technology.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    ctaText: "Get Started",
    ctaLink: "#",
  },
  render: ({ title, subtitle, imageUrl, ctaText, ctaLink }) => {
    return (
      <div className="relative bg-gradient-to-br from-p1-primary to-p1-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-p1-xl py-24">
          <div className="grid gap-p1-xl md:grid-cols-2 items-center">
            <div className="space-y-p1-lg text-white">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight drop-shadow-lg">
                {title}
              </h1>
              <p className="text-xl font-medium opacity-90 leading-relaxed">
                {subtitle}
              </p>
              <div className="pt-p1-md flex gap-p1-sm">
                <a
                  href={ctaLink}
                  className="inline-block px-p1-xl py-p1-md bg-white text-p1-primary font-bold rounded-p1-lg hover:scale-105 transform transition-all shadow-xl"
                >
                  {ctaText} →
                </a>
                <a
                  href="#learn"
                  className="inline-block px-p1-xl py-p1-md border-2 border-white text-white font-bold rounded-p1-lg hover:bg-white hover:text-p1-primary transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-p1-warning to-p1-error opacity-30 blur-xl rounded-p1-lg"></div>
              <img
                src={imageUrl}
                alt={title}
                className="relative w-full h-auto object-cover rounded-p1-lg shadow-2xl transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-p1-warning opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-p1-error opacity-10 rounded-full blur-3xl"></div>
      </div>
    );
  },
};
