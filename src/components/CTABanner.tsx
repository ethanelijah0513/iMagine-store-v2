import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function CTABanner() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
          isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 p-10 sm:p-16 text-center">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-[50px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
              Ready to find your next device?
            </h2>
            <p className="mt-4 text-lg text-white/80 font-light max-w-xl mx-auto">
              Get a personalised quote within 24 hours. No payment required.
            </p>
            <Link
              to="/quote"
              className="mt-8 inline-flex items-center gap-2 bg-white text-orange-600 font-medium px-7 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-charcoal-50"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
