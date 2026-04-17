"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/primitives";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@comhealthng.org",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "WhatsApp / Phone",
    value: "+234 800 COMHEALTH",
    sub: "Mon–Sat, 8am–6pm WAT",
  },
  {
    icon: MapPin,
    label: "Offices",
    value: "Lagos · Abuja · Port Harcourt",
    sub: "Field operations across 8 states",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-forest-50 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Get In Touch"
            title={
              <>
                Let&apos;s build healthier
                <br />
                <span className="text-forest-500">communities together</span>
              </>
            }
            description="Whether you have a question, want to partner, or need to reach us about a program — we're here."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group flex items-start gap-4 p-5 bg-white border border-gray-100 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/5 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="bg-linear-to-br from-forest-500 to-amber-400 p-2.5 rounded-xl shadow-md shrink-0">
                  <c.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-forest-500 mb-0.5">
                    {c.label}
                  </p>
                  <p className="font-semibold text-sm text-forest-900">
                    {c.value}
                  </p>
                  <p className="font-mono text-[11px] text-gray-400 mt-0.5">
                    {c.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Dark note card */}
            <div className="bg-forest-900 rounded-2xl p-6 mt-2 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-forest-500/15 pointer-events-none" />
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-forest-400 mb-2">
                For Urgent Health Needs
              </p>
              <p className="text-white font-medium text-sm leading-relaxed mb-4">
                If you or someone you know needs immediate health assistance,
                please contact emergency services or visit your nearest health
                facility.
              </p>
              <a
                href="https://wa.me/2348000000000"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase bg-[#25D366] text-white px-4 py-2 rounded-xl hover:bg-[#20b857] transition-colors duration-200"
              >
                WhatsApp Support Line
              </a>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-forest-500 to-amber-400" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 bg-white border border-forest-200 rounded-3xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-forest-50 border border-forest-200 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-forest-500" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-forest-900">
                  Message sent!
                </h3>
                <p className="font-mono text-xs text-gray-500 leading-relaxed max-w-xs">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="font-mono text-[11px] tracking-wider uppercase text-forest-500 hover:text-forest-400 transition-colors mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      placeholder: "Ada Okonkwo",
                      type: "text",
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      placeholder: "ada@example.com",
                      type: "email",
                    },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field.id}
                        className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-500"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [field.id]: e.target.value })
                        }
                        required
                        className="border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-500"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    required
                    className="border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700"
                  >
                    <option value="">Select a topic…</option>
                    <option>Volunteer Enquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Donation / Funding</option>
                    <option>Program Registration</option>
                    <option>Media / Press</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us how we can help or collaborate…"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    className="border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 font-mono text-[12px] tracking-wider uppercase bg-forest-500 text-white px-6 py-3.5 rounded-xl hover:bg-forest-400 transition-all duration-200 shadow-lg shadow-forest-500/20 hover:shadow-forest-400/30 hover:-translate-y-0.5 mt-1"
                >
                  Send Message
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
