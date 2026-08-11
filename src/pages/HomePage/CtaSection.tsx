import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react'
import { MOCK_COMPANY } from '@/data/company'

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.4" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a free quote from our expert team. We respond within 24 hours and provide
            end-to-end support from inquiry to delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary px-8 py-4 text-base font-semibold hover:bg-white/90 transition-colors"
            >
              Inquire Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`mailto:${MOCK_COMPANY.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {MOCK_COMPANY.email}
            </a>
          </div>

          {/* Quick Contacts */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{MOCK_COMPANY.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>WhatsApp: {MOCK_COMPANY.whatsapp}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
