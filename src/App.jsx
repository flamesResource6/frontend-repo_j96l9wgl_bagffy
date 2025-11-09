import Header from './components/Header';
import Services from './components/Services';
import Process from './components/Process';
import AboutContact from './components/AboutContact';
import FAQ from './components/FAQ';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Skylark Immigration. All rights reserved.</p>
        <div className="text-white/60 text-sm">Designed for clarity, accessibility, and trust.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-amber-300 focus:text-blue-950 focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" role="main">
        <Services />
        <Process />
        <AboutContact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
