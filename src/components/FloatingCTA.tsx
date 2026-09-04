import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <Link
      to="/quote"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-3.5 rounded-2xl shadow-[0_8px_30px_-5px_rgba(255,107,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Get a quote"
    >
      <MessageSquare className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Get a Quote</span>
    </Link>
  );
}
