import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does an Express Entry application take?',
    a: 'Processing times vary, but many complete applications are processed in approximately 6 months after submission.'
  },
  {
    q: 'Can I work while studying in Canada?',
    a: 'Most international students with a valid study permit can work part-time during studies and full-time during scheduled breaks.'
  },
  {
    q: 'Do you offer virtual consultations?',
    a: 'Yes. We offer online and phone consultations for clients worldwide.'
  },
  {
    q: 'What documents do I need to get started?',
    a: 'This depends on your pathway, but generally includes IDs, education/work proof, and language test results. We provide a tailored checklist.'
  }
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-blue-950/10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-medium text-blue-950">{q}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-4 text-blue-900/70 text-sm">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-950 text-center">FAQ</h2>
        <p className="mt-2 text-center text-blue-900/70">Answers to common questions about Canadian immigration.</p>
        <div className="mt-6 bg-blue-50/40 rounded-xl border border-blue-950/10 p-4 sm:p-6">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
