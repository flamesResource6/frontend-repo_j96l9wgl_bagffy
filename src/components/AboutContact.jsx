import { motion } from 'framer-motion';
import { ShieldCheck, Quote, Mail, Phone, MapPin } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* About */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-teal-700 font-medium text-sm">
              <ShieldCheck className="h-4 w-4" /> Licensed Consultants
            </span>
            <h2 className="mt-3 text-3xl font-bold text-blue-950">About Skylark Immigration</h2>
            <p className="mt-3 text-blue-900/70">
              We are a client-first Canadian immigration firm based in Edmonton, dedicated to delivering ethical, transparent, and outcome-driven representation. Our team brings years of experience across study, work, and permanent residence pathways.
            </p>
            <div className="mt-4 rounded-lg border border-blue-950/10 bg-blue-50/40 p-4">
              <div className="flex items-start gap-3">
                <Quote className="h-5 w-5 text-teal-600 mt-0.5" />
                <p className="text-blue-900/80 text-sm">
                  "Skylark made the process simple and stress-free. Their attention to detail and prompt communication were exceptional."
                </p>
              </div>
              <p className="mt-2 text-sm text-blue-900/60">— A.S., Express Entry PR</p>
            </div>
          </motion.div>

          {/* Contact card */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-blue-950/10 bg-blue-50/40 p-6"
          >
            <h3 className="text-xl font-semibold text-blue-950">Contact Us</h3>
            <p className="text-sm text-blue-900/70 mt-1">Book a free consultation or ask a question.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid sm:grid-cols-2 gap-3">
              <input required placeholder="Full name" className="col-span-2 sm:col-span-1 rounded-md border border-blue-950/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input required type="email" placeholder="Email" className="col-span-2 sm:col-span-1 rounded-md border border-blue-950/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input placeholder="Phone" className="col-span-2 rounded-md border border-blue-950/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <textarea required rows={4} placeholder="How can we help?" className="col-span-2 rounded-md border border-blue-950/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button className="col-span-2 rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium px-4 py-2 transition-colors">Send Message</button>
            </form>
            <div className="mt-5 text-sm text-blue-900/80 space-y-1">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@skylarkimmigration.ca</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (780) 555-0199</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Edmonton, Alberta</p>
            </div>
            <div className="mt-5 h-40 w-full rounded-md overflow-hidden border border-blue-950/10">
              <iframe
                title="Edmonton Office Map"
                src="https://www.google.com/maps?q=Edmonton,+AB,+Canada&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
