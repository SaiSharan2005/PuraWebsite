import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold">Contact Information</h4>
          <p className="mt-4">Phone: <a href="tel:+919550156969" className="text-blue-500">+91 95501 56969</a></p>
          <p className="mt-2">Email: <a href="mailto:contact@havepura.com" className="text-blue-500">contact@havepura.com</a></p>
          <p className="mt-2">Address: H-14/A, Gona Creamlines IDA, Uppal, Hyderabad, Telangana – 500039</p>
        </div>
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold">Contact Form</h4>
          <form action="/" method="POST">
            <div className="mt-4">
              <label htmlFor="name" className="block">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
            </div>
            <div className="mt-4">
              <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
