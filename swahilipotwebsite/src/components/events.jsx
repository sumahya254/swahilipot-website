export default function Events() {
  return (
    <section id="events" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Swahili Art Festival</h3>
            <p className="text-gray-700">Join us for a celebration of Swahili art and culture on November 15th.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Tech Bootcamp</h3>
            <p className="text-gray-700">A 3-day intensive training on web development and AI, starting December 1st.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Entrepreneurship Workshop</h3>
            <p className="text-gray-700">Learn how to start and grow your business on March 10th.</p>
          </div>
        </div>
      </div>
    </section>
  );
}