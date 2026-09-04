import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Headphones, Building2, ArrowRight } from 'lucide-react';
import { features } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  ShieldCheck,
  Headphones,
  Building2,
};

export default function WhyUsPreview() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
          isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Why Choose Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-700">
            Why iMagine
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Award;
            return (
              <div
                key={feature.id}
                className={`group p-8 rounded-3xl bg-charcoal-50 hover:bg-white border border-transparent hover:border-orange-100 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 reveal transition-all duration-700 ${
                  isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-500">
                  <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-charcoal-700 tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm text-charcoal-400 font-light leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-charcoal-500 hover:text-orange-500 font-medium text-sm transition-colors duration-200"
          >
            Learn More About Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
