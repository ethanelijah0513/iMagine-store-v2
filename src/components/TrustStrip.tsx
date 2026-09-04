import { ShieldCheck, Award, Building2, Headphones } from 'lucide-react';
import { trustItems } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Award,
  Building2,
  Headphones,
};

export default function TrustStrip() {
  return (
    <section className="py-12 bg-white border-y border-charcoal-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <div key={item.label} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-sm font-medium text-charcoal-500">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
