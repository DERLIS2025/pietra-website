export function buildWhatsAppUrl(name: string, url: string) {
  return `https://wa.me/595XXXXXXXXX?text=${encodeURIComponent(
    `Hola, quiero consultar por el producto ${name} que vi en su web: ${url}`
  )}`
}
