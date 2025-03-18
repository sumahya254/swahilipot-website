import { useParams } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: "Swahili Art Festival",
    description: "Join us for a celebration of Swahili art and culture on November 15th.",
    image: "https://via.placeholder.com/400",
    details: {
      date: "March 15, 2025",
      location: "Mombasa, Kenya",
      description: "A vibrant festival showcasing the rich cultural heritage of the Swahili people through art, music, and dance.",
      images: [
        "https://via.placeholder.com/600",
        "https://via.placeholder.com/600",
        "https://via.placeholder.com/600",
      ],
    },
  },
  {
    id: 2,
    title: "Tech Bootcamp",
    description: "A 3-day intensive training on web development and AI, starting December 1st.",
    image: "https://via.placeholder.com/400",
    details: {
      date: "December 1-3, 2023",
      location: "Nairobi, Kenya",
      description: "An immersive bootcamp designed to equip participants with cutting-edge skills in web development and artificial intelligence.",
      images: [
        "https://via.placeholder.com/600",
        "https://via.placeholder.com/600",
        "https://via.placeholder.com/600",
      ],
    },
  },
  {
    id: 3,
    title: "Entrepreneurship Workshop",
    description: "Learn how to start and grow your business on January 10th.",
    image: "https://via.placeholder.com/400",
    details: {
      date: "January 10, 2024",
      location: "Kisumu, Kenya",
      description: "A hands-on workshop for aspiring entrepreneurs, covering business planning, marketing, and funding strategies.",
      images: [
        "https://via.placeholder.com/600",
        "https://via.placeholder.com/600",
        "https://via.placeholder.com/600",
      ],
    },
  },
];

export default function EventDetails() {
  const { id } = useParams(); // Get the event ID from the URL
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div className="text-center py-16">Event not found.</div>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{event.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-lg mb-4" />
            <p className="text-gray-700 mb-4">{event.details.description}</p>
            <p className="text-gray-700"><strong>Date:</strong> {event.details.date}</p>
            <p className="text-gray-700"><strong>Location:</strong> {event.details.location}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Event Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.details.images.map((image, index) => (
                <img key={index} src={image} alt={`Event ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}