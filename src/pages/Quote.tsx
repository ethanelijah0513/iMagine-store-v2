import { useState, useEffect, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { productGroups } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import {
  Check, ChevronDown, Loader2, User, Mail, Phone, MessageSquare,
  Package, CheckCircle2, Sparkles, ArrowRight, ArrowLeft, Search,
} from 'lucide-react';

type FormData = {
  product: string;
  customProduct: string;
  quantity: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialState: FormData = {
  product: '',
  customProduct: '',
  quantity: '1',
  name: '',
  email: '',
  phone: '',
  notes: '',
};

export default function Quote() {
  const location = useLocation();
  const { ref, isVisible } = useReveal();
  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [step, setStep] = useState<1 | 2>(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');

  const preselected = location.state?.product as string | undefined;

  useEffect(() => {
    if (preselected) {
      const allOptions = productGroups.flatMap((g) => g.options);
      if (allOptions.includes(preselected)) {
        setForm((prev) => ({ ...prev, product: preselected }));
      } else {
        setForm((prev) => ({ ...prev, product: '__custom__', customProduct: preselected }));
      }
    }
  }, [preselected]);

  const isCustom = form.product === '__custom__';

  const filteredGroups = productGroups.map((g) => ({
    ...g,
    options: g.options.filter((o) => o.toLowerCase().includes(search.toLowerCase())),
  })).filter((g) => g.options.length > 0);

  const validateStep1 = (): boolean => {
    const next: Errors = {};
    if (!form.product) next.product = 'Please select a product';
    if (isCustom && !form.customProduct.trim()) next.customProduct = 'Please describe what you need';
    const qty = parseInt(form.quantity, 10);
    if (!qty || qty < 1) next.quantity = 'Enter a valid quantity';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validateStep2 = (): boolean => {
    const next: Errors = {};
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
    if (!validateStep2()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  const reset = () => {
    setForm(initialState);
    setErrors({});
    setStatus('idle');
    setStep(1);
  };

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  if (status === 'success') {
    return (
      <div className="pt-14 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-charcoal-50">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 w-full">
          <div className="rounded-3xl bg-gradient-to-b from-orange-50 to-white border border-orange-100 p-10 sm:p-14 text-center animate-scale-in">
            <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-700">Quote Request Sent</h2>
            <p className="mt-3 text-charcoal-400 font-light">
              Thank you, {form.name.split(' ')[0]}. Our team will get back to you within 24 hours with a personalised quote
              for your{' '}
              <span className="text-orange-600 font-medium">
                {isCustom ? form.customProduct : form.product}
              </span>
              .
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Request Another Quote
              </button>
              <a
                href="/devices"
                className="bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-700 font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center"
              >
                Browse Devices
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-14 min-h-screen bg-gradient-to-b from-white to-charcoal-50">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24 reveal transition-all duration-700 ${
          isVisible ? 'is-visible translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Quick & Easy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-700">Get a Quote</h1>
          <p className="mt-3 text-charcoal-400 font-light max-w-xl mx-auto">
            Tell us what you need and we'll send a personalised quote within 24 hours.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-orange-500' : 'text-charcoal-300'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${step >= 1 ? 'bg-orange-500 text-white' : 'bg-charcoal-100 text-charcoal-400'}`}>
              1
            </div>
            <span className="text-sm font-medium hidden sm:inline">Product</span>
          </div>
          <div className={`w-12 h-[2px] rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-orange-500' : 'bg-charcoal-100'}`} />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-orange-500' : 'text-charcoal-300'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${step >= 2 ? 'bg-orange-500 text-white' : 'bg-charcoal-100 text-charcoal-400'}`}>
              2
            </div>
            <span className="text-sm font-medium hidden sm:inline">Details</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white border border-charcoal-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] p-6 sm:p-10"
          noValidate
        >
          {/* Step 1: Product selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              {/* Product dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-charcoal-500 mb-2">
                  Product <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all duration-200 ${
                      errors.product
                        ? 'border-red-300 bg-red-50/30'
                        : dropdownOpen
                        ? 'border-orange-400 ring-2 ring-orange-100'
                        : form.product
                        ? 'border-orange-200 bg-orange-50/30'
                        : 'border-charcoal-100 hover:border-charcoal-200'
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="listbox"
                  >
                    <span className="flex items-center gap-2 truncate">
                      {form.product ? (
                        <span className="font-medium text-charcoal-700">
                          {isCustom ? 'Other / Something else?' : form.product}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-charcoal-300">
                          <Package className="w-5 h-5" />
                          Select a product
                        </span>
                      )}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-charcoal-300 transition-transform duration-300 flex-shrink-0 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute z-20 top-full mt-2 left-0 right-0 rounded-2xl bg-white border border-charcoal-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] overflow-hidden max-h-96 flex flex-col animate-fade-in">
                      {/* Search */}
                      <div className="p-3 border-b border-charcoal-50 relative">
                        <Search className="w-4 h-4 text-charcoal-300 absolute left-5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search products..."
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-charcoal-50 text-sm outline-none focus:ring-2 focus:ring-orange-100"
                          autoFocus
                        />
                      </div>
                      {/* Options */}
                      <div className="overflow-y-auto flex-1">
                        {filteredGroups.map((g) => (
                          <div key={g.label}>
                            <p className="px-4 py-2 text-xs font-semibold text-charcoal-300 uppercase tracking-wider bg-charcoal-50/50">
                              {g.label}
                            </p>
                            {g.options.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  update('product', opt);
                                  setDropdownOpen(false);
                                  setSearch('');
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 transition-colors duration-150 text-left text-sm ${
                                  form.product === opt ? 'bg-orange-50 text-orange-600 font-medium' : 'text-charcoal-600'
                                }`}
                              >
                                {opt}
                                {form.product === opt && <Check className="w-4 h-4 text-orange-500" />}
                              </button>
                            ))}
                          </div>
                        ))}
                        {/* Custom option */}
                        <div className="border-t border-charcoal-50">
                          <button
                            type="button"
                            onClick={() => {
                              update('product', '__custom__');
                              setDropdownOpen(false);
                              setSearch('');
                            }}
                            className={`w-full flex items-center gap-2 px-4 py-3 hover:bg-orange-50 transition-colors duration-150 text-left text-sm ${
                              isCustom ? 'bg-orange-50 text-orange-600 font-medium' : 'text-charcoal-600'
                            }`}
                          >
                            <Sparkles className="w-4 h-4 text-orange-400" />
                            Other / Something else?
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {errors.product && <p className="mt-1.5 text-sm text-red-500">{errors.product}</p>}
              </div>

              {/* Custom product text field */}
              {isCustom && (
                <div className="mb-6 animate-fade-in">
                  <label className="block text-sm font-medium text-charcoal-500 mb-2">
                    What do you need? <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.customProduct}
                    onChange={(e) => update('customProduct', e.target.value)}
                    placeholder="e.g. 10x iPad Pro for a school deployment"
                    className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all duration-200 ${
                      errors.customProduct ? 'border-red-300 bg-red-50/30' : 'border-charcoal-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
                    }`}
                  />
                  {errors.customProduct && <p className="mt-1.5 text-sm text-red-500">{errors.customProduct}</p>}
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-charcoal-500 mb-2">
                  Quantity <span className="text-orange-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => update('quantity', String(Math.max(1, parseInt(form.quantity || '1', 10) - 1)))}
                    className="w-11 h-11 flex-shrink-0 rounded-xl border border-charcoal-100 hover:border-orange-300 hover:bg-orange-50 text-charcoal-400 hover:text-orange-500 transition-all duration-200 active:scale-90 font-bold text-lg"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={(e) => update('quantity', e.target.value)}
                    className={`w-20 text-center text-lg font-semibold px-3 py-2.5 rounded-xl border transition-all duration-200 ${
                      errors.quantity ? 'border-red-300 bg-red-50/30' : 'border-charcoal-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
                    } outline-none`}
                  />
                  <button
                    type="button"
                    onClick={() => update('quantity', String(parseInt(form.quantity || '1', 10) + 1))}
                    className="w-11 h-11 flex-shrink-0 rounded-xl border border-charcoal-100 hover:border-orange-300 hover:bg-orange-50 text-charcoal-400 hover:text-orange-500 transition-all duration-200 active:scale-90 font-bold text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <span className="text-sm text-charcoal-300 ml-2">units</span>
                </div>
                {errors.quantity && <p className="mt-1.5 text-sm text-red-500">{errors.quantity}</p>}
              </div>

              <button
                type="button"
                onClick={() => validateStep1() && setStep(2)}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2: Contact details */}
          {step === 2 && (
            <div className="animate-fade-in">
              {/* Summary */}
              <div className="mb-6 p-4 rounded-2xl bg-charcoal-50 flex items-center justify-between">
                <div>
                  <p className="text-xs text-charcoal-300 uppercase tracking-wider">Product</p>
                  <p className="text-sm font-medium text-charcoal-700">
                    {isCustom ? form.customProduct : form.product} × {form.quantity}
                  </p>
                </div                >
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
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

                <FormField icon={<MessageSquare className="w-5 h-5" />} label="Notes (Optional)">
                  <input
                    type="text"
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="Any specific requirements?"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-charcoal-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-200"
                  />
                </FormField>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center justify-center gap-2 bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-700 font-medium px-6 py-4 rounded-2xl transition-all duration-300 active:scale-[0.98] sm:w-auto"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-medium px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      Request Quote
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <p className="mt-4 text-center text-sm text-charcoal-300 font-light">
            No payment required. We'll send your quote within 24 hours.
          </p>
        </form>
      </div>
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
