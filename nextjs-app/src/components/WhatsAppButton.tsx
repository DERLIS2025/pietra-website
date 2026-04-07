import { buildWhatsAppUrl } from '@/lib/whatsapp'

type WhatsAppButtonProps = {
  productName: string
  productUrl: string
}

export default function WhatsAppButton({ productName, productUrl }: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(productName, productUrl)}
      target="_blank"
      rel="noreferrer"
      className="btn-whatsapp"
    >
      Solicitar cotización
    </a>
  )
}
