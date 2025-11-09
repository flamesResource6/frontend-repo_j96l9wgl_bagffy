import { motion } from 'framer-motion';
import { Phone, Calendar, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Our Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  useEffect(() => {
    document.title = 'Skylark Immigration — Guiding You to a New Beginning';
  }, []);

  return (
    <header className="relative bg-blue-950 text-white">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-blue-950/80 bg-blue-950/90 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-teal-500 flex items-center justify-center font-bold">S</div>
            <span className="font-semibold tracking-wide">Skylark Immigration</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" /> Contact
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-3 py-1.5 text-sm font-medium text-blue-950 hover:bg-teal-400 transition-colors">
              <Calendar className="h-4 w-4" /> Book a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        {/* Background gradient + subtle pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
          <div className="from-teal-400/30 via-blue-500/20 to-blue-900/40 bg-gradient-to-br w-full h-full" />
        </div>
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">Trusted Canadian Immigration Consultants</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                Guiding You to a <span className="text-amber-300">New Beginning</span>
              </h1>
              <p className="mt-4 text-white/80 max-w-xl mx-auto lg:mx-0">
                Personalized, transparent, and reliable immigration guidance for students, workers, families, and newcomers across the globe.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-5 py-3 font-medium text-blue-950 hover:bg-teal-400 transition-colors">
                  Book a Free Consultation <ChevronRight className="h-4 w-4" />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors">
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              {/* Stylized world map illustration using SVG */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <svg
                  viewBox="0 0 800 400"
                  className="w-full h-64 sm:h-80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="800" height="400" fill="none" />
                  <g fill="url(#grad)" opacity="0.9">
                    <path d="M120 140l30-10 15 10 20-5 10 10-10 20-15 5-20-10-25 5-15-10z" />
                    <path d="M260 160l20-10 10 10 15-5 10 10-10 20-20 5-15-10z" />
                    <path d="M500 150l30-10 20 10 10 10-10 15-25 10-25-10-10-15z" />
                    <path d="M650 170l20-10 15 10 10 10-10 15-20 5-20-10z" />
                  </g>
                  <g stroke="white" strokeOpacity="0.2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <circle key={i} cx={80 + i * 70} cy={200} r={i * 7} fill="none" />
                    ))}
                  </g>
                </svg>
                <p className="text-sm text-white/70 mt-3">
                  Global perspective, local expertise — proudly serving clients from Edmonton and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </header>
  );
}
