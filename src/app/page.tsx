import HeroSection from "@/components/ui/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HowItWorks from "@/components/features/HowItWorks";
import Testimonials from "@/components/features/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-primary-light transition-colors">
              Download Now
            </button>
            <button className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-light transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
