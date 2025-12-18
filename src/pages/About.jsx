import Navbar from "../components/Navbar";

export default function About() {

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Wrapper */}
      <div className="relative">
        
        {/* Hero Section with Background Image */}
        <section className="relative py-32 px-4 bg-cover bg-center h-[85vh] bg-no-repeat" style={{backgroundImage: 'url(/aboutUs.jpg)'}}>
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-7xl pt-32 mx-auto">
            <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight font-poppins">
                About Raya
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed opacity-90">
                Discover our story and mission in holistic wellness through authentic Ayurvedic practices
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <div className="bg-white/70 fade-in">
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Mission Section */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 mb-8 slide-up">
                <h2 className="text-3xl font-bold text-[#5E17EB] mb-6 text-center">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At RAYA, we are dedicated to providing authentic Ayurvedic healing experiences that restore balance to mind, body, and soul. 
                  Our mission is to bridge ancient wisdom with modern wellness practices, creating transformative retreats that inspire lasting health and well-being.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe in the power of nature&apos;s healing properties and the importance of personalized care in achieving optimal health. 
                  Every guest receives individualized attention and treatments tailored to their unique constitution and wellness goals.
                </p>
              </div>

              {/* Story Section */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 mb-8 slide-up">
                <h2 className="text-3xl font-bold text-[#5E17EB] mb-6 text-center">Our Story</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Founded in 2010, RAYA began as a small family-owned retreat in the heart of nature. 
                      What started as a passion project has grown into a network of world-class Ayurvedic resorts 
                      spanning multiple continents.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our journey has been guided by the ancient principles of Ayurveda, combined with 
                      modern understanding of wellness and hospitality. We&apos;ve helped thousands of guests 
                      find their path to health and harmony.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src="/bg1.jpeg"
                      alt="RAYA Resort"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Values Section */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 mb-8 slide-up">
                <h2 className="text-3xl font-bold text-[#5E17EB] mb-6 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#EAE9E3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <h3 className="font-semibold text-[#5E17EB] mb-2">Authenticity</h3>
                    <p className="text-gray-700 text-sm">We stay true to traditional Ayurvedic principles while adapting to modern needs.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#EAE9E3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h3 className="font-semibold text-[#5E17EB] mb-2">Compassion</h3>
                    <p className="text-gray-700 text-sm">Every guest is treated with care, respect, and personalized attention.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#EAE9E3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h3 className="font-semibold text-[#5E17EB] mb-2">Sustainability</h3>
                    <p className="text-gray-700 text-sm">We are committed to environmental responsibility and sustainable practices.</p>
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 slide-up">
                <h2 className="text-3xl font-bold text-[#5E17EB] mb-6 text-center">Our Team</h2>
                <p className="text-gray-700 text-center mb-8">
                  Our team consists of certified Ayurvedic practitioners, wellness experts, and hospitality professionals 
                  dedicated to providing exceptional care and experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-[#5E17EB] mb-2">Dr. Priya Sharma</h3>
                    <p className="text-gray-600 text-sm mb-2">Chief Ayurvedic Physician</p>
                    <p className="text-gray-700 text-sm">20+ years of experience in traditional Ayurvedic medicine</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-[#5E17EB] mb-2">Michael Chen</h3>
                    <p className="text-gray-600 text-sm mb-2">Wellness Director</p>
                    <p className="text-gray-700 text-sm">Expert in holistic wellness and guest experience</p>
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

