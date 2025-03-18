import image8 from '../assets/community.jpg';
export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Swahili Pot Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              Swahili Pot Hub is a creative space dedicated to nurturing talent, innovation, and cultural expression within the Swahili community. We provide resources, training, and opportunities for artists, entrepreneurs, and tech enthusiasts.
            </p>
            <p className="mb-4">
              Our mission is to empower creatives and innovators to transform their ideas into impactful projects that contribute to the growth of the Swahili culture and economy.
            </p>
            <a href="#programs" className="text-blue-600 font-semibold hover:underline">Learn more about our programs →</a>
          </div>
          <div className="flex justify-center">
            <img src={image8} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}