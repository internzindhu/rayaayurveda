import Navbar from "../components/Navbar";

export default function Policy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, including but not limited to your name, 
              email address, phone number, and health information necessary for providing Ayurvedic consultations and treatments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information is used to provide you with personalized Ayurvedic treatments, communicate with you about 
              your bookings, and send you updates about our services (with your consent).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to improve your experience on our website. You can choose to disable cookies through your 
              browser settings, but this may affect your ability to use certain features of our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party services for payment processing and analytics. These services have their own 
              privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also object to 
              or restrict certain types of data processing. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at rayalognlife@gmail.com
            </p>
          </section>

          <div className="pt-6 border-t">
            <p className="text-sm text-gray-500">Last updated: December 11, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

