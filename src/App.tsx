import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Devices from '@/pages/Devices';
import Quote from '@/pages/Quote';
import About from '@/pages/About';
import Repairs from '@/pages/Repairs';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/about" element={<About />} />
            <Route path="/repairs" element={<Repairs />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
