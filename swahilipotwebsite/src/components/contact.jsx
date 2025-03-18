export default function Contact() {
    return (
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-2 border rounded-lg"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }