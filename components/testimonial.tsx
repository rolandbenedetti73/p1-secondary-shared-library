import { ComponentConfig } from "@puckeditor/core";

export const TestimonialBlock: ComponentConfig = {
  fields: {
    quote: {
      type: "textarea",
    },
    authorName: {
      type: "text",
    },
    authorTitle: {
      type: "text",
    },
    authorImageUrl: {
      type: "text",
    },
  },
  defaultProps: {
    quote: "Working with this team has transformed how we approach digital solutions. Their expertise and dedication are unmatched.",
    authorName: "Sarah Chen",
    authorTitle: "CEO, TechCorp",
    authorImageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  render: ({ quote, authorName, authorTitle, authorImageUrl }) => {
    return (
      <div className="relative bg-black text-white py-24 px-p1-xl overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-p1-primary/20 to-p1-secondary/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-p1-warning/10 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-p1-primary/10 to-p1-secondary/10 backdrop-blur-sm border border-white/10 rounded-p1-lg p-p1-xl shadow-2xl">
            <div className="space-y-p1-lg">
              <div className="flex items-center gap-p1-md">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-p1-warning to-p1-error rounded-full blur"></div>
                  <img
                    src={authorImageUrl}
                    alt={authorName}
                    className="relative w-20 h-20 rounded-full object-cover border-4 border-white/20"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-p1-warning to-p1-error bg-clip-text text-transparent">
                    {authorName}
                  </div>
                  <div className="text-sm text-white/60 font-medium uppercase tracking-wider">
                    {authorTitle}
                  </div>
                </div>
              </div>

              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 h-16 w-16 text-p1-warning/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="relative text-2xl md:text-3xl font-bold leading-relaxed pl-p1-lg">
                  {quote}
                </blockquote>
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 pl-p1-lg">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-p1-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
