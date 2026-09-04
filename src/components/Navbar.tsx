import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Devices', path: '/devices' },
  { label: 'Repairs', path: '/repairs' },
  { label: 'Quote', path: '/quote' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_1px_3px_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="iMagine home">
          <span className="text-xl font-bold tracking-tight text-charcoal-700 group-hover:text-orange-500 transition-colors duration-300">
            iMagine
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 ${
                isActive(link.path)
                  ? 'text-charcoal-700 after:w-full'
                  : 'text-charcoal-400 hover:text-charcoal-700 after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/quote"
            className="flex items-center gap-1.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-charcoal-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? 'max-h-96 glass border-b border-charcoal-100' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-left text-base font-medium py-3 px-2 rounded-lg transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-orange-500 bg-orange-50'
                  : 'text-charcoal-500 hover:text-orange-500 hover:bg-charcoal-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
