import { ComponentConfig } from "@puckeditor/core";

export const MapBlock: ComponentConfig = {
  fields: {
    address: {
      type: "text",
    },
    latitude: {
      type: "text",
    },
    longitude: {
      type: "text",
    },
    height: {
      type: "select",
      options: [
        { label: "Small (300px)", value: "300" },
        { label: "Medium (400px)", value: "400" },
        { label: "Large (500px)", value: "500" },
      ],
    },
  },
  defaultProps: {
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    latitude: "37.4220",
    longitude: "-122.0841",
    height: "400",
  },
  render: ({ address, latitude, longitude, height }) => {
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    const encodedAddress = encodeURIComponent(address);
    // Create bounding box around the point (roughly 0.01 degrees = ~1km)
    const bbox = `${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}`;
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;

    return (
      <div className="bg-gradient-to-br from-p1-secondary to-black py-24 px-p1-xl">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-p1-lg">
            {/* Header section */}
            <div className="text-center space-y-p1-sm">
              <div className="inline-flex items-center gap-p1-sm px-p1-md py-p1-sm bg-p1-warning/20 border border-p1-warning/30 rounded-full">
                <svg
                  className="w-5 h-5 text-p1-warning"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  Find Us Here
                </span>
              </div>
              <h2 className="text-4xl font-black text-white">
                {address}
              </h2>
            </div>

            {/* Map container with decorative frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-p1-warning via-p1-error to-p1-primary rounded-p1-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black rounded-p1-lg overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height={height}
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={mapUrl}
                  title={`Map showing ${address}`}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-p1-sm justify-center">
              <a
                href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-p1-xs px-p1-lg py-p1-sm bg-gradient-to-r from-p1-warning to-p1-error text-white font-bold rounded-p1-md hover:scale-105 transform transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View on OpenStreetMap
              </a>
              <button className="inline-flex items-center gap-p1-xs px-p1-lg py-p1-sm border-2 border-white/20 text-white font-bold rounded-p1-md hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Location
              </button>
            </div>

            <p className="text-xs text-white/40 text-center italic">
              Powered by OpenStreetMap - Find coordinates at openstreetmap.org
            </p>
          </div>
        </div>
      </div>
    );
  },
};
