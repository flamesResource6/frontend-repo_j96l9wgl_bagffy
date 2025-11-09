import { motion } from 'framer-motion';
import { Phone, Calendar, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Our Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  useEffect(() => {
    document.title = 'Skylark Immigration — Guiding You to a New Beginning';
  }, []);

  return (
    <header className="relative bg-blue-950 text-white" aria-label="Site header">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-blue-950/80 bg-blue-950/90 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded">
            <div className="h-8 w-8 rounded bg-teal-500 flex items-center justify-center font-bold" aria-hidden>
              S
            </div>
            <span className="font-semibold tracking-wide">Skylark Immigration</span>
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <Phone className="h-4 w-4" aria-hidden /> Contact
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-3 py-1.5 text-sm font-medium text-blue-950 hover:bg-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <Calendar className="h-4 w-4" aria-hidden /> Book a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden" aria-label="Hero">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
          <div className="from-teal-400/30 via-blue-500/20 to-blue-900/40 bg-gradient-to-br w-full h-full" />
        </div>
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl pointer-events-none" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
                Trusted Canadian Immigration Consultants
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                Guiding You to a <span className="text-amber-300">New Beginning</span>
              </h1>
              <p className="mt-4 text-white/80 max-w-xl mx-auto lg:mx-0">
                Personalized, transparent, and reliable immigration guidance for students, workers, families, and newcomers across the globe.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-5 py-3 font-medium text-blue-950 hover:bg-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  Book a Free Consultation <ChevronRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* 3D Spline Scene */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-72 sm:h-96 rounded-xl border border-white/10 bg-white/5"
              aria-hidden
            >
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </header>
  );
}
