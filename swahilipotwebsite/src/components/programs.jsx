export default function Programs() {
  return (
    <section id="programs" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Art & Culture</h3>
            <p className="text-gray-700">Promoting Swahili art and cultural heritage through workshops and exhibitions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Tech Innovation</h3>
            <p className="text-gray-700">Supporting tech startups and innovators with training and mentorship.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Entrepreneurship</h3>
            <p className="text-gray-700">Empowering entrepreneurs with business skills and resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
}