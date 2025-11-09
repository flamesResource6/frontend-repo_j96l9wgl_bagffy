import Header from './components/Header';
import Services from './components/Services';
import Process from './components/Process';
import AboutContact from './components/AboutContact';
import FAQ from './components/FAQ';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Skylark Immigration. All rights reserved.</p>
        <div className="text-white/60 text-sm">
          Designed for clarity, accessibility, and trust.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Header />
      <main>
        <Services />
        <Process />
        <AboutContact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
