import { motion } from "motion/react";
import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">SnapTextBack</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900">Terms & Conditions</h1>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <p className="font-medium text-slate-900">Effective Date: April 10, 2026</p>
              <p className="font-medium text-slate-900">Business: SnapTextBack Solutions — SNK LTD LLC</p>
              <p className="font-medium text-slate-900">Contact: hello@snaptextback.com</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>By accessing this website or using any SnapTextBack service, you agree to be bound by these Terms & Conditions. If you do not agree, do not use this site or service.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">2. Service Description</h2>
              <p>SnapTextBack provides automated SMS response technology for missed calls, designed for local service businesses. The demo available on this website is for illustrative purposes and does not constitute a binding service agreement.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">3. Email Communication Consent</h2>
              <p>By submitting the demo request form on this website, you expressly consent to receive email communications from SnapTextBack related to our services and your demo request. You may unsubscribe at any time via the link included in every email.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">4. SMS Communication Consent</h2>
              <p className="mb-4">SMS messages are only sent when you voluntarily call our demo phone number. By making that call, you consent to receive an initial automated SMS from SnapTextBack.</p>
              <p className="mb-4">Continued participation in the SMS demo requires you to reply YES to the first message. This reply constitutes your express written consent to receive further automated SMS messages in the demo sequence.</p>
              <p className="mb-4">Message frequency varies depending on your responses. Message and data rates may apply. You may opt out at any time by replying STOP. Reply HELP for support.</p>
              <p className="font-bold text-slate-900">Mobile telephone numbers and SMS opt-in consent are never sold, shared, or transferred to third parties.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">5. Prohibited Use</h2>
              <p>You agree not to use this website or service to: violate any applicable law or regulation, transmit spam or unsolicited messages, impersonate any person or entity, or interfere with the operation of our systems.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">6. Intellectual Property</h2>
              <p>All content on this website including text, graphics, and the SnapTextBack name and logo are the property of SNK LTD LLC and may not be reproduced without written permission.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">7. Disclaimer of Warranties</h2>
              <p>SnapTextBack services are provided "as is" without warranties of any kind. We do not guarantee specific business outcomes, revenue increases, or uninterrupted service availability.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">8. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, SNK LTD LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of or inability to use our services, including any missed business opportunities or failures of SMS or telephony networks.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">9. Indemnification</h2>
              <p>You agree to indemnify and hold harmless SNK LTD LLC, its officers, employees, and agents from any claims, damages, or expenses arising from your use of our services or your violation of these terms.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">10. Governing Law</h2>
              <p>These terms are governed by the laws of the State of Michigan. Any disputes shall be resolved in the courts of Wayne County, Michigan.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">11. Changes to Terms</h2>
              <p>We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">12. Contact</h2>
              <p>SnapTextBack Solutions — SNK LTD LLC</p>
              <p>Email: hello@snaptextback.com</p>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="border-t bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-slate-400">
            © 2026 SnapTextBack Solutions. A brand of SNK LTD LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
