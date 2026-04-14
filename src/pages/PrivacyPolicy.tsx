import { motion } from "motion/react";
import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <p className="font-medium text-slate-900">Effective Date: April 10, 2026</p>
              <p className="font-medium text-slate-900">Business: SnapTextBack Solutions — SNK LTD LLC</p>
              <p className="font-medium text-slate-900">Contact: hello@snaptextback.com</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">1. Information We Collect</h2>
              <p className="mb-4">We collect the following information when you interact with our website or services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and email address when you submit our demo request form. We do not collect your phone number through any website form.</li>
                <li>If you voluntarily call our demo phone number, your phone number may be captured by our telephony system for the sole purpose of delivering the SMS demo experience you initiated.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
              <p className="mb-4">Your name and email are used to send demo instructions and follow-up communications about SnapTextBack services. Your phone number, if captured via inbound call, is used only to deliver the automated SMS demo sequence you triggered by calling.</p>
              <p>We do not use your information for any purpose beyond what is described here without your explicit consent.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">3. SMS / Text Messaging</h2>
              <p className="mb-4">SMS messages are sent only when you voluntarily call our demo phone number. By calling that number, you consent to receive an initial automated SMS response.</p>
              <p className="mb-4">Continued SMS communication requires you to reply YES to the initial message. This constitutes your express written consent to receive additional automated SMS messages in the demo sequence.</p>
              <p className="mb-4">You can opt out at any time by replying STOP to any message. Reply HELP for assistance. Message frequency varies based on your interaction. Message and data rates may apply.</p>
              <p className="font-bold text-slate-900">Mobile opt-in data and consent is never sold, rented, leased, or shared with any third party for any purpose.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">4. Email Communications</h2>
              <p>By submitting the demo request form, you consent to receive email from SnapTextBack. Every email includes an unsubscribe link. We honor all unsubscribe requests promptly.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">5. Data Sharing</h2>
              <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share data with service providers who assist in operating our platform (such as our CRM and messaging infrastructure) solely to deliver our services, under confidentiality obligations.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">6. Data Retention</h2>
              <p>We retain your contact information only as long as necessary to deliver our services or as required by law. You may request deletion of your data at any time by emailing hello@snaptextback.com.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">7. Cookies</h2>
              <p>Our website may use cookies for basic analytics and functionality. No personally identifiable information is stored in cookies.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">8. Children's Privacy</h2>
              <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect data from minors.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">9. Changes to This Policy</h2>
              <p>We may update this policy periodically. The effective date at the top of this page reflects the most recent revision.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900">10. Contact</h2>
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
