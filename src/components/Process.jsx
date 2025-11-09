import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Send, Clock, Plane } from 'lucide-react';

const steps = [
  { icon: CheckCircle2, title: 'Assessment', desc: 'We evaluate your profile and recommend the best pathway.' },
  { icon: FileText, title: 'Documentation', desc: 'Collect and prepare documents to IRCC standards.' },
  { icon: Send, title: 'Submission', desc: 'We complete forms and submit your application accurately.' },
  { icon: Clock, title: 'Follow-up', desc: 'Active monitoring and response to IRCC updates.' },
  { icon: Plane, title: 'Landing Support', desc: 'Pre-arrival guidance and settlement resources.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-blue-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Process</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            A clear, step-by-step journey that keeps you informed and confident.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="h-11 w-11 rounded-md bg-amber-300/20 text-amber-200 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
