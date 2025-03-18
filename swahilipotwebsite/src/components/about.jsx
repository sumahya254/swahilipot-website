import image8 from '../assets/community.jpg';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Swahili Pot Hub</h2>

        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
            <img src={image8} alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
          <p className="text-gray-700 text-lg">
            To empower the Swahili community by fostering creativity, innovation, and cultural preservation, creating a vibrant ecosystem where art, technology, and entrepreneurship thrive.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg">
            Swahili Pot Hub is dedicated to nurturing talent, preserving cultural heritage, and driving innovation by providing resources, training, and opportunities for artists, tech enthusiasts, and entrepreneurs within the Swahili community.
          </p>
        </div>

        {/* Goals Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Goals</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Host annual Swahili art and culture festivals.</li>
            <li>Train 1,000 young people in tech skills by 2025.</li>
            <li>Support 50 tech-based startups through an incubator program.</li>
            <li>Provide business training to 500 entrepreneurs annually.</li>
            <li>Establish a digital archive of Swahili cultural artifacts.</li>
          </ul>
        </div>

        {/* Core Values Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Creativity</h4>
              <p className="text-gray-700">We celebrate and nurture artistic expression and innovation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Inclusivity</h4>
              <p className="text-gray-700">We are committed to empowering all members of the Swahili community, regardless of background or gender.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Sustainability</h4>
              <p className="text-gray-700">We aim to create long-term, sustainable impact through our programs and initiatives.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Collaboration</h4>
              <p className="text-gray-700">We believe in the power of partnerships and community-driven solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-2">Cultural Pride</h4>
              <p className="text-gray-700">We honor and preserve the rich heritage of the Swahili people.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}