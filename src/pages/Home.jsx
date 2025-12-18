import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import { TextAnimate } from "@/components/ui/text-animate";
import ContactPopup from "../components/ContactPopup";

export default function Home() {
  const [blur, setBlur] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only set blur from scroll if video hasn't ended yet
      if (!videoEnded) {
        setBlur(window.scrollY > window.innerHeight * 0.6);
      }
    };
    const handleVideoEnd = () => {
      setVideoEnded(true);
      setBlur(true);
    };

    const currentVideoRef = videoRef.current;
    window.addEventListener("scroll", handleScroll);
    currentVideoRef?.addEventListener("ended", handleVideoEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      currentVideoRef?.removeEventListener("ended", handleVideoEnd);
    };
  }, [videoEnded]);


  return (
    <div className="landing-theme">
      {/* Absolute Fullscreen Background Video - Only for Hero Section */}
      <div className="absolute top-[-2%] left-0 right-0 w-full h-screen overflow-hidden" style={{ marginTop: '-5%', padding: 0 }}>
        <video
          ref={videoRef}
          autoPlay
          loop={true} // Stop looping so ended event fires
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 1, objectPosition: 'center top', margin: 0, padding: 0 }}
        >
          <source src="/landing4.mp4" type="video/mp4" />
        </video>
      </div>


      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-screen h-screen z-5 bg-black/10"></div>

      {/* Blur Overlay */}
      <div className={`absolute top-0 left-0 w-screen h-screen z-10 pointer-events-none transition-all duration-2000 ease-in-out ${blur ? 'opacity-100' : 'opacity-0'}`} style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(0, 0, 0, 0.5)' }}></div>

      {/* Main Content Wrapper */}
      <div className="relative z-20">
        {/* Navigation */}
        <Navbar />
        {/* Hero */}
        <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center text-center px-4">

          {/* Cards Container - Side by Side Layout */}
          <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 lg:px-12 w-full max-w-7xl mx-auto space-y-6">
            <div className="text-white w-full space-y-2">
              <TextGenerateEffect
                words="WE DON'T TREAT,"
                className="text-white  text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight"
                style={{ fontFamily: "Sentient, serif" }}
              />
              <TextGenerateEffect
                words="WE HEAL."
                className="text-white  text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight"
                style={{ fontFamily: "Sentient, serif", fontStyle: "italic" }}
              />
            </div>

            <div className="text-white space-y-6 animate-fade-up" style={{ animationDelay: '3s' }}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/consultation" className="px-4 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition whitespace-nowrap">
                  CALL AN EXPERT
                </Link>
                <Link to="/questionnaire" className="px-4 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition whitespace-nowrap">
                  IS AYURVEDA FOR ME?
                </Link>
              </div>
            </div>
            <div>
              <p className="text-white text-base sm:text-lg text-center max-w-2xl mx-auto" style={{ fontFamily: 'poppins' }}>
                Ayurvedic healing retreats blending ancient wisdom, expert care, and modern serenity.
              </p>
            </div>
          </div>


        </section>

        {/* Introductory Paragraph Section */}
        <section className="py-12 px-4 sm:px-8 bg-[#FFFBF7]">
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-[#181818] leading-relaxed text-center" style={{ fontFamily: 'poppins' }}>
              Tucked away in the heart of nature, RAYA Longlife honors Ayurvedic wisdom & Ayurveda by pairing each guest-owned holistic retreat, authentic spiritual & wellbeing through transformative healing experiences.
            </p>
          </div>
        </section>


        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F4F4F4] relative ">
          <div className="max-w-7xl mx-auto">

            <div className="relative w-full">
              {/* Full-width Image */}
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                <img
                  src="/home1.jpg"
                  alt="Ayurvedic treatment room"
                  className="w-5xl h-full object-cover rounded-lg"
                />

                {/* White Text Overlay on Right */}
                <div className="absolute top-8 right-8 bottom-8 w-full sm:w-[400px] lg:w-[450px] bg-[#E3E3E3] backdrop-blur-sm p-6 sm:p-8 shadow-lg flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* MEDICAL-FIRST APPROACH */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#181818] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Lato' }}>
                        MEDICAL-FIRST APPROACH
                      </h3>
                      <p className="text-sm sm:text-base text-[#181818] leading-relaxed" style={{ fontFamily: 'Lato' }}>
                        all retreats are designed and supervised by Ayurvedic doctors
                      </p>
                    </div>

                    {/* PERSONALISATION */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#181818] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Lato' }}>
                        PERSONALISATION
                      </h3>
                      <p className="text-sm sm:text-base text-[#181818] leading-relaxed" style={{ fontFamily: 'Lato' }}>
                        each program is created according to the client&apos;s health condition
                      </p>
                    </div>

                    {/* VERIFIED CLINICS & THERAPISTS */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#181818] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Lato' }}>
                        VERIFIED CLINICS & THERAPISTS
                      </h3>
                      <p className="text-sm sm:text-base text-[#181818] leading-relaxed" style={{ fontFamily: 'Lato' }}>
                        we collaborate only with accredited facilities with the highest level of expertise
                      </p>
                    </div>

                    {/* END-TO-END CARE */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#181818] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Lato' }}>
                        END-TO-END CARE
                      </h3>
                      <p className="text-sm sm:text-base text-[#181818] leading-relaxed" style={{ fontFamily: 'Lato' }}>
                        from diagnostics to post-retreat guidance
                      </p>
                    </div>

                    {/* HIGH SUCCESS RATE */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#181818] mb-2 uppercase tracking-wide" style={{ fontFamily: 'Lato' }}>
                        HIGH SUCCESS RATE
                      </h3>
                      <p className="text-sm sm:text-base text-[#181818] leading-relaxed" style={{ fontFamily: 'Lato' }}>
                        our clients report significant improvements in health and vitality after just one program
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nourish Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header with Logo */}
            <div className="text-center mb-12 sm:mb-16">
              {/* Blue line at top */}
              {/* <div className="w-full h-0.5 bg-blue-600 mb-8 sm:mb-12"></div> */}

              {/* RAYA WELLBEING */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#181818] uppercase mb-2" style={{ fontFamily: 'Sentient, serif' }}>
                RAYA WELLBEING
              </h1>

              {/* Retreats */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5E17EB] font-normal" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                Retreats
              </h2>
            </div>

            {/* Retreat Programs Grid */}
            <div className="relative mb-24 sm:mb-24">
              {/* Vertical separator line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-10 w-px bg-gray-900 transform -translate-x-1/2"></div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
                {/* Card 1: Ayurvedic Healing Retreat (Signature) */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <img
                      src="/meds.png"
                      alt="Ayurvedic Healing Retreat"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818]  mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Ayurvedic Healing Retreat (Signature)
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    A comprehensive therapeutic program for regeneration, detoxification, and restoring balance in both body and mind.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>

                {/* Card 2: Panchakarma Cleanse */}
                <div className="flex flex-col">
                  <div className="mb-4 mt-[60px]">
                    <img
                      src="/panchakarma.jpg"
                      alt="Panchakarma Cleanse"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818]  mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Panchakarma Cleanse
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    A deep medical detox supervised by a doctor to reset the nervous system, hormonal balance, and overall health.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>

                {/* Card 3: Stress & Burnout Recovery */}
                <div className="flex flex-col">
                  <div className="mb-4 mt-[100px]">
                    <img
                      src="/stress.png"
                      alt="Stress & Burnout Recovery"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818]  mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Stress & Burnout Recovery
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    A program focused on exhaustion, insomnia, anxiety, and long-term mental strain.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>

                {/* Card 4: Digestive & Gut Health Programme */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <img
                      src="/digestive.png"
                      alt="Digestive & Gut Health Programme"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818] mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Digestive & Gut Health Programme
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    Therapy targeting digestive issues, intolerances, inflammation, and metabolic problems.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
                {/* Card 1: Ayurvedic Healing Retreat (Signature) */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <img
                      src="/meds.png"
                      alt="Ayurvedic Healing Retreat"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818]  mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Ayurvedic Healing Retreat (Signature)
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    A comprehensive therapeutic program for regeneration, detoxification, and restoring balance in both body and mind.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>

                {/* Card 2: Panchakarma Cleanse */}
                <div className="flex flex-col">
                  <div className="mb-4 mt-[60px]">
                    <img
                      src="/panchakarma.jpg"
                      alt="Panchakarma Cleanse"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818]  mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Panchakarma Cleanse
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    A deep medical detox supervised by a doctor to reset the nervous system, hormonal balance, and overall health.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>

                {/* Card 3: Stress & Burnout Recovery */}
                <div className="flex flex-col">
                  <div className="mb-4 mt-[100px]">
                    <img
                      src="/stress.png"
                      alt="Stress & Burnout Recovery"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818]  mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Stress & Burnout Recovery
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    A program focused on exhaustion, insomnia, anxiety, and long-term mental strain.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>

                {/* Card 4: Digestive & Gut Health Programme */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <img
                      src="/digestive.png"
                      alt="Digestive & Gut Health Programme"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl text-[#181818] mb-3" style={{ fontFamily: 'Sentient, serif', fontStyle: 'italic' }}>
                    Digestive & Gut Health Programme
                  </h3>
                  <p className="text-sm text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    Therapy targeting digestive issues, intolerances, inflammation, and metabolic problems.
                  </p>
                  <Link to="/treatments" className="text-[#5E17EB] hover:underline inline-block uppercase" style={{ fontFamily: 'Lato', fontWeight: '500', fontStyle: 'normal', fontSize: '14px', lineHeight: '100%', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    VIEW RETREAT →
                  </Link>
                </div>
              </div>

              {/* Discover All Retreats Button */}
              <div className="text-center mt-24 sm:mt-32">
                <Link to="/treatments" className="text-[#5E17EB]  text-lg hover:underline inline-block" style={{ fontFamily: 'poppins' }}>
                  DISCOVER ALL RETREATS →
                </Link>
              </div>
            </div>

            <div className="mb-6">

              <div>
                
              </div>
              {/* <p className="text-sm sm:text-base text-[#5E17EB] uppercase tracking-wider mb-2" style={{ fontFamily: 'poppins' }}>WHAT WE OFFER IN</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#181818] font-serif mb-4" style={{ fontFamily: 'Sentient Bold, serif' }}>Nourish</h2>
              <p className="text-base sm:text-lg text-[#181818] max-w-2xl leading-relaxed" style={{ fontFamily: 'poppins' }}>
                Restore your body with fresh, local and natural produce, nutritious cuisine, ingredients, and a diet to gently detoxify, balance, and rejuvenate.
              </p> */}
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Enrich Text Box */}
              <div className="lg:w-1/2 bg-[#EAE9E3] p-8 sm:p-12 rounded-lg">
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#181818] font-serif mb-4" style={{ fontFamily: 'Sentient Bold, serif' }}>Enrich</h3>
                <p className="text-base sm:text-lg text-[#181818] mb-6 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                  Discover how our carefully curated nutrition programs can transform your health and vitality through the power of Ayurvedic principles.
                </p>
                <Link to="/treatments" className="text-[#5E17EB] font-semibold hover:underline" style={{ fontFamily: 'poppins' }}>
                  Read More →
                </Link>
              </div>
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src="/bg1.jpeg"
                  alt="Natural ingredients and produce"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Awaken Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <p className="text-sm sm:text-base text-[#5E17EB] uppercase tracking-wider mb-2" style={{ fontFamily: 'poppins' }}>UNDERSTAND THE JOURNEY OF BEING</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#181818] font-serif mb-4" style={{ fontFamily: 'Sentient Bold, serif' }}>Awaken</h2>
              <p className="text-base sm:text-lg text-[#181818] max-w-2xl leading-relaxed" style={{ fontFamily: 'poppins' }}>
                Realign yourself to your inner desires and aspirations. Reconnect to your body, mind and soul.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                <img
                  src="/ayurveda2.jpg"
                  alt="Person diving into water"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              {/* Balance Text Box */}
              <div className="lg:w-1/2 bg-[#EAE9E3] p-8 sm:p-12 rounded-lg order-1 lg:order-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#181818] font-serif mb-4" style={{ fontFamily: 'Sentient Bold, serif' }}>Balance</h3>
                <p className="text-base sm:text-lg text-[#181818] mb-6 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                  Experience the transformative power of aligning your physical, mental, and spiritual well-being through ancient Ayurvedic practices.
                </p>
                <Link to="/treatments" className="text-[#5E17EB] font-semibold hover:underline" style={{ fontFamily: 'poppins' }}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Healing Retreats DESIGNED FOR YOU Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Side - Heading */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#181818] font-serif mb-4" style={{ fontFamily: 'Sentient Bold, serif' }}>Healing Retreats</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5E17EB] font-semibold mb-8" style={{ fontFamily: 'poppins' }}>DESIGNED FOR YOU</h3>
              </div>
              {/* Right Side - Two Columns of Text */}
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-base sm:text-lg text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    Each retreat is carefully curated to address your unique health needs, combining traditional Ayurvedic wisdom with modern wellness practices.
                  </p>
                  <p className="text-base sm:text-lg text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    Our expert team works closely with you to create a personalized healing journey that aligns with your goals and lifestyle.
                  </p>
                </div>
                <div>
                  <p className="text-base sm:text-lg text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    From initial consultation to post-retreat support, we ensure every aspect of your experience is tailored to your individual needs.
                  </p>
                  <p className="text-base sm:text-lg text-[#181818] mb-6 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                    Discover how our holistic approach can transform your health and restore balance to your body, mind, and spirit.
                  </p>
                  <Link to="/individual-stays" className="text-[#5E17EB] font-semibold hover:underline" style={{ fontFamily: 'poppins' }}>
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE MEDICINE Meets Wellness Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#181818] font-serif mb-2" style={{ fontFamily: 'Sentient Bold, serif' }}>WHERE MEDICINE</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl text-[#181818] font-semibold" style={{ fontFamily: 'poppins' }}>Meets Wellness</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Medical Experts */}
              <div>
                <div className="mb-4">
                  <img
                    src="/bg1.jpeg"
                    alt="Medical Experts"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-xl sm:text-2xl text-[#181818] font-semibold mb-3" style={{ fontFamily: 'poppins' }}>Medical Experts</h4>
                <p className="text-base text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                  Our team of certified Ayurvedic doctors brings decades of experience in traditional healing practices combined with modern medical knowledge.
                </p>
                <Link to="/consultation" className="text-[#5E17EB] font-semibold hover:underline" style={{ fontFamily: 'poppins' }}>
                  Read More →
                </Link>
              </div>

              {/* Personalized Protocols */}
              <div>
                <div className="mb-4">
                  <img
                    src="/medicine.jpg"
                    alt="Personalized Protocols"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-xl sm:text-2xl text-[#181818] font-semibold mb-3" style={{ fontFamily: 'poppins' }}>Personalized Protocols</h4>
                <p className="text-base text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                  Every treatment plan is uniquely designed for you, taking into account your dosha, health history, and personal wellness goals.
                </p>
                <Link to="/treatments" className="text-[#5E17EB] font-semibold hover:underline" style={{ fontFamily: 'poppins' }}>
                  Read More →
                </Link>
              </div>

              {/* Bespoke Nutrition */}
              <div>
                <div className="mb-4">
                  <img
                    src="/cumin.jpg"
                    alt="Bespoke Nutrition"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-xl sm:text-2xl text-[#181818] font-semibold mb-3" style={{ fontFamily: 'poppins' }}>Bespoke Nutrition</h4>
                <p className="text-base text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                  Our nutritionists create custom meal plans using fresh, local ingredients that support your healing journey and restore digestive balance.
                </p>
                <Link to="/treatments" className="text-[#5E17EB] font-semibold hover:underline" style={{ fontFamily: 'poppins' }}>
                  Read More →
                </Link>
              </div>

              {/* Continuous Care */}
              <div>
                <div className="mb-4">
                  <img
                    src="/ayurveda3.jpg"
                    alt="Continuous Care"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-xl sm:text-2xl text-[#181818] font-semibold mb-3" style={{ fontFamily: 'poppins' }}>Continuous Care</h4>
                <p className="text-base text-[#181818] mb-4 leading-relaxed" style={{ fontFamily: 'poppins' }}>
                  Your healing journey continues beyond the retreat with ongoing support, follow-up consultations, and personalized guidance for lasting wellness.
                </p>
                <Link to="/consultation" className="text-[#5E17EB] font-semibold hover:underline" style={{ fontFamily: 'poppins' }}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Hide scrollbar for slider */}
      <style>{`

         @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
          opacity: 0;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}</style>

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Floating Contact Button */}
      <button
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-8 right-8 bg-[#5E17EB] hover:bg-[#4B12BD] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center gap-2 group"
        aria-label="Open contact form"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden sm:inline-block font-medium" style={{ fontFamily: 'poppins' }}>Contact</span>
      </button>

    </div>
  );
}

