import { MessageCircle } from 'lucide-react'
import { MOCK_COMPANY } from '@/data/company'

export default function WhatsAppFloat() {
  const waNumber = MOCK_COMPANY.whatsapp.replace(/\s/g, '').replace(/\+/g, '')
  const waUrl = `https://wa.me/${waNumber}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
