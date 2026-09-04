import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, BatteryCharging, Cpu, Camera,
  Check, ChevronDown, Loader2, User, Mail, Phone,
  Wrench, Clock, ShieldCheck, CheckCircle2, ArrowRight,
  Plus, Minus,
} from 'lucide-react';
import { repairServices, repairSteps, repairFAQs } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  BatteryCharging,
  Cpu,
  Camera,
};

const deviceOptions = [
  'iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17',
  'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16',
  'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
  'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
  'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 mini',
  'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 mini',
  'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
  'iPad Pro 13"', 'iPad Pro 11"', 'iPad Air', 'iPad 10th Gen', 'iPad mini',
  'MacBook Pro 16"', 'MacBook Pro 14"', 'MacBook Air 15"', 'MacBook Air 13"',
  'iMac 24"', 'Mac mini',
  'Apple Watch Ultra 2', 'Apple Watch Series 10', 'Apple Watch SE',
];

type FormData = {
  device: string;
  issue: string;
  name: string;
  email: string;
  phone: string;
  description: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialState: FormData = {
  device: '',
  issue: '',
  name: '',
  email: '',
  phone: '',
  description: '',
};

const issueOptions = [
  'Cracked Screen',
  'Battery Replacement',
  'Water Damage',
  'Charging Port Issue',
  'Camera Not Working',
  'No Power / Won\'t Turn On',
  'Speaker / Audio Issue',
  'Software Problem',
  'Other',
];

export default function Repairs() {
  const { ref: heroRef, isVisible: heroVisible } = useReveal();
  const { ref: servicesRef, isVisible: servicesVisible } = useReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useReveal();
  const { ref: formRef, isVisible: formVisible } = useReveal();
  const { ref: faqRef, isVisible: faqVisible } = useReveal();

  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [deviceDropdown, setDeviceDropdown] = useState(false);
  const [issueDropdown, setIssueDropdown] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.device) next.device = 'Please select your device';
    if (!form.issue) next.issue = 'Please describe the issue';
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) {
      next.phone = 'Phone number is required';
    } else if (form.phone.replace(/\s/g, '').length < 8) {
      next.phone = 'Enter a valid phone number';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  const reset = () => {
    setForm(initialState);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="pt-14 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-charcoal-50">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 w-full">
          <div className="rounded-3xl bg-gradient-to-b from-orange-50 to-white border border-orange-100 p-10 sm:p-14 text-center animate-scale-in">
            <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-700">Repair Booked</h2>
            <p className="mt-3 text-charcoal-400 font-light">
              Thank you, {form.name.split(' ')[0]}. We've received your repair request for your{' '}
              <span className="text-orange-600 font-medium">{form.device}</span>. Our team will contact you within 2 hours to confirm your booking.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Book Another Repair
              </button>
              <Link
                to="/devices"
                className="bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-700 font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center"
              >
                Browse Devices
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-14">
      {/* Hero header */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-orange-100/20 blur-[120px] pointer-events-none" />
        <div
          ref={heroRef}
          className={`relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center reveal transition-all duration-700 ${
            heroVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
            <Wrench className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Apple Device Repairs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-700">
            Expert Repairs,
            <br />
            <span className="text-orange-500">Done Right.</span>
          </h1>
          <p className="mt-5 text-lg text-charcoal-400 font-light max-w-2xl mx-auto">
            From cracked screens to water damage, our certified technicians repair all Apple devices
            with genuine-grade parts and a 6-month warranty.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-charcoal-400">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              Same-Day Service
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              6-Month Warranty
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              Free Diagnostics
            </span>
          </div>
        </div>
      </section>

      {/* Repair services grid */}
      <section className="py-20 sm:py-28 bg-charcoal-50">
        <div
          ref={servicesRef}
          className={`max-w-7xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
            servicesVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Our Services</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-700">
              What We Repair
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repairServices.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Smartphone;
              return (
                <div
                  key={service.id}
                  className={`group rounded-3xl overflow-hidden bg-white border border-charcoal-50 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 reveal transition-all duration-700 ${
                    servicesVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-500">
                        <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-charcoal-700 tracking-tight">{service.title}</h3>
                      <p className="mt-2 text-sm text-charcoal-400 font-light leading-relaxed">{service.description}</p>
                      <p className="mt-4 text-xs font-medium text-orange-500 uppercase tracking-wider">{service.devices}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 bg-white">
        <div
          ref={stepsRef}
          className={`max-w-5xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
            stepsVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Process</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-700">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairSteps.map((step, i) => (
              <div
                key={step.step}
                className={`relative reveal transition-all duration-700 ${
                  stepsVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-charcoal-700 tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-charcoal-400 font-light leading-relaxed">{step.description}</p>
                {i < repairSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 text-charcoal-200">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a repair form */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-charcoal-50">
        <div
          ref={formRef}
          className={`max-w-3xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
            formVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-4">
              <Wrench className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">Book a Repair</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-700">
              Tell Us What's Wrong
            </h2>
            <p className="mt-3 text-charcoal-400 font-light max-w-xl mx-auto">
              Submit your repair request and we'll get back to you within 2 hours to confirm.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white border border-charcoal-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] p-6 sm:p-10"
            noValidate
          >
            {/* Device selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal-500 mb-2">
                Your Device <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDeviceDropdown(!deviceDropdown)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all duration-200 ${
                    errors.device
                      ? 'border-red-300 bg-red-50/30'
                      : deviceDropdown
                      ? 'border-orange-400 ring-2 ring-orange-100'
                      : form.device
                      ? 'border-orange-200 bg-orange-50/30'
                      : 'border-charcoal-100 hover:border-charcoal-200'
                  }`}
                  aria-expanded={deviceDropdown}
                >
                  <span className={`truncate ${form.device ? 'font-medium text-charcoal-700' : 'text-charcoal-300'}`}>
                    {form.device || 'Select your device'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-charcoal-300 transition-transform duration-300 flex-shrink-0 ${deviceDropdown ? 'rotate-180' : ''}`} />
                </button>
                {deviceDropdown && (
                  <div className="absolute z-20 top-full mt-2 left-0 right-0 rounded-2xl bg-white border border-charcoal-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] overflow-hidden max-h-72 overflow-y-auto animate-fade-in">
                    {deviceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          update('device', opt);
                          setDeviceDropdown(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 transition-colors duration-150 text-left text-sm ${
                          form.device === opt ? 'bg-orange-50 text-orange-600 font-medium' : 'text-charcoal-600'
                        }`}
                      >
                        {opt}
                        {form.device === opt && <Check className="w-4 h-4 text-orange-500" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.device && <p className="mt-1.5 text-sm text-red-500">{errors.device}</p>}
            </div>

            {/* Issue selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal-500 mb-2">
                What's the Issue? <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIssueDropdown(!issueDropdown)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all duration-200 ${
                    errors.issue
                      ? 'border-red-300 bg-red-50/30'
                      : issueDropdown
                      ? 'border-orange-400 ring-2 ring-orange-100'
                      : form.issue
                      ? 'border-orange-200 bg-orange-50/30'
                      : 'border-charcoal-100 hover:border-charcoal-200'
                  }`}
                  aria-expanded={issueDropdown}
                >
                  <span className={`truncate ${form.issue ? 'font-medium text-charcoal-700' : 'text-charcoal-300'}`}>
                    {form.issue || 'Select the issue'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-charcoal-300 transition-transform duration-300 flex-shrink-0 ${issueDropdown ? 'rotate-180' : ''}`} />
                </button>
                {issueDropdown && (
                  <div className="absolute z-20 top-full mt-2 left-0 right-0 rounded-2xl bg-white border border-charcoal-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] overflow-hidden animate-fade-in">
                    {issueOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          update('issue', opt);
                          setIssueDropdown(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 transition-colors duration-150 text-left text-sm ${
                          form.issue === opt ? 'bg-orange-50 text-orange-600 font-medium' : 'text-charcoal-600'
                        }`}
                      >
                        {opt}
                        {form.issue === opt && <Check className="w-4 h-4 text-orange-500" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.issue && <p className="mt-1.5 text-sm text-red-500">{errors.issue}</p>}
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal-500 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                placeholder="Tell us more about what happened..."
                rows={3}
                className="w-full px-4 py-3.5 rounded-2xl border border-charcoal-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-200 resize-none text-sm"
              />
            </div>

            {/* Contact fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <FormField icon={<User className="w-5 h-5" />} label="Full Name" error={errors.name} required>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jane Doe"
                  className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border outline-none transition-all duration-200 ${
                    errors.name ? 'border-red-300 bg-red-50/30' : 'border-charcoal-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
                  }`}
                />
              </FormField>
              <FormField icon={<Mail className="w-5 h-5" />} label="Email" error={errors.email} required>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com"
                  className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border outline-none transition-all duration-200 ${
                    errors.email ? 'border-red-300 bg-red-50/30' : 'border-charcoal-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
                  }`}
                />
              </FormField>
              <FormField icon={<Phone className="w-5 h-5" />} label="Phone" error={errors.phone} required>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="082 123 4567"
                  className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border outline-none transition-all duration-200 ${
                    errors.phone ? 'border-red-300 bg-red-50/30' : 'border-charcoal-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
                  }`}
                />
              </FormField>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-medium px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Booking...
                </>
              ) : (
                <>
                  <Wrench className="w-5 h-5" />
                  Book Repair
                </>
              )}
            </button>

            <p className="mt-4 text-center text-sm text-charcoal-300 font-light">
              Free diagnostics. No obligation. We'll confirm within 2 hours.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-white">
        <div
          ref={faqRef}
          className={`max-w-3xl mx-auto px-5 sm:px-8 reveal transition-all duration-700 ${
            faqVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">FAQ</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-700">
              Repair Questions
            </h2>
          </div>

          <div className="space-y-3">
            {repairFAQs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-charcoal-50 overflow-hidden transition-all duration-300 ${
                  openFAQ === i ? 'bg-orange-50/30 border-orange-100' : 'bg-white hover:bg-charcoal-50/50'
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  aria-expanded={openFAQ === i}
                >
                  <span className="text-sm sm:text-base font-medium text-charcoal-700 pr-4">{faq.q}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal-50 flex items-center justify-center text-charcoal-400">
                    {openFAQ === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-5 pb-4 text-sm text-charcoal-400 font-light leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({
  icon,
  label,
  error,
  required,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-charcoal-500 mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-300">{icon}</span>
        {children}
      </div>
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
