import Hero3D from '@/components/Hero3D';
import PhilosophyStrip from '@/components/PhilosophyStrip';
import TrustStrip from '@/components/TrustStrip';
import FeaturedDevices from '@/components/FeaturedDevices';
import WhyUsPreview from '@/components/WhyUsPreview';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABanner from '@/components/CTABanner';

export default function Home() {
  return (
    <>
      <Hero3D />
      <PhilosophyStrip />
      <TrustStrip />
      <FeaturedDevices />
      <WhyUsPreview />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
