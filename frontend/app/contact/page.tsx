'use client';

import { Navbar } from '@/components/navbar';
import { AnimatedText } from '@/components/animated-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FormEvent, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { API } from '@/config/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSending(true);
    try {
      await axios.post(API.send, { type: 'contact', ...formData });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      const msg = axios.isAxiosError(err)
        ? err.response?.data?.error || err.message
        : err instanceof Error ? err.message : 'Something went wrong';
      setErrorMsg(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-background to-muted relative overflow-hidden">
        {/* Decorative blur layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: '-10%', left: '-10%' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{ bottom: '-10%', right: '-10%' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-4 py-1.5 rounded-full inline-block mb-6">
              Connect With Us
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-primary">
              Let&apos;s Talk About Your <span className="text-accent bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">Growth.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We&apos;re ready to help you build, launch, or scale your online business. Get in touch and let&apos;s start your journey to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border border-border/60 bg-white/70 backdrop-blur-md shadow-[0_20px_50px_rgba(80,96,208,0.04)] rounded-xl">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center"
                  >
                    <p className="text-lg font-semibold text-green-700">Thank you! We&apos;ll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-white dark:bg-card"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-white dark:bg-card"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07366 488595"
                        className="bg-white dark:bg-card"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="bg-white dark:bg-card"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In</label>
                      <Select
                        name="service"
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="w-full bg-white dark:bg-card text-left">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design">Design Services</SelectItem>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="mobile">Mobile App Development</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce Solutions</SelectItem>
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                          <SelectItem value="amazon">Amazon FBA & FBM</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-white dark:bg-card"
                        required
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-sm text-destructive">{errorMsg}</p>
                    )}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                      <Button type="submit" size="lg" disabled={sending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md">
                        {sending ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <AnimatedText>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                </AnimatedText>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="p-4 bg-accent/10 rounded-lg h-fit">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:contact@acestudiosuk.com"
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      contact@acestudiosuk.com
                    </a>
                    <p className="text-sm text-foreground/60 mt-1">We typically reply within 24 hours</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="p-4 bg-secondary/10 rounded-lg h-fit">
                    <Phone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-foreground/70">07366 488595</p>
                    <p className="text-sm text-foreground/60 mt-1">Mon-Fri 9AM-6PM GMT</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4"
                >
                  <div className="p-4 bg-green-500/10 rounded-lg h-fit">
                    <Clock size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-foreground/70">Monday - Friday</p>
                    <p className="text-foreground/70">9:00 AM - 6:00 PM GMT</p>
                    <p className="text-sm text-foreground/60 mt-2">Weekend responses available upon request</p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 border-t border-border"
                >
                  <h3 className="font-bold text-lg mb-3">Schedule a Call</h3>
                  <p className="text-foreground/70 mb-4">
                    Book a free 30-minute strategy call with our team to discuss your project and goals.
                  </p>
                  <Button variant="outline" className="w-full">
                    Calendar Booking Coming Soon
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/20 relative overflow-hidden border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-4 py-1.5 rounded-full inline-block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 tracking-tight">
              What Happens <span className="text-accent">Next?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Here is how we take you from initial inquiry to a fully realized digital solution.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: '01',
                title: 'Inquiry Review',
                desc: 'Our team reviews your submission within 24 hours to analyze your goals and project requirements.',
                color: 'from-blue-500 to-indigo-600',
              },
              {
                step: '02',
                title: 'Discovery Call',
                desc: 'We schedule a free 30-minute strategy call to deep dive into details and scope out options.',
                color: 'from-secondary to-purple-600',
              },
              {
                step: '03',
                title: 'Custom Proposal',
                desc: 'You receive a detailed, transparent proposal containing project timelines, deliverables, and costs.',
                color: 'from-accent to-pink-600',
              },
              {
                step: '04',
                title: 'Project Kickoff',
                desc: 'Upon approval, we onboard your dedicated team and begin the development sprint immediately.',
                color: 'from-green-500 to-emerald-600',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-white border border-border/60 p-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(80,96,208,0.06)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 rounded-bl-full`} />
                
                <span className={`text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-white relative border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-accent uppercase bg-accent/10 px-4 py-1.5 rounded-full inline-block">
              Our Office
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 tracking-tight">
              Where to Find <span className="text-secondary">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Headquartered in Manchester, United Kingdom, serving clients across the UK and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-1 max-w-xl mx-auto gap-8">
            {[
              {
                city: 'Manchester',
                region: 'Headquarters',
                address: 'Chancery Place, 50 Brown St, Manchester, United Kingdom, M2 2JG',
                time: '9:00 AM - 6:00 PM GMT',
                color: 'from-orange-500 to-accent',
              },
            ].map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group p-8 bg-white border border-border/60 hover:border-secondary/40 shadow-sm hover:shadow-[0_20px_45px_rgba(80,96,208,0.04)] rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${loc.color}`} />
                <div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider block mb-1">
                    {loc.region}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mb-4">{loc.city}</h3>
                  <div className="space-y-3 text-sm text-muted-foreground mb-6">
                    <p className="flex items-start gap-2.5">
                      <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock size={16} className="text-secondary shrink-0" />
                      <span>{loc.time}</span>
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground/80">Support Active</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQ Section */}
      <section className="py-24 bg-gradient-to-t from-muted/20 to-white border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-4 py-1.5 rounded-full inline-block">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 tracking-tight">
              Inquiry <span className="text-accent">FAQ</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
              Find answers to the most common questions clients ask before starting their project with us.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How fast will someone respond to my inquiry?',
                a: 'We review all inquiries daily. You will receive an initial response or scheduling invite within 24 business hours.',
              },
              {
                q: 'Do we sign a Non-Disclosure Agreement (NDA) before sharing details?',
                a: 'Yes. We respect your intellectual property. We are happy to sign an NDA before any in-depth details of your project are disclosed.',
              },
              {
                q: 'Is the 30-minute discovery call really free?',
                a: 'Yes, absolutely. The strategy/discovery call carries zero fee or obligation. We discuss your business goals, outline high-level technical solutions, and see if there is a mutual fit.',
              },
              {
                q: 'What should I prepare for our first conversation?',
                a: 'Just a clear understanding of the goals you want to achieve, any reference websites or platforms you like, and a rough timeline. Don\'t worry about having precise technical specifications.',
              },
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Card
                    className={`p-6 border border-border/60 hover:border-secondary/40 transition-all duration-300 cursor-pointer bg-white ${
                      isOpen ? 'shadow-[0_15px_30px_rgba(80,96,208,0.03)]' : ''
                    }`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-bold text-base md:text-lg text-primary">{faq.q}</h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 p-1.5 bg-muted/60 rounded-full text-secondary"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 pt-4 border-t border-border/40 text-sm md:text-base text-muted-foreground leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
