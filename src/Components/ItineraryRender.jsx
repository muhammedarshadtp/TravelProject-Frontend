import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ItineraryRenderer = ({ responseData }) => {
  if (!responseData) {
    return (
      <div className="flex items-center justify-center h-full text-lg text-gray-500">
        No itinerary available.
      </div>
    );
  }

  const { rendered_output, augmented } = responseData;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Render the main itinerary markdown */}
      <div className="prose lg:prose-xl mb-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {rendered_output}
        </ReactMarkdown>
      </div>

      {/* Render augmented items if available */}
      {augmented && augmented.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Related Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {augmented.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={item.image_url}
                  alt={item.keyword}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.keyword}</h3>
                  <a
                    href={item.more_info_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    More Info
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryRenderer;
