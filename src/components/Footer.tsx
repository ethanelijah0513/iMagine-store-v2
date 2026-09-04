import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Devices', path: '/devices' },
  { label: 'Repairs', path: '/repairs' },
  { label: 'Quote', path: '/quote' },
  { label: 'About', path: '/about' },
];

const supportLinks = [
  { label: 'Warranty Information', href: '#' },
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Track Your Order', href: '#' },
  { label: 'FAQ', href: '#' },
];

const socialIcons = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-700 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-tight">iMagine</h3>
            <p className="mt-3 text-sm text-charcoal-300 font-light leading-relaxed max-w-xs">
              Educate. Innovate. Entertain. Your trusted South African Apple retailer and technology partner.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-charcoal-600 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Icon className="w-4 h-4 text-charcoal-200 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-charcoal-300 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-charcoal-300 hover:text-orange-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-charcoal-300 mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-charcoal-300 hover:text-orange-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-charcoal-300 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-charcoal-300">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>123 Main Road, Cape Town, South Africa, 8001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-charcoal-300">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="tel:+27211234567" className="hover:text-orange-400 transition-colors duration-200">
                  +27 21 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-charcoal-300">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:hello@imagine.co.za" className="hover:text-orange-400 transition-colors duration-200">
                  hello@imagine.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-charcoal-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-400 font-light">
            © {new Date().getFullYear()} iMagine. All rights reserved.
          </p>
          <p className="text-sm text-charcoal-400 font-light italic">Educate. Innovate. Entertain.</p>
        </div>
      </div>
    </footer>
  );
}
