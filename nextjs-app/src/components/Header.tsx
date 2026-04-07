import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#catalogo', label: 'Catálogo' },
  { href: '/#destacado', label: 'Destacado' },
  { href: '/#trabajos', label: 'Trabajos' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' }
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Marmolería Pietra">
          <img
            src="https://marmoleriapietra.com/images/Logo/logo_transparente_v2%20(1)%20(1).png"
            alt="Marmolería Pietra"
          />
        </Link>
        <nav aria-label="Principal">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://wa.me/595984756158?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n."
          className="btn-quote"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar Cotización
        </a>
      </div>
    </header>
  )
}
