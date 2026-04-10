/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  PhoneCall, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Menu,
  X,
  PhoneForwarded,
  Clock,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DEMO_NUMBER = "+1 (555) 123-4567"; // Placeholder demo number

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">SnapTextBack</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">How It Works</button>
            <button onClick={() => scrollToSection('who-its-for')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Who It's For</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Contact</button>
            <Button onClick={() => scrollToSection('hero')} className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b bg-white md:hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                <button onClick={() => scrollToSection('how-it-works')} className="text-left text-lg font-medium">How It Works</button>
                <button onClick={() => scrollToSection('who-its-for')} className="text-left text-lg font-medium">Who It's For</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-medium">Contact</button>
                <Button onClick={() => scrollToSection('hero')} className="w-full bg-blue-600">Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(37,99,235,0.05)_0%,transparent_100%)]" />
          
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                  </span>
                  A2P Compliant & Ready
                </div>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                  Never Lose a <span className="text-blue-600">Lead</span> to a Missed Call Again.
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-slate-600">
                  Instantly text back every missed call. Keep your customers engaged while you're busy, and close more deals without lifting a finger.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    No Setup Fees
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Instant Activation
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Cancel Anytime
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-3xl bg-blue-600/5 blur-2xl" />
                <Card className="relative border-slate-200 shadow-2xl shadow-blue-100">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Experience the Demo</CardTitle>
                    <CardDescription>Enter your details to see how it works in real-time.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      {!isSubmitted ? (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-4"
                        >
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                              id="name" 
                              placeholder="John Doe" 
                              required 
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="john@towingcompany.com" 
                              required 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="h-12"
                            />
                          </div>
                          <Button type="submit" className="h-12 w-full bg-blue-600 text-lg font-semibold hover:bg-blue-700">
                            Get Demo Instructions <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          <p className="text-center text-xs text-slate-400">
                            By submitting this form, you agree to receive email communications from SnapTextBack. You can unsubscribe at any time. SMS messages are only sent if you voluntarily call our demo number. Mobile opt-in data is never shared with third parties. Reply STOP to opt out. Reply HELP for help. Msg & data rates may apply.
                          </p>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-6 py-4 text-center"
                        >
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <PhoneCall className="h-8 w-8" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-slate-900">Ready for the Demo?</h3>
                            <p className="text-slate-600">Call our demo number below to experience the instant text-back system.</p>
                          </div>
                          
                          <div className="rounded-2xl bg-slate-50 p-6">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Call Now</p>
                            <a href={`tel:${DEMO_NUMBER}`} className="text-3xl font-bold text-blue-600 hover:underline">
                              {DEMO_NUMBER}
                            </a>
                          </div>

                          <div className="space-y-4 text-left text-sm text-slate-600">
                            <div className="flex gap-3">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">1</div>
                              <p>Call the number and let it ring (or hang up).</p>
                            </div>
                            <div className="flex gap-3">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">2</div>
                              <p>You'll receive an instant text message.</p>
                            </div>
                            <div className="flex gap-3">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">3</div>
                              <p>Reply <span className="font-bold text-slate-900">YES</span> to opt-in to the demo flow.</p>
                            </div>
                          </div>

                          <div className="pt-4 text-[10px] leading-relaxed text-slate-400">
                            Reply STOP to unsubscribe. Reply HELP for help. Message and data rates may apply. SMS opt-in explanation happens AFTER call.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Cost of a Missed Call is Higher Than You Think.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <XCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Lost Revenue</h3>
                <p className="text-slate-600">62% of calls to small businesses go unanswered. Most callers won't leave a voicemail—they'll just call your competitor.</p>
              </div>
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Frustrated Leads</h3>
                <p className="text-slate-600">Customers expect instant gratification. If you don't answer, they feel ignored and move on immediately.</p>
              </div>
              <div className="space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Marketing Waste</h3>
                <p className="text-slate-600">You're spending money to get the phone to ring. Every missed call is literally throwing your marketing budget away.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
                  <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-600" />
                      <div>
                        <p className="text-sm font-bold">Customer</p>
                        <p className="text-xs text-slate-400">Just now</p>
                      </div>
                    </div>
                    <PhoneForwarded className="h-5 w-5 text-slate-500" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-sm">
                        "Hey, I need a tow truck at 5th and Main. Are you available?"
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-blue-600 p-4 text-sm">
                        "Hi! This is Snap Towing. Sorry we missed your call. We're on a job but can help! Do you still need a tow?"
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-slate-800 p-4 text-sm">
                        "Yes please! That was fast. Thanks for texting back."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
                  Keep Them on the Hook with Instant Responses.
                </h2>
                <p className="mb-8 text-lg text-slate-600">
                  SnapTextBack detects when you miss a call and automatically sends a personalized text message to the caller. It's like having a 24/7 receptionist that never sleeps.
                </p>
                <ul className="space-y-4">
                  {[
                    "Instant engagement within seconds",
                    "Personalized with your business name",
                    "Proven to stop leads from calling competitors",
                    "Simple, automated, and effective"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-slate-900 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <div className="grid gap-12 md:grid-cols-4">
              {[
                {
                  icon: <PhoneCall className="h-8 w-8" />,
                  title: "1. Customer Calls",
                  desc: "A potential lead calls your business looking for help."
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "2. Call is Missed",
                  desc: "You're busy on a job or it's after hours. The call goes unanswered."
                },
                {
                  icon: <MessageSquare className="h-8 w-8" />,
                  title: "3. Instant Text",
                  desc: "SnapTextBack instantly sends a friendly text to the caller."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "4. Engagement",
                  desc: "The customer replies, and you've saved a lead that would have left."
                }
              ].map((step, i) => (
                <div key={i} className="relative space-y-4">
                  {i < 3 && (
                    <div className="absolute right-[-20%] top-10 hidden w-full border-t border-dashed border-slate-700 md:block" />
                  )}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who-its-for" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Built for Local Service Heroes</h2>
            <p className="mb-16 text-lg text-slate-600">If your business relies on the phone, you need SnapTextBack.</p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Towing & Recovery",
                "HVAC Specialists",
                "Plumbing Services",
                "Auto Repair Shops",
                "General Contractors",
                "Locksmiths",
                "Electricians",
                "Landscapers",
                "Cleaning Services"
              ].map((industry, i) => (
                <Card key={i} className="border-slate-100 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold text-slate-800">{industry}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Introduction Section */}
        <section className="bg-blue-600 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight">Experience it for yourself.</h2>
            <p className="mb-10 text-xl text-blue-100">
              Don't just take our word for it. See exactly what your customers will experience when they call you and you're unavailable.
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('hero')}
              className="bg-white px-8 py-6 text-xl font-bold text-blue-600 hover:bg-blue-50"
            >
              Try the Live Demo <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* Closing Section */}
        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">Stop Losing Money to Missed Calls.</h2>
            <p className="mb-12 text-lg text-slate-600">
              Every minute you wait is another customer calling your competitor. Join hundreds of local businesses using SnapTextBack to grow their revenue.
            </p>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-left">
              <h3 className="mb-6 text-xl font-bold">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400">Business Name</p>
                    <p className="font-bold">SnapTextBack Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400">Email</p>
                    <p className="font-bold">hello@snaptextback.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400">Phone</p>
                    <p className="font-bold">248-216-8175</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400">Location</p>
                    <p className="font-bold">Davisburg, MI</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-xs text-slate-500">
                SMS opt-in data will not be shared with any third party.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold">SnapTextBack</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
              <Dialog>
                <DialogTrigger className="hover:text-blue-600">Privacy Policy</DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <div className="max-h-[60vh] overflow-y-auto pr-4 text-sm leading-relaxed text-slate-600">
                    <p className="mb-4">Last Updated: April 2026</p>
                    <h4 className="mb-2 font-bold text-slate-900">1. Data Collected</h4>
                    <p className="mb-4">We collect only your name and email address when you sign up for our demo. We do not collect your phone number through this website form.</p>
                    <h4 className="mb-2 font-bold text-slate-900">2. Email Usage</h4>
                    <p className="mb-4">Your email is used solely to provide demo instructions and follow up regarding our services. You can unsubscribe at any time using the link in our emails.</p>
                    <h4 className="mb-2 font-bold text-slate-900">3. No Selling/Sharing</h4>
                    <p className="mb-4">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
                    <h4 className="mb-2 font-bold text-slate-900">4. SMS Demo</h4>
                    <p className="mb-4">SMS communication only occurs if you voluntarily call our demo number. Opt-in happens via a "YES" reply after the initial automated response. We do not share mobile opt-in data with third parties.</p>
                    <h4 className="mb-2 font-bold text-slate-900">5. STOP / HELP</h4>
                    <p className="mb-4">You can reply STOP to any message to unsubscribe from the demo flow immediately. Reply HELP for assistance.</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="hover:text-blue-600">Terms & Conditions</DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Terms & Conditions</DialogTitle>
                  </DialogHeader>
                  <div className="max-h-[60vh] overflow-y-auto pr-4 text-sm leading-relaxed text-slate-600">
                    <p className="mb-4">Last Updated: April 2026</p>
                    <h4 className="mb-2 font-bold text-slate-900">1. Service Description</h4>
                    <p className="mb-4">SnapTextBack provides an automated SMS response system for missed calls. The demo provided on this site is for illustrative purposes.</p>
                    <h4 className="mb-2 font-bold text-slate-900">2. Communication Consent</h4>
                    <p className="mb-4">By submitting our form, you consent to receive email communications. By calling the demo number, you consent to receive an initial automated SMS response.</p>
                    <h4 className="mb-2 font-bold text-slate-900">3. SMS Demo Flow</h4>
                    <p className="mb-4">The demo flow requires a "YES" reply to continue. Standard message and data rates may apply. Message frequency varies based on interaction.</p>
                    <h4 className="mb-2 font-bold text-slate-900">4. No Guarantees</h4>
                    <p className="mb-4">We do not guarantee specific revenue increases or business outcomes from using our service.</p>
                    <h4 className="mb-2 font-bold text-slate-900">5. Liability Limitation</h4>
                    <p className="mb-4">SnapTextBack is not liable for any missed business opportunities or technical failures of the SMS/telephony network.</p>
                  </div>
                </DialogContent>
              </Dialog>

              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600">Contact</button>
            </div>

            <p className="text-sm text-slate-400">
              © 2026 SnapTextBack Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
