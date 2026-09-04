import { useState, useRef, useCallback, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { devices, type Device } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

type Filter = 'all' | 'apple' | 'accessories' | 'other';

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'apple', label: 'Apple' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'other', label: 'Other Tech' },
];

function DeviceCard({ device, index, isVisible }: { device: Device; index: number; isVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (el) el.style.transform = '';
  }, []);

  return (
    <div
      className={`reveal transition-all duration-700 ${isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group rounded-3xl overflow-hidden bg-white border border-charcoal-50 transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)]"
        style={{ transformStyle: 'preserve-3d' }}
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
          <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">{device.group}</span>
          <h3 className="mt-1 text-lg font-semibold text-charcoal-700 tracking-tight">{device.name}</h3>
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
    </div>
  );
}

export default function Devices() {
  const [filter, setFilter] = useState<Filter>('all');
  const { ref, isVisible } = useReveal();

  const filtered = filter === 'all' ? devices : devices.filter((d) => d.category === filter);

  return (
    <div className="pt-14">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Our Catalogue</span>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-700">
            All Devices
          </h1>
          <p className="mt-4 text-charcoal-400 font-light max-w-xl mx-auto">
            Browse our full range of Apple products, accessories, and other premium tech.
            Enquire for pricing and availability.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-14 z-30 bg-white/80 glass border-b border-charcoal-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === f.id
                  ? 'bg-orange-500 text-white shadow-[0_4px_15px_-3px_rgba(255,107,0,0.4)]'
                  : 'bg-charcoal-50 text-charcoal-500 hover:bg-charcoal-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Device grid */}
      <section className="py-12 sm:py-16 bg-charcoal-50 min-h-[50vh]">
        <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((device, i) => (
              <DeviceCard key={device.id} device={device} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
