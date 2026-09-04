import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  GraduationCap, Lightbulb, Sparkles,
  Award, ShieldCheck, Headphones, Building2,
  ShoppingBag, Code2, Network, ShoppingCart, Terminal,
} from 'lucide-react';
import {
  philosophyItems, features, services,
} from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const philosophyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Lightbulb, Sparkles,
};

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, ShieldCheck, Headphones, Building2,
};

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag, Code2, Network, ShoppingCart, Terminal, Headphones,
};

export default function About() {
  const { ref: ref1, isVisible: vis1 } = useReveal();
  const { ref: ref2, isVisible: vis2 } = useReveal();
  const { ref: ref3, isVisible: vis3 } = useReveal();
  const { ref: ref4, isVisible: vis4 } = useReveal();

  return (
    <div className="pt-14">
      {/* Hero header */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">About Us</span>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-700">
            Experience the iMagine Difference
          </h1>
          <p className="mt-5 text-lg text-charcoal-400 font-light max-w-2xl mx-auto">
            We're more than a retail store. We combine physical stores and online platforms with
            application development, IT consultancy, e-commerce, software development, and customer support.
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 sm:py-28 bg-charcoal-50">
        <div
          ref={ref1}
          className={`max-w-7xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
            vis1 ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Our Philosophy</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-700">
              Educate. Innovate. Entertain.
            </h2>
            <p className="mt-3 text-charcoal-400 font-light max-w-2xl mx-auto">
              Our approach combines retail with application development, IT consultancy, e-commerce,
              software development, and customer support — delivering solutions through both physical
              stores and online platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyItems.map((item, i) => {
              const Icon = philosophyIcons[item.icon] ?? Sparkles;
              return (
                <div
                  key={item.id}
                  className={`p-8 rounded-3xl bg-white border border-charcoal-50 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 reveal transition-all duration-700 ${
                    vis1 ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-charcoal-700">{item.word}</h3>
                  <p className="mt-2 text-charcoal-400 font-light leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why iMagine */}
      <section className="py-20 sm:py-28 bg-white">
        <div
          ref={ref2}
          className={`max-w-7xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
            vis2 ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Why iMagine</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-700">
              A Decade of Trust
            </h2>
            <p className="mt-3 text-charcoal-400 font-light max-w-2xl mx-auto">
              With 8+ years in the South African tech retail market, we combine a bricks-and-mortar presence
              with a powerful online model. Our network of application developers, IT consultants, and
              e-commerce experts delivers tailored solutions for professionals, educators, businesses,
              and individuals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = featureIcons[feature.icon] ?? Award;
              return (
                <div
                  key={feature.id}
                  className={`group p-8 rounded-3xl bg-charcoal-50 hover:bg-white border border-transparent hover:border-orange-100 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 reveal transition-all duration-700 ${
                    vis2 ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
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
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 sm:py-28 bg-charcoal-50">
        <div
          ref={ref3}
          className={`max-w-7xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
            vis3 ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">What We Offer</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-700">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon] ?? ShoppingBag;
              return (
                <div
                  key={service.id}
                  className={`group p-8 rounded-3xl bg-white border border-charcoal-50 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 reveal transition-all duration-700 ${
                    vis3 ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-500">
                    <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-charcoal-700 tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-400 font-light leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-24 sm:py-32 bg-white">
        <div
          ref={ref4}
          className={`max-w-4xl mx-auto px-5 sm:px-8 text-center reveal transition-all duration-700 ${
            vis4 ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-700 text-balance">
            Technology as an enabler of growth, productivity, and inspiration.
          </h2>
          <p className="mt-6 text-lg text-charcoal-400 font-light max-w-2xl mx-auto">
            Whether you're a professional, educator, business, or individual — we're here to help you
            imagine more. Experience the iMagine difference.
          </p>
          <Link
            to="/quote"
            className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-7 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
