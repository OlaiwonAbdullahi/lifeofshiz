import React from "react";

const speakingEvents = [
  {
    id: 1,
    title: "Innovating for Tomorrow",
    event: "TEDx",
    date: "October 10, 2023",
    location: "Virtual Event",
    image: "https://placehold.co/600x400?text=TEDx",
  },
  {
    id: 2,
    title: "The Future of Social Media",
    event: "INBOUND",
    date: "September 7, 2022",
    location: "Boston, MA",
    image: "https://placehold.co/600x400?text=INBOUND",
  },
  {
    id: 3,
    title: "Building Brand Influence",
    event: "ContentCon",
    date: "June 15, 2023",
    location: "New York, NY",
    image: "https://placehold.co/600x400?text=ContentCon",
  },
  {
    id: 4,
    title: "Creator Economy 101",
    event: "VidSummit",
    date: "March 4, 2024",
    location: "Los Angeles, CA",
    image: "https://placehold.co/600x400?text=VidSummit",
  },
];

const SpeakingEngagements = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Speaking Engagements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {speakingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.event}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
              <p className="text-gray-700 mb-2">{event.event}</p>
              <p className="text-sm text-gray-500">
                {event.date} • {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakingEngagements;
