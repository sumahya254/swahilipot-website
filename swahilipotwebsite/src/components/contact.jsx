import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-2 border rounded-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-4" />
                  <p className="text-gray-700">P.O. Box 12345, Mombasa, Kenya</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-blue-600 mr-4" />
                  <p className="text-gray-700">+254 712 345 678</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-4" />
                  <p className="text-gray-700">info@swahilipothub.co.ke</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Location</h3>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7757159999997!2d39.66341531533008!3d-4.043503996682314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c3d%3A0x8a7e6b7c1a1b1b1b!2sSwahili%20Pot%20Hub!5e0!3m2!1sen!2ske!4v1631234567890!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Swahili Pot Hub Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}