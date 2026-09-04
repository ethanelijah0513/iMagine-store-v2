import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setTilt({ x: dy * -12, y: dx * 16 });
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-x-clip bg-white pt-14"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor-follow glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(255,107,0,0.06), transparent 70%)`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-100/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-50/40 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="flex flex-col items-start text-left max-w-xl lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-orange-700">Educate. Innovate. Entertain.</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal-700 text-balance leading-[1.05] animate-fade-up">
              Technology that
              <br />
              <span className="text-orange-500">empowers</span> you.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-charcoal-400 font-light text-balance animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Your trusted South African Apple retailer. Genuine products, expert training,
              and tailored solutions for business and education.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <Link
                to="/devices"
                className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-7 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto justify-center"
              >
                Explore Devices
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/quote"
                className="group flex items-center gap-2 bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-700 font-medium px-7 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" />
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right: 3D floating iPhone */}
          <div ref={containerRef} className="relative flex items-center justify-center h-[350px] sm:h-[500px] lg:h-[600px] animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {/* Ambient shadow beneath device */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-8 rounded-full bg-charcoal-200/40 blur-[40px] pointer-events-none" />

            {/* Glow behind device */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-orange-100/40 blur-[80px] pointer-events-none" />

            {/* Device with 3D tilt */}
            <div
              className="relative transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Phone frame */}
              <div className="relative w-[220px] sm:w-[280px] lg:w-[320px] aspect-[9/19] rounded-[40px] bg-charcoal-700 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
                {/* Screen */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-br from-charcoal-50 to-white">
                  <img
                    src="https://images.pexels.com/photos/13469804/pexels-photo-13469804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="iPhone Pro with triple camera system"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-6 rounded-full bg-charcoal-700" />
                </div>
              </div>

              {/* Floating accent cards */}
              <div
                className="absolute -left-12 sm:-left-16 top-1/4 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-3 sm:p-4 flex items-center gap-2 animate-float"
                style={{ transform: `translateZ(60px)`, animationDelay: '0.5s' }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <span className="text-orange-500 text-lg font-bold">8+</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-charcoal-700">Years</p>
                  <p className="text-[10px] sm:text-xs text-charcoal-300">In SA Retail</p>
                </div>
              </div>

              <div
                className="absolute -right-8 sm:-right-14 bottom-1/4 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-3 sm:p-4 flex items-center gap-2 animate-float"
                style={{ transform: `translateZ(40px)`, animationDelay: '1s' }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-charcoal-700">Genuine</p>
                  <p className="text-[10px] sm:text-xs text-charcoal-300">Apple Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-charcoal-300 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-charcoal-200 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-charcoal-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
