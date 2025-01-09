import React from 'react';

const Contact = () => {
  return (
    <div className="bg-orange-100">
      {/* Hero Section */}
      <div className="bg-orange-100 text-gray-900 py-20 px-8 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 hover:scale-110 transition-transform duration-300">
          Contact Us
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          We’d love to hear from you! Reach out to us by filling out the form below.
        </p>
      </div>

      {/* Contact Form Section */}
      <section className="py-12 px-8 bg-orange-100 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fadeIn">
            Get in Touch
          </h2>
          <div className="max-w-xl mx-auto">
            <form
              action="https://formspree.io/f/xnnqlyro"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2"
                  placeholder="Write your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-12 px-8 bg-orange-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fadeIn">
            Contact Information
          </h2>
          <div className="text-center space-y-4">
            <p className="text-lg">📍 Bhopal, Madhya Pradesh, India</p>
            <p className="text-lg">📧 Email: admin@gmail.com</p>
            <p className="text-lg">📞 Phone: +91 8872241006</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-8 bg-orange-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fadeIn">
            Locate Us
          </h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7057834828365!2d77.39417981491473!3d22.719568685108396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425fb7fbee89%3A0xabcd1234abcd1234!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
