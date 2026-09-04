import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function TestimonialCarousel() {
  const { ref, isVisible } = useReveal();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="py-24 sm:py-32 bg-charcoal-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
          isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-700">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal-50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)]">
                    <Quote className="w-10 h-10 text-orange-200" />
                    <p className="mt-5 text-lg sm:text-xl text-charcoal-500 font-light leading-relaxed text-balance">
                      "{t.quote}"
                    </p>
                    <div className="mt-8 pt-6 border-t border-charcoal-50">
                      <p className="font-semibold text-charcoal-700">{t.author}</p>
                      <p className="text-sm text-charcoal-300 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 -left-2 sm:-left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-charcoal-100 hover:border-orange-300 hover:bg-orange-50 text-charcoal-400 hover:text-orange-500 flex items-center justify-center transition-all duration-300 active:scale-90 shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-2 sm:-right-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-charcoal-100 hover:border-orange-300 hover:bg-orange-50 text-charcoal-400 hover:text-orange-500 flex items-center justify-center transition-all duration-300 active:scale-90 shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-orange-500' : 'w-2 bg-charcoal-200 hover:bg-charcoal-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
