import { Link } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import cld from '../utils/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';

const events = [
  {
    id: 1,
    title: "Swahili Art Festival",
    description: "Join us for a celebration of Swahili art and culture on November 15th.",
    image: 'cultural',
    details: {
      date: "November 15, 2023",
      location: "Mombasa, Kenya",
      description: "A vibrant festival showcasing the rich cultural heritage of the Swahili people through art, music, and dance.",
      images: [
        'swahili-art-1',
        'swahili-art-2',
        'swahili-art-3',
      ],
    },
  },
  {
    id: 2,
    title: "Tech Bootcamp",
    description: "A 3-day intensive training on web development and AI, starting December 1st.",
    image: 'tech-bootcamp', 
    details: {
      date: "December 1-3, 2023",
      location: "Nairobi, Kenya",
      description: "An immersive bootcamp designed to equip participants with cutting-edge skills in web development and artificial intelligence.",
      images: [
        'tech-bootcamp-1',
        'tech-bootcamp-2',
        'tech-bootcamp-3',
      ],
    },
  },
  {
    id: 3,
    title: "Entrepreneurship Workshop",
    description: "Learn how to start and grow your business on January 10th.",
    image: 'entrepreneurship-workshop', 
    details: {
      date: "January 10, 2024",
      location: "Kisumu, Kenya",
      description: "A hands-on workshop for aspiring entrepreneurs, covering business planning, marketing, and funding strategies.",
      images: [
        'entrepreneurship-1', 
        'entrepreneurship-2',
        'entrepreneurship-3',
      ],
    },
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const eventImage = cld.image(event.image).resize(fill().width(400).height(300)); // Resize image
            return (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg">
                <AdvancedImage cldImg={eventImage} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Link
                  to={`/event/${event.id}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}