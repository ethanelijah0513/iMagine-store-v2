import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredDevices } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function FeaturedDevices() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-24 sm:py-32 bg-charcoal-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
          isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Featured</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-700">
            Discover Our Devices
          </h2>
          <p className="mt-3 text-charcoal-400 font-light max-w-xl mx-auto">
            Explore the latest from Apple and beyond. Enquire for pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDevices.map((device, i) => (
            <div
              key={device.id}
              className={`group rounded-3xl overflow-hidden bg-white border border-charcoal-50 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 reveal transition-all duration-700 ${
                isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-b from-charcoal-50 to-white p-6">
                <img
                  src={device.image}
                  alt={device.alt}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-charcoal-700 tracking-tight">{device.name}</h3>
                <p className="mt-1 text-sm text-charcoal-400 font-light">{device.spec}</p>
                <Link
                  to="/quote"
                  state={{ product: device.name }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-200"
                >
                  Enquire
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/devices"
            className="inline-flex items-center gap-2 text-charcoal-500 hover:text-orange-500 font-medium text-sm transition-colors duration-200"
          >
            View All Devices
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
