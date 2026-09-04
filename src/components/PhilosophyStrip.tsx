import { GraduationCap, Lightbulb, Sparkles } from 'lucide-react';
import { philosophyItems } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Lightbulb,
  Sparkles,
};

export default function PhilosophyStrip() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
          isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {philosophyItems.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center reveal transition-all duration-700 ${
                  isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-charcoal-700">{item.word}</h3>
                <p className="mt-2 text-charcoal-400 font-light leading-relaxed max-w-xs">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
