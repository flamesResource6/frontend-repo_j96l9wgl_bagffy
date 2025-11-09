import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Plane, Compass, MapPin, Users } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Study Permits',
    desc: 'From school selection to visa approval, we help you study in Canada with confidence.',
  },
  {
    icon: Briefcase,
    title: 'Work Permits',
    desc: 'Employer-specific and open work permits tailored to your goals and timelines.',
  },
  {
    icon: Plane,
    title: 'Visitor Visas',
    desc: 'Seamless applications for tourism, business visits, and family reunions.',
  },
  {
    icon: Compass,
    title: 'Express Entry',
    desc: 'Strategic CRS optimization and full representation for permanent residence.',
  },
  {
    icon: MapPin,
    title: 'PNP Pathways',
    desc: 'Navigate Provincial Nominee Programs with province-specific guidance.',
  },
  {
    icon: Users,
    title: 'Family Sponsorships',
    desc: 'Reunite with loved ones through spousal, parent, and child sponsorships.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950">Services</h2>
          <p className="mt-3 text-blue-900/70 max-w-2xl mx-auto">
            Clear, comprehensive support across study, work, visit, and permanent residence pathways.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl border border-blue-950/10 bg-blue-50/40 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="h-11 w-11 rounded-md bg-teal-500/15 text-teal-600 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-950">{title}</h3>
              <p className="mt-2 text-blue-900/70 text-sm">{desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center text-teal-700 hover:text-teal-600 text-sm font-medium">
                Learn more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
