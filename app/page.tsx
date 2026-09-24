import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AdvisorySection from "@/components/AdvisorySection";
import TeamSection from "@/components/TeamSection";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import CustomerConversionCTA from "@/components/CustomerConversionCTA";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#24527A] flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Statistics Strip */}
      <Stats />

      {/* About Firm Section */}
      <AboutSection />

      {/* Enhanced Core Services (GST & Indirect Tax, Direct Tax) */}
      <ServicesSection />

      {/* Why Choose Us (4 Core Pillars) */}
      <WhyChooseUs />

      {/* Business Advisory Deep-Dive */}
      <AdvisorySection />

      {/* Senior Leadership & Team Section */}
      <TeamSection />

      {/* Dark Cinematic Leadership Video Section */}
      <VideoSection />

      {/* Client Endorsements / Testimonials Carousel */}
      <Testimonials />

      {/* High-Conversion Mid-Page CTA */}
      <CustomerConversionCTA />

      {/* Contact Us Section with Form */}
      <ContactSection />

      {/* Physical Practice Locations & Map Block */}
      <LocationSection />

      {/* Final Conversion CTA */}
      <FinalCTA />

      {/* Premium Footer */}
      <Footer />
    </main>
  );
}
