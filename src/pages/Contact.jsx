import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo - no backend connected)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--raya-banana)] to-[var(--raya-jungle)]">
      <div className="relative">
        <Navbar />
        <section className="relative py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--raya-vanilla)]">
                    <path d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 L20 4 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M14 18 L20 22 L26 18" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M10 16 L30 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-[var(--raya-soft-gold)] rounded-full opacity-60"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[var(--raya-papaya)] rounded-full opacity-60"></div>
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-serif font-bold text-[var(--raya-vanilla)] mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-[var(--raya-vanilla)] max-w-3xl mx-auto leading-relaxed opacity-90">
                Get in touch with us for any questions or wellness inquiries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl mb-3">📞</div>
                <div className="text-[var(--raya-vanilla)] font-medium">Phone Support</div>
              </div>
              <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl mb-3">✉️</div>
                <div className="text-[var(--raya-vanilla)] font-medium">Email Response</div>
              </div>
              <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl mb-3">🌐</div>
                <div className="text-[var(--raya-vanilla)] font-medium">24/7 Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <div className="bg-white/70 fade-in">
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="bg-white/80 rounded-2xl shadow-lg p-8 slide-up">
                  <h2 className="text-3xl font-bold text-[#5E17EB] mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#EAE9E3] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#5E17EB] text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                        <p className="text-gray-700">Hviezdoslavova 81<br />903 28 Ivanka pri Dunaji<br />Slovakia</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#EAE9E3] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#5E17EB] text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-700">+421 903 244</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#EAE9E3] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#5E17EB] text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-700">rayalognlife@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#EAE9E3] rounded-full flex items-center justify-center mr-4">
                        <span className="text-[#5E17EB] text-xl">🕒</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                        <p className="text-gray-700">Monday - Sunday: 24/7</p>
                        <p className="text-gray-700">Reception: 6:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" className="w-10 h-10 bg-[#EAE9E3] rounded-full flex items-center justify-center hover:bg-[#5E17EB] hover:text-white transition-colors">
                        <span className="text-[#5E17EB]">📘</span>
                      </a>
                      <a href="https://instagram.com" className="w-10 h-10 bg-[#EAE9E3] rounded-full flex items-center justify-center hover:bg-[#5E17EB] hover:text-white transition-colors">
                        <span className="text-[#5E17EB]">📷</span>
                      </a>
                      <a href="https://twitter.com" className="w-10 h-10 bg-[#EAE9E3] rounded-full flex items-center justify-center hover:bg-[#5E17EB] hover:text-white transition-colors">
                        <span className="text-[#5E17EB]">🐦</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/80 rounded-2xl shadow-lg p-8 slide-up">
                  <h2 className="text-3xl font-bold text-[#5E17EB] mb-6">Send Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="bg-[#5E17EB] hover:bg-[#4B12BD] text-white w-full py-3 text-lg rounded-lg transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 mt-8 slide-up">
                <h2 className="text-3xl font-bold text-[#5E17EB] mb-6 text-center">Find Us</h2>
                <div className="relative h-96 rounded-lg overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

